const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://nico:Sugarshow1@cluster0-hck0j.mongodb.net/test?retryWrites=true&w=majority')
  .then(result => {
    console.log('Connected!');
    callback(result);
  })
  .catch(err => {
    console.log(err);
  }); 
}

module.exports = mongoConnect;