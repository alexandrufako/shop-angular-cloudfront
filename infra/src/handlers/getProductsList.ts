// infra/src/handlers/getProductsList.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { products } from '../data/products'; // Import your mock data

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("getProductsList handler triggered:", event);

    try {
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // Required for CORS
                "Access-Control-Allow-Methods": "GET",
            },
            body: JSON.stringify(products), // Return the full array of products
        };
    } catch (error) {
        console.error("Error in getProductsList:", error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
};