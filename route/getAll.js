module.exports = (req, res) => {
    res
        .status(200)
        .json({app: 'krolik', message: 'Hello from the server side'});
}