import {Component, Inject} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroHttpService} from './hero-http.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    styleUrls: ['app/heroes.component.css'],
    templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
    public selectedHero: Hero;
    public heroes: Hero[];
    constructor(private _router: Router, private _heroService: HeroService) { }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
    getHeroes() {
        this._heroService.getHeroes().then((heroes) => this.heroes = heroes);
    }
    gotoDetail() {
        let link = ['HeroDetail', { id: this.selectedHero.id }];
        this._router.navigate(link);
    }
}
