/// <reference path="../../../../typings/browser.d.ts" />

import {Poll} from './poll';

export abstract class PollsService {
    abstract getPolls(): Promise<Poll[]>;
    abstract getPoll(id: number): Promise<Poll>;
    abstract addPoll(poll: Poll): Promise<Poll>;
    abstract editPoll(poll: Poll): Promise<void>;
    abstract deletePoll(id: number): Promise<Poll>;
}