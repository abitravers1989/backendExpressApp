module.exports = {
    logErrors: () => {
        return function (err, req, res, next) {
            console.error(err.stack)
            next(err)
        }
    },

    clientErrorHandler: () => {
        return function clientErrorHandler(err, req, res, next) {
            console.log(req.xhr)
            if (req.xhr) {
                res.status(500).send({ error: "something went wrong" })
            } else {
                next(err)
            }
        }
    }
}