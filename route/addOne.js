const { v4 } = require('uuid');

module.exports = (req, res) => {
    try {
        const { body } = req;
        const id = v4();
        const newKrolik = {...body, id};
        res.json(newKrolik);
    } catch (e) {
        res.error(e)
    }
};