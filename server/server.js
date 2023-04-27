const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({origin: "http://localhost:3000"}));

const favCountries =[];

app.post('/api/fav', (req, res) => {
    console.log(req.body);
    favCountries.push(req.body);
    res.json(favCountries);
});

app.get('/api/fav', (req, res) => {
    res.json(favCountries);
} );

app.listen(3001, () => {
    console.log('Server is listening on port 3001.')
});