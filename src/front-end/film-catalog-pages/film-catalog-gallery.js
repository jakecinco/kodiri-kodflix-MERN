import React, { Component } from 'react';
import FilmCatalog from './film-catalog-page';

export default class FilmCatalogGallery extends Component {
	constructor() {
		super();
		this.state = {
			films: []
		};
	}
	// fetch films from the backend, turn the response into a json file, then set state to the films array
	componentDidMount() {
		fetch('./films/films-data').then((res) => res.json()).then((films) => this.setState({ films }));
	}

	render() {
		// deconstruct state
		let films = this.state.films;
		return (
			<main className="films-container">
				<header className="header">
					<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
				</header>
				{/* now change state by maping through the new state and returning changed state key values */}
				<div className="film-covers-container">
					{films.map((film) => {
						return (
							<FilmCatalog key={film.id} id={film.id} cover={film.cover} description={film.description} />
						);
					})}
				</div>
			</main>
		);
	}
}
