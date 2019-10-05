const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const getFilms = require('./api-filmsData');

app.get('/rest/films', (req, res) => res.send(getFilms()));

//Static files from build folder
app.use(express.static(path.join(__dirname, '../../build')));

//Route the index.html
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
