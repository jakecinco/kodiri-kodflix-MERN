# Kodiri-Kodflix-MERN

## Learning Objectives

Setting up and running a back-end data-base removing data from the browser and front-end files to the back-end.

#### An introduction to node.js

Node is not a language it is a JavaScript-based environment.

Node runs back-end servers, while it is based on JavaScript, it runs different API’s  for http requests, file systems, streams, child-processes that browsers’ javascript engines (parsers) do not due to security concerns.

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
* When, How And Why Use Node.js as Your Backend
* Why the Hell Would You Use Node.js
* Short tutorial (Traversy Media - for beginners 24-minutes on YouTube)
* Long tutorial Mosh [https://www.youtube.com/watch?v=TlB_eWDSMt4]

## Back-end package managers - Node vs. Yarn

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
[yarn] [npm] start - (starts dev server)
[yarn] [npm] run build - (builds static files for deployment [heroku] or other deployment packages)
[yarn] [npm] test - (starts test runner)
[yarn]/[npm] run eject - (IMPORTANT NO ROLL BACK -- removes the app and copies build dependencies, config files and scripts into the app directory)
[npm update] - (updates packages)
[npm outdated] (checks for outdated packages)
[yarn add] [npm install] - (installs the package required on a project)
[yarn global add] [npm install global] (installs the package required on your OS)
[yarn run start backend] [npm run start backend]

## Challenge -18 Folder Structure

Change the folder structure once you need data in the back end.
 
Move all your files into 2 separate categories - FE (Front-end) and BE (Back-end).

In the FE src folder - move all the components created and their folders
Reconfigure imports to all pages based on the new file/ folder structure run [yarn start] make sure the front end is still working as intended

Start on the backend - import express from npm and install/add it to the project
In the BE src folder - create an app.js file and set up express [https://expressjs.com/en/starter/hello-world.html] check that the port is listening [node src/back-end/app.js ], refresh the browser and make sure that message is working in the FE port - this shows the runner has connected.