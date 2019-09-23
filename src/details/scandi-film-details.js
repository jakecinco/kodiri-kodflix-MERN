import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getFilms from '../film-catalog-data';
import '../App.css';

export default class ScandiFilmDetails extends Component {
	constructor() {
		super();
		this.state = {
			film: {}
		};
	}

	componentDidMount() {
		let filmId = this.props.match.params.filmId;
		let film = getFilms().find((film) => film.id === filmId);
		this.setState({ film });
	}

	render() {
		if (this.state.film === undefined) {
			return <Redirect to="/pageNotFound" />;
		} else {
			return (
				<div className="film-details-container">
					<h1 className="details-header">{this.state.film.name}</h1>

					<div className="details-info">
						<div className="details-cover-container">
							<img alt={this.state.film.name} className="details-image" src={this.state.film.cover} />
							<div className="details-image-overlay">
								<h2>{this.state.film.country}</h2>
							</div>
						</div>

						<div className="details-description-review">
							<h2>{this.state.film.description}</h2>
							<p>{this.state.film.review}</p>
						</div>
					</div>
					<Link to="/">
						<h4>Back to home page</h4>
					</Link>
				</div>
			);
		}
	}
}
