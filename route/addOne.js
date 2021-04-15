module.exports = (req, res) => {
    try {
        const { body } = req;
        res.json(body);
    } catch (e) {
        res.error(e)
    }
};