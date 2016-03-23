import { Component, provide }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
                           from 'angular2/router';
import { HeroHttpService }     from './hero-http.service';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {routerConfig} from './router-config';
import {LoggerService} from './logger.service';
import {HTTP_PROVIDERS}    from 'angular2/http';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS,
        provide(HeroService, { useClass: HeroHttpService }), LoggerService]
})
@RouteConfig(routerConfig)
export class AppComponent {
    title = 'Tour of Heroes';
}