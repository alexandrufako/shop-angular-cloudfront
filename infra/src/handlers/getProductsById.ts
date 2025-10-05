// infra/src/handlers/getProductsById.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { products } from '../data/products'; // Import your mock data

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("getProductsById handler triggered:", event);

    const productId = event.pathParameters?.productId; // Get ID from path parameters

    if (!productId) {
        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
            body: JSON.stringify({ message: "Product ID is missing in path" }),
        };
    }

    try {
        const product = products.find(p => p.id === productId);

        if (!product) {
            return {
                statusCode: 404, // Correct status for "not found"
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                },
                body: JSON.stringify({ message: `Product with ID ${productId} not found` }),
            };
        }

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
            body: JSON.stringify(product),
        };
    } catch (error) {
        console.error("Error in getProductsById:", error);
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