const express = require('express');
const router = express.Router();


const healthCheck = function (req, res) {
    res.send('healthy')
}

const createOneUser = function (req, res) {
    const customerEmail = req.body.email;
    const customerName = req.body.name;
    // console.log(customerEmail)
    // console.log(customerName)
    //change this to validation middleware.
    //want to log is email in wrong formatt. 
    if (customerEmail && customerName) {
        return res.status(201).json(`Created user with: Name: ${customerName} Email: ${customerEmail}`)
    } else {
        // console.error(err.stack)
        return res.status(400).send("valid email not provided")
    }
}

const getAll = function (req, res) {
    const database = req.db;
    // console.log(req);
    // res.send(database)
    const users = database.collection('users').find();
    users.each((err, doc) => {
        if (err) throw console.log(err);
        res.send(doc)
    })
}

router.route('/health')
    .get(healthCheck)

router.route('/user')
    .get(getAll)
    .post(createOneUser)

module.exports = router;