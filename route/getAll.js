module.exports = (req, res) => {
    res
        .json({app: 'krolik', message: 'Hello from the server side'});
}