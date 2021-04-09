import express, {Request, Response} from 'express';
import HomeService from '../services/home.service';

export default class HomeController {
  public path = '/';
  public router = express.Router();
  private homeService: HomeService;
  constructor() {
    this.homeService = new HomeService();
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get(`${this.path}`, this.homeService.helloWord);
  }

  helloWord = (req: Request, res: Response) => {
    return res.json({msg: 'Hello Node + Type'});
  };
}
