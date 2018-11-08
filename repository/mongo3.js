{
    start: () => {
        MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, function (err, client) {
            if (err) reject(err)

            const database = client.db('nodeBackend');

            // const collection = database.collection('users')
            // collection.insertMany([{ name: "test", email: "test@test.com" }, { name: "test2", email: "test2@test2.com" }], (err, result) => {
            //     if (err) return console.log(err)
            //     console.log(result.insertedCount
            // })

            resolve(database)
        })
    }
}

