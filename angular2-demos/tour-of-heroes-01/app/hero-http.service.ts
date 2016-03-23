import {Injectable, Inject} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {LoggerService} from './logger.service';
import {HeroService} from './hero.service';


@Injectable()
export class HeroHttpService implements HeroService{
    constructor(private _logger: LoggerService) { }
    getHeroes() {
        return Promise.resolve(HEROES)
            .then(heroes => { this._logger.log(heroes); return heroes; })
            .catch(error => { this._logger.log(error); return error; });
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}