const express = require('express');
const items = require('./items');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/items', (req, res) => {
    const searchKeyword = req.query.search;

    let response = items;

    if (searchKeyword !== undefined && searchKeyword.length > 0) {
        response = response.filter(row => row.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1);
    }

    res.send({items: response});
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
