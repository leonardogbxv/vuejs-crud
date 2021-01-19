# VUE.JS CRUD

CRUD of users using Vue.js on the front-end and Node.js with MongoDB on the back-end API.

*🌎 [English](README.md), [Português brasileiro](README.pt-br.md)*
<hr/>
<img src="./client/src/assets/homepage.png" />
<details>
  <summary>Modal <sub><sup>(click here)</sup></sub></summary>
<pre>
<img src="./client/src/assets/modal_cadastro.png" />
<img src="./client/src/assets/modal_editar.png" />
</pre>
</details>

## Installation

You must have installed [**MongoDB**](https://www.mongodb.com/try/download/community "**MongoDB**") and [**Node.js**](https://nodejs.org/en/download/ "**Node.js**") on your machine.

```bash
# Clone the repository
$ git clone https://github.com/leonardogbxv/vuejs-crud.git
# Go to project folder
$ cd vuejs-crud
# Install project dependecies
$ npm install
# Go to front-end folder
$ cd client
# Install front-end dependecies
$ npm install
# Run front-end
$ npm run serve
# Return to the project root
$ cd ..
# Run back-end api
$ npm run dev
```

Now we have the front-end running on port 3000 and the REST API on port 8080.

## Features

- Register new users with name, e-mail and password; **(CREATE)**
- List all users in a table on the home page: **(READ)**
  - Usuario ID (Unique ObjectID of user in the MongoDB);
  - Nome;
  - E-mail;
  - Senha;
- Edit information for an already registered user; **(UPDATE)**
- Remove a user from the application; **(DELETE)**

## How it works

In this project, the front-end and back-end were developed separately, thereby both of them will run on different ports.

### REST API

On the back-end we have our API and database, developed in Node.js and MongoDB, running on the port 3000. All the *GET*, *POST*, *PUT* and *DELETE* routes can be located in the routes directory -> `server>routes>api>users.js` they correspond to the application's http route `/api/users`. The database connection is created in the database folder -> `server>database>db.js` here we also have the CRUD functions which are exported to be used in the API routes.

> Postman was used to test HTTP Requests to the API. The collection with all requests made are located in the postman directory, inside the server folder: `>server>postman>vuejs-crud.postman_collection.json`.

### Front-end

On the front-end we have our "client", developed in Vue.js — JavaScript framework —, running on the port 8080. The project was built with the official Vue.js client, the Vue CLI, helping with configuration and generating of the Vue.js application; According to research, it's widely used in professional environments, therefore the vue cli approach was chosen to continue the development. However, the use of Vue.js with the direct inclusion of the `<script>` tag was also studied.

This Vue application consists of 4 components:

- `<Header />`: Header with the title and navigation panel of the application;
- `<UserRegisterForm />`: Modal with the form to register a new user;
- `<UserEditForm />`: Modal with the form to edit user data;
- `<UsersTable />`: Table with all the list of users registered in the system.

These components are all rendered in the `App.vue`, the application root. It defines the template of our page, adding the components in the `<template>` tag. The requests for the back-end API are all made using JavaScript's Fetch API, it handles the CRUD operations on the front-end. The *GET* and *DELETE* are performed in the `<UsersTable />` component , *POST* in the registration modal `<UserRegisterForm />` and the *PUT* request in the editing modal `<UserEditForm /> `.

Bootstrap framework was used to make the responsiveness and stylization of some elements of the application. Modals of register and editing were stylized with pure CSS.

## Dependencies

Project dependencies and for what they were used for.

- [**Vue.js:**](https://vuejs.org/ "**Vue.js:**") Progressive JavaScript framework for building dynamic user interfaces with HTML, CSS and JS;
- [**Bootstrap:**](https://getbootstrap.com/docs/4.5/getting-started/introduction/ "**Bootstrap:**") Front-end framework with a large collection of CSS codes, was used in the project to make stylization and responsiveness;
- [**Node.js:**](https://nodejs.org/en/docs/ "**Node.js:**") Server-side JavaScript environment, our back-end API was entirely developed on Node.js;
- [**Express:**](https://github.com/expressjs/express "**Express:**") Node.js framework which helps generating web applications with route configurations, middlewares and other functions;
- [**Cors:**](https://www.npmjs.com/package/cors "**Cors:**") Node.js package to enable CORS - "Cross-Origin Resource Sharing" - in the application. In our case, send requests for another domain - localhost: 3000 (API);
- [**MongoDB:**](https://docs.mongodb.com/ "**MongoDB:**") NoSQL database;
- [**Nodemon:**](https://github.com/remy/nodemon "**Nodemon:**") Helping in the development always refreshing the web page when file changes are made;

###### :D
