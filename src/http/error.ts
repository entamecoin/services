import { INTERNAL_SERVER_ERROR } from 'http-status';

/**
 * エラーハンドラー
 */
export default (err: any) => {
    return {
        statusCode: INTERNAL_SERVER_ERROR,
        body: JSON.stringify({ error: err })
    };
};
