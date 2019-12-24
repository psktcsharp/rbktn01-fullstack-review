const express = require('express');
const github = require('../helpers/github')
let app = express();
const axios = require('axios')
const db = require('../database/index')
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())
app.post('/repos', function (req, res) {
//   // TODO - your code here!
//   // This route should take the github username provided
//   // and get the repo information from the github API, then
//   // save the repo information in the database

  var data =  github.getReposByUsername(req.body.username,(data)=>{
    try{
      //save to database
      //JSON.parse(data)
      db.save(JSON.parse(data),(result)=>{
        console.log(result)
      })
    }
  catch(error){
    console.log("error happend while saving", error.message)
  }
  });





  //Fetch from github API
//   axios.post('https://api.github.com/users/'+req.body.username,{})
//   .then(function (response) {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error.message)
//     res.send("nah")
// })
});

app.get('/repos', function (req, res) {

  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

db.find({},((result) => {
  //console.log(result[0]["model"]("repo",repoSchema))

 //console.log(result['0'])

  console.log(result['0']['1'].url)


}))
