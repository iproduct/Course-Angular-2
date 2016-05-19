export enum Status {
    CREATED = 1,
    ACTIVE,
    COMPLETED
}

export class Poll {
    
    get labels(): string[]{
        return this.alternatives.map(alt => alt.text);
    }
    
    get alternativeVotes(): number[]{
        return this.alternatives.map(alt => alt.votes.length);
    }
    
    constructor(
        public id: number, 
        public status: Status = Status.CREATED,
        public title: string,
        public question: string,
        public start: Date,
        public end: Date,
        public alternatives: Array<Alternative>
    ) { }
    
    // getLabels(): string[] {
    //     console.log(Array.prototype.slice.apply(this.alternatives.map(alt => alt.text)));
    //     return Array.prototype.slice.apply(this.alternatives.map(alt => alt.text));       
    // }
}

export class Alternative {
    constructor(
        public id: number, 
        public text: string,
        public position: number,
        public votes: Array<Vote>
    ) { }
}

export class Vote {
    constructor(
        public id: number, 
        public email: string,
        public voteTime: Date
    ) { }
}