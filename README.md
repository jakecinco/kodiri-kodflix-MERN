# Kodiri-Kodflix 

Kodflix is a student project to display a film catalog using the MERN stack (Mongo, Express, React & Node).  I chose Scandinavian Noir as a genre for the project.

![kodiri-kodflix-film-catalog-challenges](src/assets/project-screenshot.png)

## Table of Contents
Part 1 - Theoretical concepts
* Learning objectives
* What is JSX
* Styling, CSS & React 
* Stateless or Functional Components
* Stateful Components & Data Models
* Routing

Part 2: Code base and refactoring
* Project Roadmap
* List of challenges from scaffolding to deploy (1-20)
* Images and resources
* Set up & scaffolding (React, JavaScript, CSS-Grid/ Flexbox Challenges 1-10)
* Data models & routing (React, JavaScript Challenges 10-15)
* Refactoring before deploy

### Learning objectives

Kodiri is project-based evening class for JavaScript and React. After graduating from General Assembly, I wanted to work on embedding vanilla javascript and React with another project-based evening course. 

I wanted to review how vanilla javascript is used under the hood of the React Library, this read-me therefore focuses more on this aspect of React rather than the how this project was built. 

### What is JSX?

React is a javascript library that uses JSX tags. JSX mimics HTML but is not HTML, it is JavaScript.

JSX mimics HTML & XML and pre-processors, like Babel, transpile the JSX and convert it to JavaScript objects. JavaScript engines then parse the transpiled JSX. 

JSX allows you to write exactly the same tags as HTML, mimicking the document object model structure.

React enables this process with a React.createElement() method.

JSX elements take attributes that can be styled by are called className not class as class reserved word for constructors in javascript. JSX always has to have 1 root element (div/ main/ section) that encloses the block of code.

More on React here: [https://www.reactenlightenment.com/]


### Stateless, Functional, Presentational or Dumb Components

Stateless or functional components, use functions to present or render JSX elements. They are also known as presentational components as they are used for pure rendering of pages like
- Forms
- Nav bars
- buttons
- Pages that are used again and again

Because they only render something that is passed down as a prop and do no work except render the properties passed down from another component they are also sometimes called a dumb components. 

Functional components can also hold functions that mutuate data that you can then import into other components.

### React classes, components and constructors

Instead of creating a function in a component that can be exported, classes are created with constructors.

Like a javascript class, a react class is a proto-type that contains data (in state) that can be accessed via methods - lifecycle methods like ```ComponentDidMount()``` and ```this.setState({})```

Every React component is a constructor object that allows you to export a copy of the component into other parts of the application.

By importing the Component constructor from the React library we create new classes of components that inherit the properties of the parent React Component.

We therefore import the component constructor from the react library first

```
import React, {Component} from ‘react’
```
Then we declare/ create an intance of or instantiate the new class of component which extends all the functionality of the parent react component, this is similar to instantiation of a factory component. The React higher order component has baked in methods like the React.createElement() method which transpiles JSX into a JavaScript object.

```
The class NewComponent extends React.Component {
 - here it creates a new component which can be rendered through the react render function

render() {
     return( JSX tags to render a DOM-like structure of the page. The DOM-like structure can be exported to other parts of the app and app.js the root js page. This is finally mapped to the root HTML where it is rendered for browser engines to parse);
 }
}

Export default NewComponent;
```
They can be written as anonymous functions but they will not be hoisted Must have a render function that returns something

```
const NewComponent = (properties) => { 
  return ( properties that have been passed down from the component you are extending )
}
```
Once we instantiate our component by setting state, we can update state and change the property or properties that we want changed on the page.

An easy way to remember when you want to set state is to think of the ui - everytime the ui needs to be changed, state changes and therefore you need to create the ```setState``` method. In this component we only want to change the state of the film object - which we have stored in our front-end data model file - film-catalog-data.js

```
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
		this.setState({ film: film });
	}

```
## Styling, CSS & React 

React can be styled with vanilla css, flex-box and grid. There is also css in java-script (Styled Component being the most popular with React), which has not been used in this project.

Grid is the primary CSS framework used matched with Flexbox. As everything is a box in CSS and the normal document flow is top down (column). I used this project to experiment with CSS Grid to understand how to use it. 

Some CSS animation with hovers and pseudo selectors have been used and light animation. All CSS code is in the app.css file to keep CSS styling clearly separated from the components for this project.

## Routing

React does not come with routing out of the box, it has to be installed in a project [yarn add react-router-dom] and the router needs to be imported as well as other higher order components that enable routing, remembering routing history and connecting and linking pages. It is imported once into the main app. It is important to check the version (the version in this app is 5) and documentation 

In a Single Page Application (SPA), each individual page has a route back to App.js including the 404 error page not found.

When importing the router from the library you can rename the BrowserRouter to Router and assign it to a shorter value that you can import. 

```
import { BrowserRouter as Router, Route } from 'react-router-dom';
```

It becomes like any other component to import with one important difference there can only be one parent which is the router that wraps the whole app and all the paths in it, the Route component allows you to specify the path, the exact path ```/ ```and the wild card path ```/:``` that shows paths with ids

The routing funnel goes from the  general - home page to the specific, pages with ids

```
function App() {
	return (
		<Router>
			<div className="app-container">
				<Route exact path="/" component={FilmCatalogGallery} />
				<Route exact path="/:" scandi-film-details" component={ScandiFilmDetails} />
			</div>
		</Router>
	);
}
export default App;

```

In the component to identify the id and name the url with an id (filmId) in this case 

```<Route exact path="/:filmId" component={ScandiFilmDetails} />```

Access the film like so 
```let filmId = this.props.match.params.filmId;``` 
this will hten search all the props that match the params of filmId and return the pages - these in this app are the details pages with each individual film. You can link pages with the Link component from the library and then use the Link component

```
import { Link } from 'react-router-dom';

```

At this stage you need to refactor the link to a prop with template literals - this was something I failed to do and spent a lot of time trying to debug what was wrong with the source page (scandi-film-details) page as it was not rendering and I was getting a stack overflow error which pointed to the details page but the error was in the actual FilmCatalog component

```
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

```
You may need to redirect pages for 404's - for this you will need create a new component  - pageNotFound.js
This page redirects the user when they mistype a url to this page when they land on the scandi-film-details page
Import this into App.js and create a separate route for it.  To switch from one page to another you will also need React Switch component to be imported from the library. The Redirect Component should be imported to the scandi-film-details file as the page when not found is redirected to the error message. On this page, the Link React component is also added as it links each individual page back to the home page.

```
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilmCatalogGallery from './film-catalog-gallery';
import ScandiFilmDetails from './details/scandi-film-details';
import PageNotFound from './pageNotFound';

function App() {
	return (
		<div className="app-container">
			<Router>
				<Switch>
					<Route exact path="/" component={FilmCatalogGallery} />
					<Route exact path="/pageNotFound" component={PageNotFound} />
					<Route exact path="/:filmId" component={ScandiFilmDetails} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;

```

## Project RoadMap

Set up
[npx create-react-app app-name]
[yarn add react-router-dom]

##### Challenges 1-14 Stateless Components
* Challenge 1: Clean up react app display 'hello world'
* Challenge 2: Set up your Kodiri-Kodflix project title
* Challenge 3: Add one image
* Challenge 4: Add 5 more images
* Challenge 5: Display them in 2 rows 
* Challenge 6: Display 3 covers per row with the same aspect ratio
* Challenge 7: Mobile first design
* Challenge 8: CSS animation - hover over images
* Challenge 9: Show the title of the film on hover
* Challenge 10: Scale the app by making reusable components
* Challenge 11: Make a new component for the gallery
* Challenge 12: Add routing to create one page that links to a details page
* Challenge 13: Add routing to many pages
* Challenge 14: Layout with CSS-Grid

##### Challenges 15-20 Stateful Components & Data Models

* Challenge 15: Creating an array of objects for the images, text
* Challenge 16: Creating stateful components
* Challenge 17: Individual pages for each movie
* Challenge 18: Create a not-found page (condtional rendering)
* Challenge 19: Style the movie-component page
* Challenge 20: Deploy to Heroku

#### Resources

Image resources
* Google
* ImDB
* VectorStock
* Imgur

Icons resources
* FlatIcons
* Icon Monster
* Font Awesome
* Devicons

Fonts resources
* Google Fonts

CSS frameworks
 * CSS Grid
 * CSS Flexbox

#### Scaffolding, basic styling: Challenges 1-10

* Set up the jsx containers - main for the whole project
* 2 rows - row1 and row2 as the row containers
* give each div that holds the images a class name
* use the class name in css to use flex box
* To understand the working of the box-model in css and css grid, put the h1 into a header tag and put it in another color
* You can run a border around the two rows as well if it makes it easier to understand the box model, but the layout could become too cluttered, I used light color and 1px to display the row grid lines that is only just visible to the eye, but gives me an understanding of the different boxes in the css-box model. This will be removed as a last step.
* Creating an overlay and hover effects 
  - give the film covers a generic name to reduce styling repetion
  - change the position to relative. 
  - the title of the film in the h5 jsx tag is relative to the film cover position
  - the film cover position remains absolute 

```
.film-cover {
	flex: 1;
	position: relative;
}
```
* position the overlay to absolute to pair the parent div with the child element

```
.film-cover-overlay {
	transition: top ease 1s;
	display: none;
	position: absolute;
	width: 100%;
	top: -10px;
	right: 0;
	background-color: blanchedalmond;
	width: 65%;
	align-content: center;
	opacity: 0.7;
}
```
* connect the two with a show - hide or display none and display block and hide the overflow

```
.film-cover:hover .film-cover-overlay {
	display: block;
	top: 0;
}

.film-cover {
	flex: 1;
	position: relative;
	overflow: hidden;
}
```
* Media display changed with a mobile-first design, flex direction changed back to default - coloumns*

```
@media only screen and (max-width: 640px) {
	.row1,
	.row2 {
		flex-direction: column;
	}
}
```
#### Refactoring challenges 10-12
* Create a separate FilmCatalog component
* Refactor by passing the props where required

```
import React from 'react';

function FilmCatalog(props) {
	return (
		<div className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={props.cover} />
			<div className="film-cover-overlay">
				<h5>{props.description}</h5>
			</div>
		</div>
	);
}

export default FilmCatalog;
```
* connect them to the parent which is App.js At this stage, you can not have individual names for the covers, descriptions as this will be difficult to scale, so remove the original jsx individual names and descriptions, alt tags etc., so that any film  in the films container can be easily updated.

```
<main className="films-container">
				<div className="row1">
					<FilmCatalog
						cover={bolgen}
						description={`The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)`}
					/>
```	

### Routing with React Router (12 & 13)

Routing is described in detail in the learning objectives section

#### Challenge 15 - data models

From hard coding data we can create a function called getFilms to access this data, all the function does is return the data as an array so that we can use array methods to access each element of the array. 

The function is written so that you can call the data in a quicker, more elegant manner and to use array methods when required.

```
export default function getFilms() {
	return [
		{
			id: 'the-wave-film',
			name: 'the-wave',
			cover: bolgen,
			description: `The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)`
		},
	]

```
#### Challenge 16 - Transforming data with methods for rendering 	
 
Often data needs to be transformed to serve the purpose of what you want to render on the page. The array is a static list of data sets in objects. As we have set up a custom function ```getFilms()``` which returns the nested array of objects, we can now in the FilmCatalog  component use  ```array.map()``` to display each film. This adds flexibility to the data we want to display on the page, we access this with the key of the film.id.

The custom function we write is chained - ```{getFilms().map((film))``` the map function is chained taking two arguements the empty call back function and the item to iterate over.

The map function returns the FilmCatalog componenent with the key and the relevant props of the object - in this component we do not want to render the review prop so it can be ommited.

 ```
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
```			

Test the chained map function is working with pure text first, then with the image
![testing-mapping-with-text](src/assets/testing-map-function.png)
![testing-mapping-with-images](src/assets/testing-map-function2.png)

#### Challenge 16-17-18 individual pages and conditional rendering for a 404

Refactor the details pages for the individual route pages as the penultimate step before deploying the app with data in the front end.. Display the id of the page - open App.js the routing component, use lifecycle method componentDidMount.

This stateful component does the work of getting the films and rendering them on individual pages

```
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
				<div className="scandi-film-details">
					<h1 className="details-header">{this.state.film.name}</h1>
					<div className="details-container">
						<img alt={this.state.film.name} className="details-image" src={this.state.film.cover} />
						<div className="details-country">
							<h2 className="details-info-overlay">{this.state.film.country}</h2>
						</div>
						<div>
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
```

#### Elegance and refactoring to improve run-time efficiencies and code readability
* Right click on the app.js file and select the formatter you want to use, set to default and to update formatting on save
* Remove all empty spaces
* Check naming conventions
* Experiment by commenting out unecessary code, styling
* Remove all commented out code and refactor where needed
* Add custom fonts, colours and check look and feel of ui before commiting changes
* Make the code simpler and ('DRY-er')
* For example I changed the image sizes a few times with grid, flex-box, overlays
* Cleaning up divs and containers - this improves run time efficiency
