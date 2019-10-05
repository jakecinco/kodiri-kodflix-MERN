import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class FilmCatalog extends React.Component {
	render() {
		let { id, title } = this.props;
		return (
			<Link to={`/${id}`} className="film-cover">
				<img alt={title} src={require(`../assets/${id}.jpg`)} />
				<div className="film-cover-overlay">
					<h5>{title}</h5>
				</div>
			</Link>
		)
	}
}
export default FilmCatalog;
