import { Component, OnInit } from '@angular/core';
import {Hero} from './shared/hero.model';

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: 'heroes.component.html',
  // template: `<p>Test</p>`,
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero = {id: 1, name: "Superman"}
  constructor() {} 

  ngOnInit() {
  }

}
