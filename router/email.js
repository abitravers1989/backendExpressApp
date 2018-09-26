var express = require('express');
var router = express.Router();

const healthCheck = function (req, res) {
    res.send('healthy')
}

router.route('/health')
    .get(healthCheck)

module.exports = router;