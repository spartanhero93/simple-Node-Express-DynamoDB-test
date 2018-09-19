const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'default',
  secretAccessKey: 'default'
})

const dynamodb = new AWS.DynamoDB()

const params = {
  TableName: 'Movies',
  KeySchema: [
    { AttributeName: 'year', KeyType: 'HASH' }, // Partition key
    { AttributeName: 'title', KeyType: 'RANGE' } // Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: 'year', AttributeType: 'N' },
    { AttributeName: 'title', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
}

dynamodb.createTable(params, (err, data) => {
  err
    ? console.error(
        'Unable to create table. Error JSON:',
        JSON.stringify(err, null, 2)
      )
    : console.log('Created Table, JSON data: ', JSON.stringify(data, null, 2))
})
