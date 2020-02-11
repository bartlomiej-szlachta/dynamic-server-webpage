# dynamic-server-webpage

A server application providing different webpagelayout depending on the client device type. The available options are:
- desktop site
- tablet site
- mobile site

The server (developed in [node.js](https://nodejs.org/en/) and [express.js](https://expressjs.com/)) decides which webpage layout to send according to a HTTP header.

## Development environment preparation

The appliaction requires [node.js](https://nodejs.org/en/) to be installed on a computer. Before launch, library files need to be installed by executing the following command at the project root:
```
npm i
```
The files are stored in the `node_modules` directory (the directory is ignored by GIT).

## Launch

The server can be launched by executing the following command in the `src` directory:
```
node app.js
```
The command launches a local development api-server at `http://localhost:8000`. The site can be opened:
- on the computer the server is running on by typing `http://localhost:8000/index.html` in the url-bar in a browser
- on the other device by typing `http://{IP_ADDRESS}:8000/index.html` in the url-bar in a browser, where `{IP_ADDRESS}` is the IP address of the computer the server is running on.

## Anailable endpoints

- a request sent by `GET` method at the `/index.html` returns HTML file, different depending on the device
- a request sent by `GET` at the `/index.css` returns CSS file, different depending on the device
- a request sent by `GET` at the `/index.js` returns JS file, different depending on the device
