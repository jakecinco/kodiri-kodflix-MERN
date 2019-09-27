const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

const films = require('./api-filmsData');
app.get('./api-filmsData/filmsData', (req, res) => res.send(films.filmsData));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
