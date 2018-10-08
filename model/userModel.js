const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaModel = new Schema({
    customerEmail: String,
    customerName: String,
    _id: Schema.Types.ObjectId
})

