import { Injectable } from '@angular/core';
import {PollsService} from './polls.service';
import {Poll, Status} from './poll';
import {PollsMockupData} from './polls-mockup-data';
import {LoggerService} from '../../shared';

const POLLS = new PollsMockupData().createDb().polls;

@Injectable()
export class PollsMockupService implements PollsService {
  constructor(private logger: LoggerService) { }

  getPolls() {
    return Promise.resolve(POLLS)
      .then(polls => { this.logger.log(polls); return polls; })
      .catch(error => { this.logger.log(error); return error; });
  }

  getPoll(id: number) {
    return Promise.resolve(POLLS).then(
      polls => polls.filter(poll => poll.id === id)[0]
    );
  }

  addPoll(poll: Poll) {
    let nextPollId = POLLS.reduce((prevMaxId, next) =>
      next.id > prevMaxId ? next.id : prevMaxId, 0) + 1;
    poll.id = nextPollId;
    POLLS.push(poll);
    return Promise.resolve(poll);
  }

  editPoll(poll: Poll) {
    for (let i = 0; i < POLLS.length; i++) {
      if (POLLS[i].id === poll.id) {
        POLLS[i] = poll;
        return Promise.resolve();
      }
    }
    return Promise.reject('Error updating  poll '
      + poll.id + ":" + poll.title + ' - poll ID not found');
  }

  deletePoll(id: number): Promise<Poll> {
    return new Promise(function (resolve, reject) {
      for (let i = 0; i < POLLS.length; i++) {
        if (POLLS[i].id === id) {
          let removedPoll = POLLS[i];
          POLLS.splice(i, 1);
          resolve(removedPoll);
        }
      }
      reject('Error deleting poll - poll with ID:'
        + id + ' does not exist');
    });
  }

}
