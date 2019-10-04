import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../App.css';

export default class ScandiFilmDetails extends Component {
	constructor() {
		super();
		this.state = {
			film: {}
		};
	}

	componentDidMount() {
		fetch('./films/films-data')
			.then((res) => res.json())
			.then((res) => {
				this.setState({ res });
			})
			.catch((error) => console.log(error));
	}
	render() {
		// deconstruct state
		let film = this.state.film;
		if (film === undefined) {
			return <Redirect to="/pageNotFound" />;
		} else {
			return (
				<div className="film-details-container">
					<h1 className="details-header">{film.name}</h1>

					<div className="details-info">
						<div className="details-cover-container">
							<img alt={film.name} className="details-image" src={film.cover} />
							<div className="details-image-overlay">
								<h2>{film.country}</h2>
							</div>
						</div>

						<div className="details-description-review">
							<h2>{film.description}</h2>
							<p>{film.review}</p>
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
