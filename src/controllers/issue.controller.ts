import express, {Request, Response} from 'express';
import IssueService from '../services/issue.service';

export default class IssueController {
  public router = express.Router();
  public path = '/';
  private issueService: IssueService;
  constructor() {
    this.issueService = new IssueService();
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get(`${this.path}`, this.issueService.findAll);
    this.router.post(`${this.path}`, this.issueService.create);
  }

  helloWord = (req: Request, res: Response) => {
    return res.json({msg: 'Hello Node + Type'});
  };
}
