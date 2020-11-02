
console.log("Lambda listening...")

exports.handler = async (event) => {
    
    console.log("Inside message");
    
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(event.Record));
    
    console.log('Reading ... {}',JSON.stringify(event.Record[0].body))
    
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    
    console.log("--------> DONE <-----------")
    return response;
};
