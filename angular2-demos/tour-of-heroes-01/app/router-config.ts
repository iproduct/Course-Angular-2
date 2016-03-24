import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {ClickMeComponent} from './click-me.component';

export var routerConfig =
[
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
//    useAsDefault: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,

  },
  {
    path:
    '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }, 
  {
      path: '/clickme',
      name: 'ClickMe',
      component: ClickMeComponent,
      useAsDefault: true
  }

];
