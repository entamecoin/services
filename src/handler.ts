// tslint:disable-next-line:no-implicit-dependencies
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

/**
 * test
 */
export const hello: Handler = (event: APIGatewayEvent, _: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  };

  cb(null, response);
};
