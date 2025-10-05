import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'; // Correct import for CDK v2
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway'; // Import from aws-cdk-lib/aws-apigateway
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the path to the Lambda handlers relative to the current file (infra-stack.ts)
    // __dirname is `infra/lib`, so `../src/handlers` points to `infra/src/handlers`
    const lambdaHandlersPath = path.join(__dirname, '../src/handlers');

    // 1. Create Lambda functions
    const getProductsListLambda = new NodejsFunction(this, 'GetProductsListLambda', {
      runtime: Runtime.NODEJS_20_X, // Use latest Node.js LTS
      entry: path.join(lambdaHandlersPath, 'getProductsList.ts'), // Path to your handler file
      handler: 'handler', // The name of the exported function in your code
      memorySize: 128,    // Low memory for simple operations
      timeout: cdk.Duration.seconds(10), // Specify timeout using cdk.Duration
      environment: {
        NODE_OPTIONS: '--enable-source-maps' // For better stack traces in CloudWatch
      }
    });

    const getProductsByIdLambda = new NodejsFunction(this, 'GetProductsByIdLambda', {
      runtime: Runtime.NODEJS_20_X,
      entry: path.join(lambdaHandlersPath, 'getProductsById.ts'),
      handler: 'handler',
      memorySize: 128,
      timeout: cdk.Duration.seconds(10),
      environment: {
        NODE_OPTIONS: '--enable-source-maps'
      }
    });

    // 2. Create API Gateway
    const productApi = new RestApi(this, 'ProductApi', {
      restApiName: 'ProductServiceAPI',
      description: 'API for managing products.',
      // Configure CORS globally for the API to allow frontend integration
      defaultCorsPreflightOptions: {
        allowOrigins: ['*'], // IMPORTANT: In production, change this to your Angular frontend URL (e.g., 'https://your-angular-app.com')
        allowMethods: ['GET', 'OPTIONS'], // OPTIONS is needed for CORS preflight requests
        allowHeaders: ['Content-Type', 'X-Amz-Date', 'Authorization', 'X-Api-Key', 'X-Amz-Security-Token'],
      }
    });

    // 3. Define /products resource and integrate with getProductsListLambda
    const productsResource = productApi.root.addResource('products');
    const getProductsListIntegration = new LambdaIntegration(getProductsListLambda);
    productsResource.addMethod('GET', getProductsListIntegration); // GET /products

    // 4. Define /products/{productId} resource and integrate with getProductsByIdLambda
    const productByIdResource = productsResource.addResource('{productId}'); // /products/{productId}
    const getProductByIdIntegration = new LambdaIntegration(getProductsByIdLambda);
    productByIdResource.addMethod('GET', getProductByIdIntegration); // GET /products/{productId}

    // Output the API Gateway URL for easy access - this will appear in your cdk deploy output
    new cdk.CfnOutput(this, 'ProductApiUrl', {
      value: productApi.url,
      description: 'The URL of the Product API'
    });

  }
}