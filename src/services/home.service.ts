import {Request, Response} from 'express';

export default class HomeService {
  public helloWord(req: Request, res: Response) {
    return res.json({msg: 'Hello Node + Type'});
  }
}
