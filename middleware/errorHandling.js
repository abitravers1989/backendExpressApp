module.exports = {
    clientErrorHandler: function (err, req, res, next) {
        if (req.xhr) {
            res.status(500).send({ error: "something went wrong" })
        } else {
            next(err)
        }
    }
}