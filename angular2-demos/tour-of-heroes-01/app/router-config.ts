import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
export var routerConfig =
[
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path:
    '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
];
