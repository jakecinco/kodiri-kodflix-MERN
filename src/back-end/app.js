const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const films = require('./films-data');

app.get('/films/data', (req, res) => res.send(films.filmsData));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '<path-to-build-folder>', 'index.html'));
});

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
