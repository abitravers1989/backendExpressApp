var express = require('express');
var router = express.Router();

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

router.route('/health')
    .get(healthCheck)

router.route('/user')
    .post(createOneUser)

module.exports = router;