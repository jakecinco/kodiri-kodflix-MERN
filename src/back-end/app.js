// imports the express library post once added to package
const express = require('express');
// initialises the app
const app = express();
// creates 3001 for backend and 3000 for FE
const port = process.env.PORT || 3001;
// imports path module to run static files from server to client
const path = require('path');
// imports node module from films-data file, sends object films.filmsData as a payload
const films = require('./films-data');
app.get('/films/data', (req, res) => res.send(films.filmsData));

// uses the static files and routes them to the FE via the build folder so that there are not 2 servers
app.use(express.static(path.join(__dirname, '../../build')));

// gets static files and sends them to the root - index.html - from a file path after build
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

// tests that port listens with msg on terminal
app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
