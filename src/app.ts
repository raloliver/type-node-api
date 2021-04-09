import express, {Application} from 'express';

const PORT = 3000;

class App {
  public app: Application;

  constructor(appConfig: {port: number; middlewares: any; controllers: any}) {
    this.app = express();
    this.setMiddlewares(appConfig.middlewares);
    this.setControllers(appConfig.controllers);
  }

  public listen() {
    this.app.listen(PORT, () => console.log('Its running...'));
  }

  private setMiddlewares(middlewares: {
    forEach: (mid: (middlewares: any) => void) => void;
  }) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private setControllers(controllers: {
    forEach: (control: (controllers: any) => void) => void;
  }) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}

export default App;
