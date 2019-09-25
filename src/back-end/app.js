const express = require('express');
const app = express();
const port = 3001;
const films = require('./films-data');

app.get('/films/data', (req, res) => res.send(films.filmsData));

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
