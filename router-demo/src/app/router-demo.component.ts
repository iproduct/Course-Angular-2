import { Component } from '@angular/core';
import { RouteConfig} from '@angular/router-deprecated';
import {OneComponent} from "./one/one.component";
import {TwoComponent} from "./two/two.component";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({ 
  moduleId: module.id,
  selector: 'router-demo-app',
  templateUrl: 'router-demo.component.html',
  styleUrls: ['router-demo.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
            { path: '/',
                component: OneComponent,
                as: 'One',
            },
            {
                aux: 'testAux1',
                component: OneComponent,
                name: 'TestAux1',
                path: '/aux1'
            },
            {
                aux: 'testAux2',
                component: TwoComponent,
                name: 'TestAux2',
                path: '/aux2'
            }
        ])
export class RouterDemoAppComponent {
  title = 'router-demo works!';
}
