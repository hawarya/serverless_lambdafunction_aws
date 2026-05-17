import {
  DynamoDBClient,
  PutItemCommand
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-1"
});

export const handler = async (event) => {

  try {

      // Parse incoming request
      const body = JSON.parse(event.body);

      const longUrl = body.url;

      // Generate random short ID
      const shortId = Math.random()
          .toString(36)
          .substring(2, 8);

      // Save into DynamoDB
      const params = {
          TableName: "UrlTable",
          Item: {
              shortId: {
                  S: shortId
              },
              longUrl: {
                  S: longUrl
              }
          }
      };

      await client.send(
          new PutItemCommand(params)
      );

      // Return response
      return {
          statusCode: 200,

          body: JSON.stringify({
              message:
                  "Short URL created successfully",

              shortId: shortId,

              shortUrl:
                  `https://vav6rb525b.execute-api.us-east-1.amazonaws.com/prod/${shortId}`
          })
      };

  } catch (error) {

      console.log(error);

      return {
          statusCode: 500,

          body: JSON.stringify({
              message:
                  "Internal Server Error"
          })
      };
  }
};