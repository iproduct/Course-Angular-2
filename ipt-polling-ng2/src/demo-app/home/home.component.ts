import { Component, OnInit } from '@angular/core';
import {MdButton} from '../../components/button/button';
import {MD_CARD_DIRECTIVES} from '../../components/card/card';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
