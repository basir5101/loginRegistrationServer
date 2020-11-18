const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb://LoginRegintration:k9tCYjRbtXSzVLDl@cluster0-shard-00-00.yuuvo.mongodb.net:27017,cluster0-shard-00-01.yuuvo.mongodb.net:27017,cluster0-shard-00-02.yuuvo.mongodb.net:27017/LoginRegistration?ssl=true&replicaSet=atlas-12mjui-shard-0&authSource=admin&retryWrites=true&w=majority";
//const MONGOURI = "mongodb://LoginRegintration:k9tCYjRbtXSzVLDl@ds257698.mlab.com:57698/LoginRegistration";

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://LoginRegintration:<password>@cluster0.yuuvo.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;