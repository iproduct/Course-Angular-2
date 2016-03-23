import {Hero} from './hero';


export class HeroService {
    getHeroes(): Promise<Hero[]> { return null;};
    getHero(id: number): Promise<Hero> { return null;};
}