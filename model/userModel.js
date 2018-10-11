const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    customerEmail: String,
    customerName: String,
    _id: Schema.Types.ObjectId
})

//compile model from schema
//'UserModel' is the name of the collection which will be created for the model
//second arg is the schema you want to use to create the model 

const userModel = mongoose.model('UserModel', UserModelSchema)

let user_insance = new userModel({ customerEmail: "test@test.com", customerName: "snakes" });

user_insance.save((err) => {
    if (err) return console.log(err)
})

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
//https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

// var EmailSchema = new Schema({
//     email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: 'Email address is required',
//         validate: [validateEmail, 'Please fill a valid email address'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     }
// });