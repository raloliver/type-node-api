import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import App from './app.config';
import IssueController from './controllers/issue.controller';
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
  controllers: [new IssueController()],
});

app.listen();
