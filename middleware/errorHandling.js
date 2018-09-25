module.exports = {
    logErrors: () => {
        return function (err, req, res, next) {
            console.error(err.stack)
            next(err)
        }
    },

    clientErrorHandler: () => {
        console.log("wroking")
    }
}