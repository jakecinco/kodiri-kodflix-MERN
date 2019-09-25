# Kodiri-Kodflix-MERN
This is part -2 of the challenge where the front-end remains untouched and data is moved to the back-end.

## Learning Objectives
Setting up and running a back-end data-base removing data from the browser and front-end files to the back-end. Understanding the difference between each of the back-end moving parts - Node, Express and MongoDB.

#### What is the back-end?

Front-end refers to the user-interface and user-experience of an application on a client-device - phone, tablet, computer screen, wrist watch...

Back-end refers to the data, logic that the user does not see and that is on a physical or cloud-based server, in databases and other remote (as in non-client-side devices) devices.

Separation of concerns - light data that runs no risks of security breaches can be stored on the browser-side - cookies/ authentication codes, etc. 

When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the back-end.

For the back-end to connect to the front-end application programming interfaces (API) are needed.

####  What is a REST/ REST-ful API?

API's run HTTP (hyper-text-transfer-protocol) requests from back-end databases that are written in a plurality of languages that may not be text-based. As rendering on the front end is on HTML (hyper-text-markup-language) data from the back-end needs to be converted into text and then rendered on the page.

API's call the data from the database, posts this data on the web-page, updates the data that it receives from the front-end, sends it back to the back-end and saves it or if it is not needed the data is deleted. This cycle of calling, posting, updating and deleting data is also called the CRUD cycle - Create, Read, Update, Delete. 

The methods are GET, PUT, POST, UPDATE, DELETE

The process of converting the data in javascript from a back-end database in a language that is not javascript is done through JSON - javascript object notation.

####  What is JSON?

JSON is a lightweight transpiling of data into text so that HTTP calls can be made, parsed (interpreted) by browsers and sent back to databases in this lightweight text-based format to be reconverted back into the format that the database requires.

Methods with JSON therfore are JSON.parse/ JSON.stringify amongst others.

Today, this work is undertaken by transpilers such as webpack, babel and node/yarn package managers.

#### What is node.js?

Node is not a language it is a JavaScript-based environment created by Ryan Dahl in 2009. Dahl took the code on the browser (Chrome's V8 engine) and repackaged it to make it work server-side.

While node it is based on JavaScript, it runs different API’s for http requests, file systems, streams, child-processes that browsers’ javascript engines (parsers) do not due to security concerns.

This free exchange of data front-end to back-end may result in some security concerns but node.js (and node package manager libraries) are also good for excellent ui-ux interface and the fluid data-flow. 

The fluid data flow is due to the non-blocking nature of javascript that makes code parsing asynchronous - this is via call-back functions or the event flow MDN documentation on the event flow[https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop]

It is therefore good for apps with a high volume of short messages in real-time operations (chat-bots, facial recognition, conferencing, gaming, e-commerce) that need real-time runners between the front end javascript code and the back-end database. (Trello, googledocs, DropBox use node.js).

It is more scalable than Rails (Ruby) which can not shuffle around data quickly due to the “thick” application layer - ruby to ruby-on-rails.

Node is largely used to limit the languages that a team uses to JavaScript, hence making teams cross-functional - this is not possible if the back-end is run on php, Scala, java and other non-js languages.

The advantages of MEAN/ MERN- (Mongo-Express-Angular (or React)-Node) stack with javascript  useful read for architecture of a small app- [https://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs] for the architecture, unit testing if you are using React, it comes inbuilt with jest/  grunt.js can be used automated build tasks and brackets for full text coding. Server side componentization often done with Docker can be achieved with express.js or connect.js midway

Not good for:
CPU heavy applications 

Documentation [https://nodejs.org/en/docs/guides/getting-started-guide/]

Good articles to read to understand how and why you would use Node.js as the backend server
* Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
* Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]

####  What is Express?

Express.js forms part of the middle-ware between the back-end server and the front-end ui-ux. 

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

This back-end routing of the data happens through API calls and routing of URLs that are not visible to the end-user.


Documentation [https://expressjs.com/en/4x/api.html#app]

Reading-list:

[https://jilles.me/getting-the-express-app-js/]
[https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4]
[https://jilles.me/express-routing-the-beginners-guide/]
[https://expressjs.com/en/guide/routing.html]

#### Back-end package managers - Node vs. Yarn

Both are open source registries for software libraries for node.js, yarn is owned by Facebook, npm by npm Inc.

- What do package managers do? They automate the process of installing, updating, configuring, and removing pieces of software packages retrieved from a global registry.

They are different from operating sysem package managers, such as Brew. Brew also installs, updates, configures and removes software but in a local environment (OS).

- Which one?
Yarn takes up a lot of disk space, but is faster, manages licences better however, the disc usage space vs efficiency [npm] considered the better option
[npm] is a better package to manage dependencies as [yarn] sends usage details back to Facebook
[npm] is written all in lower case node package manager installation is sequentially
[yarn] uses all of the npm packages it is only a different installation process - using cloudflare, multiple installations happen at the same time,

- Conflicts
If npm-run-all does give you trouble, which it shouldn't, you could consider installing yarn-run-all

Using both at the same time creates conflicts so use one or the other in the CLI for your project 

- Good articles to read to compare the two package managers:- 

* Installation and use [https://www.positronx.io/yarn-vs-npm-best-package-manager/]
* Which is better - op-ed[https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/]
* Scotch[https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm]
* Keycdn (almost the same as scotch.io) [https://www.keycdn.com/blog/npm-vs-yarn]

- CLI’s

[npm] CLI documentation link [https://docs.npmjs.com/cli-documentation/cli] 
[yarn] CLI documentation [https://yarnpkg.com/lang/en/docs/cli/]

- Some common CLI commands 

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

#### Setting node/ npm  packages/files & projects from scratch 

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
12.	[npm i react react-dom –S] (intalls react)
13. [npm i axios –S] installs axios
14.	[npm i mapbox-gl –S] (installs mapbox)
15. [npm i react-router-dom –S] (installs the router component of react)
16. [npm i axios react-router-dom bulma -S ] (installs axios, react router and bulma)
17. [npm i dotenv-webpack –D] (installs the env files and webpack)
18. [touch .env] (creates an env. file in project)
19. [yarn add nodemon] [npm install nodemon] (installs nodemon to project)

#### What is nodemon?

Nodemon hot loads the back end server so you do not need to run ```node src/back-end/app.js```

Check in your package-JSON for the install and read documentation [https://github.com/remy/nodemon] which helps bug fixing if you encounter challenges hot-loading.

##### Challenge -18 Setting up the back-end server with node and express

Change the folder structure once you need data in the back end.
 
Move all your files into 2 separate categories - FE (Front-end) and BE (Back-end).

In the FE src folder - move all the components created and their folders
Reconfigure imports to all pages based on the new file/ folder structure run [yarn start] make sure the front end is still working as intended

Start on the backend - import express from npm and install/add it to the project
In the BE src folder - create an app.js file and set up express [https://expressjs.com/en/starter/hello-world.html] check that the port is listening [node src/back-end/app.js ], refresh the browser and make sure that message is working in the FE port - this shows the runner has connected.

- Yarn commands to set up server

[yarn init] (intialise the project)
[yarn add node] (install node)
[yarn add express] (install express midware that runs data from server via axios to Postman/ Insomnia)
[yarn add request-promise] [yarn add request] (sets up back end API to get methods of request-promise for async non-blocking threads to work)
[yarn add axios] (installs axios runner from backend with JSON files to Insomnia or Postman Axios therefore you need body-parser)
[yarn add body-Parser] (allows you to visualize data (json body) in insomnia or postman rather than the server  
[Yarn add dotenv] (installs authentication tokens files)

Env files no strings, no spaces, no brackets it is not a js file
Bring it in as a config file - not as a const

#### Challenge -19 Moving data to node/express server environment

Create a new folder for the back-end data. Remove the imports and remove the images
The React import-export model will not work as Node modules map data directly into a file. Therefore the require method is used to load a module and assign it to a variable. Once the module is "required", or loaded, we can use the ```module.exports``` method.

Replace the ```export default function getFilms() { return [{}]}``` method which is React.js syntax with the node.js syntax - to distinguish the two data-sets.

There several methods you can use to fetch data and the syntax is described well in this article -  Read [https://www.openmymind.net/2012/2/3/Node-Require-and-Exports/]

For this task, use the ```app.get('path', function(request, response) { return response.send() })``` method, the first arguement is the back-end API url path you create. ```app``` refers to the express app that has been declared as a variable when you set up the back-end server with express. The second argument is a call-back function that takes two arguements - request and response. The request is the information/data/ payload to the server. The call back function returns the ```response.send()``` method which returns the data/payload from the server back to the user.

Written in ES6 ```app.get('/films/data', (req, res) => res.send(films.filmsData));``` the ```app.get()``` method can be written in one line with an implicit return in the call back function.

You need to have the back-end server running so run ```node src/back-end/app.js``` and then check the path you have set up ```3000/films/data``` and the data should display on the screen

You Tube tutorials to review at this stage:
* Short tutorial (Traversy Media - for beginners 24-minutes on YouTube)
* Long tutorial Mosh [https://www.youtube.com/watch?v=TlB_eWDSMt4]

#### Challenge -20 Add nodemon

Install nodemon to hot-load back-end - change scripts files and run command to start backend server in terminal

#### Challenge -21 Create a client-side and server-side port
#### Challenge -22 Link the 2 servers
#### Challenge -23 Deploy to Heroku
#### Challenge -23 Add a loading button



