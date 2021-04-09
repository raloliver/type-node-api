import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import App from './app.config';
import HomeController from './controllers/home.controller';
import logMiddleware from './middlewares/log.middleware';

const PORT = 3000;

const app = new App({
  port: PORT,
  middlewares: [
    morgan('development'),
    express.urlencoded({extended: false}),
    express.json(),
    logMiddleware,
  ],
  controllers: [new HomeController()],
});

app.listen();
