import {Component} from '@angular/core';
import {MdButton} from '../../components/button/button';
import {MD_CARD_DIRECTIVES} from '../../components/card/card';

@Component({
    selector: 'card-demo',
    templateUrl: 'app/card/card-demo.html',
    styleUrls: ['app/card/card-demo.css'],
    directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class CardDemo {}
