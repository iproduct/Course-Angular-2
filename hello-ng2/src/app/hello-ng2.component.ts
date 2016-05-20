import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  moduleId: module.id,
  selector: 'hello-ng2-app',
  // template: `
  //   <div class="container">
  //   <h1>Hello from Ng 2 again!</h1>
  //   <heroes></heroes>
  //   </div>
  // `,
  templateUrl: 'hello-ng2.component.html',
  styleUrls: ['hello-ng2.component.css'],
  directives: [HeroesComponent] 
})
export class HelloNg2AppComponent {
  title = 'Ng 2 Heroes';
}
