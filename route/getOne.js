module.exports = (req, res) => {
    const { id } = req.params
    res.send(`get ${id} one called`);
};