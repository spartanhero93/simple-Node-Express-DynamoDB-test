const AWS = require('aws-sdk')
const fs = require('fs')

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'default',
  secretAccessKey: 'default'
})

const docClient = new AWS.DynamoDB.DocumentClient()

console.log('Importing movies into DynamoDB. Please wait')

const allMovies = require('./moviedata.json')
allMovies.forEach(movie => {
  const params = {
    TableName: 'Movies',
    Item: {
      year: movie.year,
      title: movie.title,
      info: movie.info
    }
  }
  docClient.put(params, (err, data) => {
    err
      ? console.error(
          'Unable to add movie',
          movie.title,
          '. Error JSON:',
          JSON.stringify(err, null, 2)
        )
      : console.log('PutItem succeeded:', movie.title)
  })
})
