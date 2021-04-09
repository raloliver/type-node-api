import {Request, Response} from 'express';
import IssueModel, {IIssue} from '../models/issue.model';

export default class IssueService {
  public findAll(req: Request, res: Response) {
    return res.json({msg: 'Hello Node + Type'});
  }

  public async create(req: Request, res: Response) {
    // Aqui referênciamos a interface como padrão de entrada dos dados
    const iIssue = req.body as IIssue;
    const issue = await IssueModel.create(iIssue);
    return res.json({issue});
  }
}
