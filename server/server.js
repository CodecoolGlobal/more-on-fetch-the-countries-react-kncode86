const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({origin: "http://localhost:3000"}));


app.post('/api/fav', (req, res) => {
    console.log(req.body);
    res.json("Post request done.");
});

app.listen(3001, () => {
    console.log('Server is listening on port 3001.')
});