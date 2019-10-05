import React from 'react';
import FilmCatalog from './film-catalog-page';

class FilmCatalogGallery extends React.Component {
	constructor() {
		super();
		this.state = {
			films: []
		};
	}
	componentDidMount() {
		fetch('/rest/films')
			.then(res => res.json())
			.then(films => this.setState({ films }));
	}
	render() {
		return (
			<div className='film-covers-container'>
			{
				this.state.films.map(film => (
					<FilmCatalog
						key={film.id}
						id={film.id}
						cover={film.cover}
						description={film.description}
					/>
				))
			}
			</div>
		);
	}
}
export default FilmCatalogGallery;
