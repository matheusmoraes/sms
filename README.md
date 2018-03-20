# SMS Parser
Minimal [application](https://gsw-sms.herokuapp.com) to save messages. 


Stack:

* [Angular 1](https://angularjs.org/) (ES6)
* [Express 4](http://expressjs.com/) (ES6)
* [Heroku](https://www.heroku.com/)
* [Docker](https://www.docker.com/)
* [CircleCI](https://circleci.com/)

## Setup and install

To run this app, follow the instructions.

### Running locally
#### Running Inside Docker
##### Prerequisites
* Install [Docker](https://docs.docker.com/install/)


```
$ docker pull matheusmoraes/sms-gsw
$ docker run -p 3000:3000 -d matheusmoraes/sms-gsw
```

Visit http://localhost:3000

#### Running on host machine
```
$ git clone https://github.com/matheusmoraes/sms
$ cd sms

# Install dependencies
$ npm install

# Run client
$ npm start

# Run server (other terminal instance)
$ node server/bin/www
```

Client url: `http://localhost:8080`
API url: `http://localhost:3000`

Visit http://localhost:3000

### Using CI/CD pipeline
#### Prerequisites
* Fork this repo
* [Heroku](https://www.heroku.com/) free account
* [CircleCI](https://circleci.com/) free account

#### Setup Heroku

1. [Create a new app](https://dashboard.heroku.com/new-app)
2. Add `MONGO_URL` to *Config Variables* in your app settings

#### Setup Circle CI

1. Login with your Github account
2. Go to *Add Projects*
2. Select *sms* (this [forked] project) and *Set Up Project
3. Go to yout build settings of *sms* project. 
4. Add the following environment variables: `HEROKU_APP_NAME`, `HEROKU_API_KEY`, `HEROKU_LOGIN` and `MONGO_URL` with your credentials.
4. You are good to go!