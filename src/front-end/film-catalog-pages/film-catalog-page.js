import React from 'react';
import { Link } from 'react-router-dom';

function FilmCatalog(props) {
	return (
		<Link to={`/${props.id}`} className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={props.cover} />
			<div className="film-cover-overlay">
				<h5>{props.description}</h5>
			</div>
		</Link>
	);
}
export default FilmCatalog;
