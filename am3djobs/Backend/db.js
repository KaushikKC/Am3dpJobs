// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose');
const uri = "mongodb+srv://Am3dpJobs:Pondicherry123@cluster0.0kyoubg.mongodb.net/?retryWrites=true&w=majority"

// let dbConnection

export async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch(err) {
    console.log(err);
  }
}


// module.exports = {

//   connectToDb: (cb) => {
//     async function connect () {

    
//     MongoClient.connect(uri)
//       .then(client => {
//         dbConnection = client.db()
//         console.log("Connected to MongoDB")
//         return cb()
        
//       })
//     }
//       .catch(err => {
//         console.log(err)
//         return cb(err)
//       })
//   },
//   getDb: () => dbConnection
// }