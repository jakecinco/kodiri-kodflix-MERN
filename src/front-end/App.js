import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilmCatalogGallery from './film-catalog-pages/film-catalog-gallery';
import ScandiFilmDetails from './details/scandi-film-details';
import PageNotFound from './film-catalog-pages/film-catalog-page-not-found';

function App() {
	return (
		<div className="app-container">
			<Router>
				<Switch>
					<Route exact path="/" component={FilmCatalogGallery} />
					<Route exact path="/pageNotFound" component={PageNotFound} />
					<Route exact path="/:filmID" component={ScandiFilmDetails} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
