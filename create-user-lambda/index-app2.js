
var AWS = require('aws-sdk');


var ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event,context, callback) => {
  
   
    const response = {
        statusCode: 200,
        body: event
    };
    console.log('Started')
    console.log(`Incoming data = ${JSON.stringify(response.body)}`)
   

    await createEmployee(event).then(() => {
        callback(null, {
            statusCode : 201,
            body : event
        })
    }).catch((err) => {
        console.log(err);
        callback(err)
    });

    console.log("Its done...")
    return response;
};

function createEmployee(event){
    var params = {
        TableName: process.env.dynamo_db_table,
        Item = event
      };
    return ddb.put(params).promise();
}
