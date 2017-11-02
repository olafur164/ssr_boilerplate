# React Server side rendering boilerplate

## Quick Start

### Clone this repo

`git clone https://github.com/olafur164/ssr_boilerplate.git`

### Install Dependencies
`yarn install`
### Personalize config.json

In the root directory, you'll find config.sample.json

rename it to config.json and fill the constants matching your criteria

Here are the constants it contains:
```js
{
  "expressPort": "4000",
  "fbAppId": "ENTER_YOUR_FB_APP_ID",
  "author": "ENTER_YOUR_NAME_OR_SHIT",
  "domain": "http://localhost:4000",
  "mongoUriDev": "mongodb://localhost:27017/pumba",
  "mongoUriProduction": "ENTER_YOUR_PRODUCTION_MONGO_URI_FROM_MLAB_OR_ELSEWHERE"
}
```

### Build and Run The Application

#### Development

##### Webpack

To build and watch the client side JavaScript bundles with Webpack 2, run:

`yarn watch`

##### Express Server

To start the server, open a separate tab or terminal window and run:

`yarn server`