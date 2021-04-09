import {Request, Response} from 'express';
import IssueModel, {IIssue} from '../models/issue.model';

export default class IssueService {
  public async findAll(req: Request, res: Response) {
    const issues: IIssue[] = await IssueModel.find({});
    return res.json({issues});
  }

  public async create(req: Request, res: Response) {
    // Aqui referênciamos a interface como padrão de entrada dos dados
    const iIssue = req.body as IIssue;
    const issue = await IssueModel.create(iIssue);
    return res.json({msg: `Issue ${issue?.title} criada com sucesso!`});
  }

  public async findOne(req: Request, res: Response) {
    const issue: IIssue | null = await IssueModel.findById(req.params.id);
    return res.json({issue});
  }

  public async removeOne(req: Request, res: Response) {
    const issue: IIssue | null = await IssueModel.findByIdAndDelete(
      req.params.id
    );
    return res.json({msg: `Issue ${issue?.title} removida com sucesso!`});
  }
}
