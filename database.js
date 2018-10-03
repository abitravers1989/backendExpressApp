
///add values in container for connectionString and mongoose.

class database {
    constructor(connectionString, mongoose) {
        this.connectionString = connectionString
        this.mongoose = mongoose;
    }

    makeConnect() {
        this.mongoose.connect(connectionString);
        this.mongoose.Promise = global.Promise;
    }

    printOutPut() {
        // setTimeout
        console.log("database connected on")
    }

    connectAndSetUpListners() {
        const db = this.mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'))
        db.on('open', this.printOutPut.bind())
            ;
    }
}
module.exports = database


