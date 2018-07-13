// tslint:disable-next-line:no-implicit-dependencies
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { OK } from 'http-status';

import errorHandler from '../../../error';

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

export async function searchMoneyTransferActions(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function findByAccountNumber(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function open(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function close(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function startWithdraw(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function cancelWithdraw(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function confirmWithdraw(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function startDeposit(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function cancelDeposit(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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

export async function confirmDeposit(event: APIGatewayEvent, _: Context): Promise<APIGatewayProxyResult> {
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
