module.exports = ({app}) => {
    return {
        start: () => {
            try {
                app.listen(3000, function () {
                    app.emit('listened', null)
                }) 
                
                app.on('listened', function () {
                    console.log(`listening on port 3000`)
                })  
            } catch (err) {
                logger.fatal(err, 'Failed to start server')
                process.exit()
            }
        }
    }
}