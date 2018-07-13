// tslint:disable-next-line:no-implicit-dependencies
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { OK } from 'http-status';

import errorHandler from '../../error';

/**
 * test
 */
export async function search(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
    try {
        return {
            statusCode: OK,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event
            })
        };
    } catch (error) {
        return errorHandler(error);
    }
}

export async function add(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
    try {
        return {
            statusCode: OK,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event
            })
        };
    } catch (error) {
        return errorHandler(error);
    }
}

export async function remove(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
    try {
        return {
            statusCode: OK,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event
            })
        };
    } catch (error) {
        return errorHandler(error);
    }
}
