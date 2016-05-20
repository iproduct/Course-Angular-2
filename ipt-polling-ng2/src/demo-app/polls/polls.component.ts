import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {Poll, Alternative, Vote, PollsService} from './shared/index';
import {MdButton} from '../../components/button/button';
import {MD_CARD_DIRECTIVES} from '../../components/card/card';
import {ChartComponent} from '../chart';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
// import {HeroDetailComponent} from './hero-detail.component';
// import {HeroService} from './hero.service';
// import {HeroHttpService} from './hero-http.service';

@Component({
  moduleId: module.id,
  selector: 'polls',
  templateUrl: 'polls.component.html',
  styleUrls: ['polls.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, ChartComponent, CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PollsComponent implements OnInit {

  constructor(private router: Router, private pollsService: PollsService) { }

  ngOnInit() {
    this.getPolls();
  }
  public selectedPoll: Poll;
  public polls: Poll[];
  public labels: string[];
  errorMessage: string;
  
  // Pie
  pieChartLabels: Array<string>;
  pieChartData = [300, 500, 100, 300, 500];
  pieChartType = 'pie';
  pieChartOptions = {responsive: false};

  onSelect(poll: Poll) { this.selectedPoll = poll; }
  getPolls() {
    this.pollsService.getPolls().then(
      polls => {
        this.polls = polls;
        polls.forEach(poll => {
          poll.labels = poll.alternatives.map(alt => alt.text);
          poll.alternativeVotes = poll.alternatives.map(alt => alt.votes.length);
        });
      },
      error => this.errorMessage = <any>error
    );
  }
  // addPoll(name: string) {
  //   if (!name) { return; }
  //   this._heroService.addHero(name).then(
  //     hero => this.heroes.push(hero),
  //     error => this.errorMessage = <any>error
  //   );
  // }
  gotoDetail() {
    let link = ['PollDetail', { id: this.selectedPoll.id }];
    this.router.navigate(link);
  }
  
  // pie chart events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }

}


