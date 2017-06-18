const Heros = require('../data');

export default class HeroService {

  /**
   * Initialize the HeroService
   */
  constructor() {
  }

  /**
   * GET all Games.
   */
  public getAll() {
     return Heros;
  }

  /**
   * GET one hero by id
   */
  public getOne(id: Number) {
    let hero = Heros.find(hero => hero.id === id);
    return hero;
  }

}

// // Create the HeroService, and export its configured Express.Router
// const HeroService = new HeroService();

// export default HeroService;
