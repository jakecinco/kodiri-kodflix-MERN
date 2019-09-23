import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilmCatalogGallery from './front-end/film-catalog-pages/film-catalog-gallery';
import ScandiFilmDetails from './front-end/details/scandi-film-details';
import PageNotFound from './front-end/film-catalog-pages/film-catalog-page-not-found';

function App() {
	return (
		<div className="app-container">
			<Router>
				<Switch>
					<Route exact path="/" component={FilmCatalogGallery} />
					<Route exact path="/pageNotFound" component={PageNotFound} />
					<Route exact path="/:filmId" component={ScandiFilmDetails} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
