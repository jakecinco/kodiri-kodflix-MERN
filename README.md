# Kodiri-Kodflix-MERN

This is part -2 of the challenge where the front-end remains untouched and data is moved to the back-end.

## Learning Objectives

Setting up and running a backend data-base removing data from the browser and front-end files to the backend. Understanding the difference between each of the backend moving parts - Node, Express and MongoDB.

#### How the internet works

It is useful to see the relationship between the backend and front-end by looking at how the internet works - MDN documentation[https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work] and a good YouTube Video:  [https://www.youtube.com/watch?v=7_LPdttKXPc]

#### What is the backend?

Front-end refers to the user-interface and user-experience of an application on a client-device - phone, tablet, computer screen, wrist watch...

Backend refers to the data, logic that the user does not see and that is on a physical or cloud-based server, in databases and other remote (as in non-client-side devices) devices.

Separation of concerns - front-end light data that runs no risks of security breaches can be stored on the browser-side - cookies/ authentication codes, etc. are fine but not personal details of users, IP-protected code-bases, etc., which are stored securely in servers or local storage in the backend.

When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the backend.

For the backend data and services to connect to the front-end application programming interfaces (API) are needed.

#### What is node.js?

Node is not a language it is an open source runtime environment created by Ryan Dahl in 2009. Dahl took the code on the browser (Chrome's V8 engine) and repackaged it to make it work server-side. It is cross-platform and works on Chakra and SpiderMonkey engines as well.

While node it is based on JavaScript, it is not a language but a cross-platform environment. It also runs different API’s for HTTP requests, file systems, streams, child-processes to render server-side data/payloads/information. It is easy to install and with node package manager(npm) offers access to a plethora of open source packages to add to apps/ projects.

The fluid data flow client-to server, with node, express and associated npm packages, is due to the fact that node is based on JavaScript. It is, like JS, a single-thread, non-blocking system in runtime.

It is therefore good for apps with a high volume of short messages in real-time operations (chat-bots, facial recognition, conferencing, gaming, e-commerce) that need real-time runners between the front end javascript code and the backend database. (Trello, googledocs, DropBox use node.js).

It is more scalable than Rails (Ruby) which can not shuffle around data quickly due to the “thick” application layer - ruby to ruby-on-rails.

Node is largely used to limit the languages that a team uses to JavaScript, hence making teams cross-functional - this is not possible if the backend is run on php, Scala, java and other non-js languages.

Node & Express are not good for CPU heavy applications. 

Node Documentation [https://nodejs.org/en/docs/guides/getting-started-guide/]

Good articles to read to understand how and why you would use Node.js as the backend server
* Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
* Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]

#### What is express.js?

Express.js forms part of the middle-ware between the backend server and the front-end ui-ux. 

Just as React is a library that manages browser-based data in state/ ui-ux changes and DOM manipulation, Express is a frame-work that manages requests from the servers' databases to the front-end.

Express comes with it's own syntax and methods. It is a protocol and has a more rigid structure but is lightweight and very quick to set up. The basic code for set up to test the server is working is below.

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Kodflix App Says Hello World!'));

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
```

Instead of writing code in nodes in the document, express methods help route responses and requests to and from the servers' databases to the front-end.

This backend routing of the data happens through API calls and routing of URLs that are not visible to the end-user.

Documentation [https://expressjs.com/en/4x/api.html#app]

Reading-list:
[https://jilles.me/getting-the-express-app-js/]
[https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4]
[https://jilles.me/express-routing-the-beginners-guide/]
[https://expressjs.com/en/guide/routing.html]

 #### What is the JavaScript event-loop?
 
 Node and express provide an event-driven architecture for apps and projects. An event is a series of occurences driven by changes on the frontend. Events build up in the task queue and are executed by parsers (both in the front-end and back-end).

 As javascript is a single-threaded non-blocking code base, it is able to deal with multiple tasks on the task queue driven by events.

 For more detail on the event-loop, MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop]

#### Backend package managers - Node vs. Yarn

Both are open source registries for software libraries for node.js, yarn is owned by Facebook, npm by npm Inc.

- What do package managers do? They automate the process of installing, updating, configuring, and removing pieces of software packages retrieved from a global registry.

They are different from operating system package managers, such as Brew. Brew also installs, updates, configures and removes software but in a local environment (OS).

- Which one?
Yarn takes up a lot of disk space, but is faster, manages licences better however, the disc usage space vs efficiency npm considered the better option
- npm is a better package to manage dependencies as sends usage details back to Facebook
- npm is written all in lower case node package manager installation is sequentially
- yarn uses all of the npm packages it is only a different installation process - using cloudflare, multiple installations happen at the same time

- Conflicts
If npm-run-all does give you trouble, which it shouldn't, you could consider installing yarn-run-all
Using both at the same time creates conflicts so use one or the other in the CLI for your project 

- Good articles to read to compare the two package managers:- 
* Installation and use [https://www.positronx.io/yarn-vs-npm-best-package-manager/]
* Which is better - op-ed[https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/]
* Scotch[https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm]
* Keycdn (almost the same as scotch.io) [https://www.keycdn.com/blog/npm-vs-yarn]


#### What is nodemon?

Nodemon hot loads the back end server so you do not need to run commands such as  ```node src/backend/app.js``` (used in this project).

Check in your package-JSON for the install and read documentation [https://github.com/remy/nodemon] which helps bug fixing if you encounter challenges hot-loading.

### What is async JavaScript?

Most non-JavaScript code is parsed synchronously - which means each thread executes one function before going on to the next.

 Async javascript is used extensively in connecting the backend to front-end user interfaces and forms and important part in joining up the stack. Data from any source can be transpiled into JavaScript.

 With call back functions, promises, passing by reference and other methods that can be written into javascript, allows the front-end call stack to operate with a single thread, and multiple calls to the stack in the task queue. 

Some other async methods are ```setState({]})``` event handlers ```onClick.()``` and ```setTimeOUt.()``` are some other examples.

For more on async javascript, callbacks, promises and recursion checkout Gray's Kodiri videos [https://www.youtube.com/watch?v=pX74__nD48I] [https://www.youtube.com/watch?v=F5XD1JNhkP8] [https://www.youtube.com/watch?v=PlhmNNNyYyogit]

#### What is a REpresentational State Transfer or a REST-ful API?

The backend depends on API's to run HTTP (hyper-text-transfer-protocol) requests from backend databases that are written in a plurality of languages that may not be text-based. As rendering on the front end is on HTML (hyper-text-markup-language) data from the backend needs to be converted into text and then rendered on the page.

API's call the data from the database, posts this data on the web-page, updates the data that it receives from the front-end, sends it back to the backend and saves it or if it is not needed the data is deleted. This cycle of calling, posting, updating and deleting data is also called the CRUD cycle - Create, Read, Update, Delete. 

The methods are are GET, PUT, POST, UPDATE, DELETE - represent the current state of the object - that is where the name Representational State Transfer (REST) gets it's name and in what state (or payload/ data)  it is in during transit from client to server.

It is therefore an architectural style for communicating between client-server. It is a state-less model as the payloads are merely a representation of state at calltime.

The process of converting the data in javascript from a backend database in a language that is not javascript is done through JSON - javascript object notation.

Restful-React - As React defines itself as a front-end library, it allows users to figure out what works best for the app - this provides building blocks and flexiblity it also means that there are no protocols to follow, it does not prescribe how REST API's should be created.

Read More on API's and MVC [https://www.codecademy.com/articles/what-is-rest] [https://www.codecademy.com/articles/mvc]

#### What is JSON?

JSON is a lightweight store of data into text so that HTTP calls can be made, parsed (interpreted) by browsers and sent back to databases. As it is a text-based format it is lightweight.  It is then  reconverted back into the format that the database requires. It therefore stores and transports data quickly and efficiently.

Compared to XML parsing, JSON is less verbose. JSON uses less data overall so reduces cost and increases parsing speed. 

The main task of JSON is to convert and object into text for client-server communcations.

Simple methods like ```JSON.parse()``` and ```JSON.stringify()``` have syntax that are easy to understand, for example, curly-braces hold the values of an object, square-braces hold the values of arrays.

There are also differences -  JSON objects both the name and value pair are enclosed in quotes, to denote both are strings. Edureka has a good video worth watching[https://www.youtube.com/watch?v=uw_rP5bV9r0] for a more detailed understanding.

### What is the MEAN-MERN stack?

A stack is a collection of technologies used to run an app. The MEAN stack and MERN stack are an end-to-end javascript collection of technologies used to build apps using the Mongo database and mongoose.js/ express.js as a runner,  angular.js or react.js for the front-end ui-ux and node.js to connect the Mongo database to the front-end libraries.

The MEAN/MERN stack are a network of applications based on javascript that communicate through the network front-end - midware - backend fluidly. It is often a preferred option for start-ups as fewer language specialisations are required in the dev team.

* The advantages of MEAN/ MERN- (Mongo-Express-Angular (or React)-Node) stack with javascript read: [https://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs] The stack has a robust architecture for small apps, and comes inbuilt with Jestfor  unit testing, if you are using React. The article suggests using gulp for automated build tasks and brackets for full text coding. Server side componentization often done with Docker can be achieved with express.js or connect.js.


### How to guide to connect the front-end react app to the node-express environment


##### Challenge -18 Setting up the backend server with node and express

Change the folder structure once you need data in the back end.
 
Move all your files into 2 separate categories - FE (Front-end) and BE (Backend).

In the FE src folder - move all the components created and their folders
Reconfigure imports to all pages based on the new file/ folder structure run [yarn start] make sure the front end is still working as intended

Start on the backend - import express from npm and install/add it to the project
In the BE src folder - create an app.js file and set up express [https://expressjs.com/en/starter/hello-world.html] check that the port is listening [node src/backend/app.js ], refresh the browser and make sure that message is working in the FE port - this shows the runner has connected.


Env files no strings, no spaces, no brackets it is not a js file
Bring it in as a config file - not as a const

#### Challenge -19 reconfigure app files/ install node.js and express.js

Reconfigure project files with 2 source folders one for the frontend and one for the backend.
Install node and express in the project and check package-json to ensure they are added as dev-dependencies.

[yarn init] (intialise the project)
[yarn add node] (install node)
[yarn add express] (install express midware that runs data from server via axios to Postman/ Insomnia)

With node.js the import-export methods in react.js do not work as they work in different ways.

With node.js, a node module, the method used is ```require``` once a module is described in the require method, it is assign it to a variable. Once the module is "required", or loaded, we can use the ```module.exports``` method.

Replace the ```export default function getFilms() { return [{}]}``` method which is react.js syntax with the node.js syntax.

There several methods you can use to fetch data and the syntax is described well in this article -  Read [https://www.openmymind.net/2012/2/3/Node-Require-and-Exports/]

For this task, use the ```app.get('path', function(request, response) { return response.send() })``` method, the first arguement is the backend API url path you create. ```app``` refers to the express app that has been declared as a variable when you set up the backend server with express. The second argument is a call-back function that takes two arguements - request and response. The request is the information/data/ payload to the server. The call back function returns the ```response.send()``` method which returns the data/payload from the server back to the user.

Written in ES6 ```app.get('/films/data', (req, res) => res.send(films.filmsData));``` the ```app.get()``` method can be written in one line with an implicit return in the call back function.

You need to have the backend server running so run ```node src/backend/app.js``` and then check the path you have set up in the google chrome browser search bar  [3000/films/data] and the data should display on the screen.

You Tube tutorials to review at this stage:
* Short tutorial (Traversy Media - for beginners 24-minutes on YouTube)
* Long tutorial Mosh [https://www.youtube.com/watch?v=TlB_eWDSMt4]

#### Challenge -20 Add nodemon

Install nodemon [yarn add nodemon] to hot-load backend 
In package-json change the script files and direct backend script to the file path you have created in node.js

```
"start-frontend": "react-scripts start",
		"start-backend": "file-path",
```
In the case of my app this is

```
"start-frontend": "react-scripts start",
		"start-backend": "nodemon src/back-end/app.js",

```

#### Challenge -21 Create a client-side and server-side port in your local environment

Install run-all as a dev dependency [yarn add run-all]
This will allow you to run the ports for the frontend and backend servers in parallel, 
Read the documentation on ```npm -p``` and ```npm -s``` [https://www.npmjs.com/package/npm-run-all]
This highlights the difference between running the ports in sequence vs. in parallel.

Check the update on package-json - rename the scripts to start-frontend and start-backend so that you have 2 separate commands to run when you run the run-all command in your terminal

In app.js change the port for the backend to ```const port = 3001;```

Go to your terminal and check that this works   [yarn run-all -p start-frontend start-backend]  check your two 2 servers 3000 and 3001 to ensure they are running at the same time.

#### Challenge -22 Link the client-side react app and server-side express app

Create a proxy connection and ensure you have added it to your package-json (under the scripts section - it is not part of dev dependencies or scripts) like so:-

```	},
	"proxy": "http://localhost:3001",
	"eslintConfig": {
		"extends": "react-app"
	},
```

Read the documentation on how to create a proxy Creating a proxy[https://create-react-app.dev/docs/proxying-api-requests-in-development]

Restart the servers - make sure that your data is flowing on port 3001 (as in task 19) and the front end is rendering in port 3000

Now you can use the API methods in the CRUD lifecycle to use data you have shifted to the node environment using express as a runner. In the front end, you can now use the to fetch fetch method in your ```componentDidMount``` method in the react app to fetch data from the backend and replace the function in the react lifecycle method like so:-

Comment this out

```componentDidMount() {
		let filmId = this.props.match.params.filmId;
		let film = getFilms().find((film) => film.id === filmId);
		this.setState({ film });
	}
```

Write this function and see if it works in the console

```componentDidMount() {
		fetch(./api/films-data)
	  .then (res => res.json())
    .then (films => this.setState({filmsData}, => (console.log("Film data successfully transfered from BE to FE"), filmsData)));

	}
```

Using the fetch API now get your data from the node environment you have created to store your data [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]

A handy YouTube Video that explains the fetch method[https://www.youtube.com/watch?v=v0t42xBIYIs] and the connectivity between the frontend react app and the backend node & express

Now check your render method to see if it needs to be adjusted...this is the next challenge

#### Challenge -23 re-deploy to Heroku

Once you can see the component rendering in the way it is you can remove the commented out code and link the back-end data and the front-end rendering of the data.

Since there are several components this is the time that the app will break as the data is no longer linking from the front end files but need to be fetched and rendered from the backend node environment.

#### Challenge -24 add the images dynamically 
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals]

#### Challenge -25 add loading image 

## Appendicies 

#### Appendix-1 Some common CLI commands in yarn vs. npm

[yarn add] [npm install] - (installs the package required on a project)
[npm uninstall i](uninstall if the package not installed correctly)
[yarn global add] [npm install global] (installs the package required on your OS)
[yarn add node] -(installs node which it runs off)
[yarn] [npm] start - (starts dev server)
[yarn] [npm] run build - (builds static files for deployment [heroku] or other deployment packages)
[yarn] [npm] test - (starts test runner)
[yarn]/[npm] run eject - (IMPORTANT NO ROLL BACK -- removes the app and copies build dependencies, config files and scripts into the app directory)
[npm update] - (updates packages)
[npm outdated] (checks for outdated packages)
[yarn run start backend]/ [yarn start:server]/ [npm run start backend]

#### Appendix -2: How to set up a project with npm or yarn

Instead of npx create reactapp [appname], the way to set up a project is to build it with the components you want from the package - my GA notes when we created our project apps

- Yarn commands to set up server

[yarn init] (intialise the project)
[yarn add node] (install node)
[yarn add express] (install express midware that runs data from server via axios to Postman/ Insomnia)
[yarn add request-promise] [yarn add request] (sets up back end API to get methods of request-promise for async non-blocking threads to work)
[yarn add axios] (installs axios runner from backend with JSON files to Insomnia or Postman Axios therefore you need body-parser)
[yarn add body-Parser] (allows you to visualize data (json body) in insomnia or postman rather than the server  
[Yarn add dotenv] (installs authentication tokens files)


1.	[npm init] [yarn init] (this initializes npm – the password and other prompts are invisible, you need to hit return till you get OK on all compilers).  
2.	[npm i web-pack webpack-cli webpack-dev-server html-webpack-plugin –D] (installs webpack) [yarn add]
3.	[npm i babel-loader style-loader css-loader sass-loader –D] (installs babel, css and sass pre-compilers or loaders)
4.	[npm i @babel/core @babel/preset-env –D] (installs the babel & env files - babel transpiles jsx into es6)
5.	[touch .babelrc] (creates a babel file in project)
6.	[npm i node-sass –D] (installs sass) 
7.	[mkdir src] (makes directory called source)
8.	[touch src/index.html] [touch src/app.js] [touch src/style.scss] (makes files for html, css and vanilla js) 
9.	[touch webpack.config.js] (in the main file not in the src file)
10.	[npm i jquery –S] (installs j-query)
11.	[npm run serve] (this is the listener)
12.	[npm i react react-dom –S] (intalls react and react-dom)
13. [npm i axios –S] installs axios
14.	[npm i mapbox-gl –S] (installs mapbox)
15. [npm i react-router-dom –S] (installs the router component of react)
16. [npm i axios react-router-dom bulma -S ] (installs axios, react router and bulma)
17. [npm i dotenv-webpack –D] (installs the env files and webpack)
18. [touch .env] (creates an env. file in project)
19. [yarn add nodemon] [npm install nodemon] (installs nodemon to project)

- CLI documentation

[npm] CLI documentation link [https://docs.npmjs.com/cli-documentation/cli] 
[yarn] CLI documentation [https://yarnpkg.com/lang/en/docs/cli/]


#### Appendix -3: - my notes on CRUD

CREATE ONE NEW - POST -201 
createRoute is the function (Create) GET
Status is 201
Export the route 
Catch the error
In the config create the router set up
Then go to Insomnia (or your base url path)
Do a post request
Create the new animal object
Send
Booleans and numbers do not need inverted commas and boolean is lowercase
Create is a get request and a post

SHOW ONE - WITH ID - GET REQUEST - 200
showRoute() is the function
Show - get request and a post (Request and Show)
Status is 200 (ok)
Get the id
.findById(req.params.id) you do not the the exact id because you have already clocked them in other pathways
You need base_url/api/animals/5c87a2839f9ea114c58d524c
For all the id requests in router
router.route('/animals/:id')
  .get(animals.show)


EDIT AND UPDATE   - PUT 202
Find by Id and update one
In Insomnia - create object and only update key:value required to update


FIND  AND DELETE   - DELETE 204
Find by Id and delete one
Blow up one (by Id) Blow up all (Delete)
In Insomnia - remove all info and send


Promises take 2 arguments ```return new Promise (resolve, reject)``` followed by```.then()``` blocks