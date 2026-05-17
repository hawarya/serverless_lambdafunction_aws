import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB({
    region: "us-east-1"
});

export const handler = async (event) => {

    try {

        console.log(event);

        const shortId =
            event.pathParameters?.shortId;

        if (!shortId) {

            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "shortId missing"
                })
            };
        }

        const params = {
            TableName: "UrlTable",

            Key: {
                shortId: {
                    S: shortId
                }
            }
        };

        const result =
            await dynamodb
                .getItem(params)
                .promise();

        console.log(result);

        if (!result.Item) {

            return {
                statusCode: 404,

                body: JSON.stringify({
                    message: "URL not found"
                })
            };
        }

        const longUrl =
            result.Item.longUrl.S;

        return {
            statusCode: 302,

            headers: {
                Location: longUrl
            }
        };

    } catch (error) {

        console.log(error);

        return {
            statusCode: 500,

            body: JSON.stringify({
                message: "Internal Server Error",
                error: error.message
            })
        };
    }
};