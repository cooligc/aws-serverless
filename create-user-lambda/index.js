
var AWS = require('aws-sdk');


var ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  
    var params = {
      TableName: process.env.dynamo_db_table,
    };
    const response = {
        statusCode: 200,
        body: event
    };
    console.log('Started')
    console.log(`Incoming data = ${JSON.stringify(response.body)}`)
    params.Item = event;
    console.log(`DynamoDB Data = ${JSON.stringify(params)}`)
    await ddb.put(params).promise();
    console.log("Its done...")
    return response;
};
