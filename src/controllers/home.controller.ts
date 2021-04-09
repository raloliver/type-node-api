import express, {Request, Response} from 'express';

export default class HomeController {
  public path = '/';
  public router = express.Router();
  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get(`${this.path}`, this.helloWord);
  }

  helloWord = (req: Request, res: Response) => {
    return res.json({msg: 'Hello Node + Type'});
  };
}
