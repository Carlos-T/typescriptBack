import {Router, Request, Response, NextFunction} from 'express';
import HeroService from '../services/HeroService';

export class HeroRouter {
  service: HeroService
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.service = new HeroService();
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll = (req: Request, res: Response, next: NextFunction) => {
    res.send(this.service.getAll());
  }

  /**
   * GET one hero by id
   */
  public getOne = (req: Request, res: Response, next: NextFunction) => {
    let query = parseInt(req.params.id);
    let hero = this.service.getOne(query);
    if (hero) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          hero
        });
    }
    else {
      res.status(404)
        .send({
          message: 'No hero found with the given id.',
          status: res.status
        });
    }
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const gameRoutes = new HeroRouter();
gameRoutes.init();
var router = gameRoutes.router;
export default router;
