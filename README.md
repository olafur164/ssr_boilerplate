# React Server side rendering boilerplate

## Quick Start

### Clone this repo

`git clone https://github.com/olafur164/ssr_boilerplate.git`

### Install Dependencies

### Personalize config.json

In the root directory, you'll find config.json

Here are the constants it contains:

`{
  "expressPort": "4000",
  "fbAppId": "",
  "author": "Ólafur Hólm Eyþórsson",
  "domain": "http://localhost:4000",
  "mongoUriDev": "mongodb://localhost:27017/react-ssr-boiler",
  "mongoUriProduction": "ENTER_YOUR_PRODUCTION_MONGO_URI_FROM_MLAB_OR_ELSEWHERE",
  "jwtSecret": "PickAComplexString1337",
  "GITHUB_CLIENT_ID": "ENTER_YOUR_APP'S_CLIENT_ID",
  "GITHUB_CLIENT_SECRET": "ENTER_YOUR_APP'S_CLIENT_SECRET"
}`

### Build and Run The Application

#### Development

##### Webpack

To build and watch the client side JavaScript bundles with Webpack 2, run:

`yarn watch`

##### Express Server

To start the server, open a separate tab or terminal window and run:

`yarn run server`