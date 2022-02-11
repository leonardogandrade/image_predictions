const path = require('path');

const greet = (req, res) => {
    // const page = path.resolve(__dirname, '../', 'view', 'greeting.html');
    // res.sendFile(page);
    res.json({ msg: 'hello' })
}

module.exports = {
    greet,
}