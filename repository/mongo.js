const connect = (MongoClient, mongoConnectionString) => {
    // if (!process.env.USER_NAME && !process.env.PASSWORD) {
    //     throw console.log("Mongo user name and password is not provided.")
    // }
    try {
        // new Promise((resolve, reject) => {
        MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, function (err, client) {
            if (err) return console.log(err)
            // reject(console.log(err))
            const database = client.db('nodeBackend');

            const collection = database.collection('users')
            // collection.insertMany([{ name: "test", email: "test@test.com" }, { name: "test2", email: "test2@test2.com" }], (err, result) => {
            //     if (err) return console.log(err)
            //     console.log(result.insertedCount
            // })
            collection.find().toArray((err, docs) => {
                if (err) return console.log(err)
                docs.forEach(element => {
                    console.log(element.name)
                })
            })
            client.close()
        })
        // })
    } catch (e) {
        return new Error(`issue connecting to mongo: ${e}`)
    }

}

const MongoClient = require('mongodb').MongoClient;
const mongoConnectionString = 'mongodb://localhost//';
//const mongoConnectionString = `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds135394.mlab.com:35394/simple-node-backend-app`
connect(MongoClient, mongoConnectionString)
