import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';

export default class ScandiFilmDetails extends Component {
	constructor() {
		super();
		this.state = {
			film: {}
		};
	}

	componentDidMount() {
		fetch('/rest/films')
			.then(res => res.json())
			.then(films => {
                let filmID = this.props.match.params.filmID;
                let film = films.find(film => film.id === filmID);
                this.setState({ film });
            })
			.catch((error) => console.log(error));
	}
	render() {
		let film = this.state.film;
		if (film) {
			return film.id ?
				<FilmDetails film={film} />:
				<div />
		} else {
			return <Redirect to='/pageNotFound' />
		}

	}
}



	// 	if (this.state.film === undefined) {
	// 		return <Redirect to="/pageNotFound" />;
	// 	} else {
	// 		return (
	// 			<div className="film-details-container">
	// 				<h1 className="details-header">{this.state.film.name}</h1>

	// 				<div className="details-info">
	// 					<div className="details-cover-container">
	// 						<img alt={this.state.film.name} className="details-image" src={this.state.film.cover} />
	// 						<div className="details-image-overlay">
	// 							<h2>{this.state.film.country}</h2>
	// 						</div>
	// 					</div>

	// 					<div className="details-description-review">
	// 						<h2>{this.state.film.description}</h2>
	// 						<p>{this.state.film.review}</p>
	// 					</div>
	// 				</div>
	// 				<Link to="/">
	// 					<h4>Back to home page</h4>
	// 				</Link>
	// 			</div>
	// 		);
	// 	}
	// }

function FilmDetails({ film }) {
    return (
        <div className='film-details-container'>
            <h1>{film.name}</h1>
            <div className='details-info'>
                <h3 className='details-description-review'>
                    {film.description}
                </h3>
                <div className='details-cover-container'>
                    <img
                        src={require(`../assets/${film.id}.jpg`)}
                        alt={film.name} />
                </div>
            </div>
            <br />
            <Link to='/'>Back to home page</Link>
        </div>
    )
}	
