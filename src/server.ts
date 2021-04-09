import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import App from './app';
import HomeController from './controllers/HomeController';

const PORT = 3000;

const app = new App({
  port: PORT,
  middlewares: [
    morgan('development'),
    express.urlencoded({extended: false}),
    express.json(),
  ],
  controllers: [new HomeController()],
});

app.listen();
