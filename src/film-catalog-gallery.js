import React from 'react';
import FilmCatalog from './film-catalog';
import getFilms from './film-catalog-data';

function FilmCatalogGallery() {
	return (
		<main className="films-container">
			<header className="header">
				<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
			</header>

			<div className="film-covers-container">
				{getFilms().map((film) => {
					return <FilmCatalog key={film.id} id={film.id} cover={film.cover} description={film.description} />;
				})}
			</div>
		</main>
	);
}
export default FilmCatalogGallery;
