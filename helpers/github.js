const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName,callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // let options = {
  //   url: 'https://api.github.com/users'+userName,
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // };
  request.get('https://api.github.com/users/'+userName+'/repos', {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }, (error, res, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(`statusCode: ${res.statusCode}`)
    callback(body)
  })

}

module.exports.getReposByUsername = getReposByUsername;