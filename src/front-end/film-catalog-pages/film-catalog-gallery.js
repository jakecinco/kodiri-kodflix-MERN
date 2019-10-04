import React, { Component } from 'react';
import FilmCatalog from './film-catalog-page';

export default class FilmCatalogGallery extends Component {
	constructor() {
		super();
		this.state = {
			films: []
		};
	}
	componentDidMount() {
		fetch('./films/films-data').then((res) => res.json()).then((films) => this.setState({ films }));
	}
	render() {
		return (
			<main className="films-container">
				<header className="header">
					<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
				</header>

				<div className="film-covers-container">
					{this.state.films.map((film) => {
						return (
							<FilmCatalog
								key={this.state.film.id}
								id={this.state.film.id}
								cover={this.state.film.cover}
								description={this.state.film.description}
							/>
						);
					})}
				</div>
			</main>
		);
	}
}
