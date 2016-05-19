import {Poll, Status} from './poll';
export class PollsMockupData {
    createDb() {
        let polls: Array<Poll> = JSON.parse(`[
            {
                "id": 1,
                "status": "CREATED",
                "title": "JS Libraries",
                "question": "Which is your favorite?",
                "start": "2016-05-18T00:00:00+02:00",
                "end": "2016-05-18T00:00:00+02:00",
                "alternatives": [
                {
                    "id": 1,
                    "text": "React",
                    "position": 1,
                    "votes": [
                    {
                        "id": 1,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:49.995+02:00"
                    },
                    {
                        "id": 7,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:56.31+02:00"
                    }
                    ]
                },
                {
                    "id": 2,
                    "text": "AngularJS",
                    "position": 2,
                    "votes": [
                    {
                        "id": 2,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:50.643+02:00"
                    },
                    {
                        "id": 6,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:55.475+02:00"
                    }
                    ]
                },
                {
                    "id": 3,
                    "text": "Angular 2",
                    "position": 3,
                    "votes": [
                    {
                        "id": 3,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:51.141+02:00"
                    },
                    {
                        "id": 8,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:57.223+02:00"
                    },
                    {
                        "id": 9,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:58.581+02:00"
                    }
                    ]
                },
                {
                    "id": 4,
                    "text": "Polymer",
                    "position": 4,
                    "votes": [
                    {
                        "id": 4,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:51.98+02:00"
                    }
                    ]
                },
                {
                    "id": 5,
                    "text": "jQuery",
                    "position": 5,
                    "votes": [
                    {
                        "id": 5,
                        "email": "anonimous@anonimous.com",
                        "voteTime": "2016-05-18T20:48:53.009+02:00"
                    }
                    ]
                }
                ]
            }
        ]`);
        return { polls };
    }
}


// ,
            // {
            //     "id": 2,
            //     "status": "CREATED",
            //     "title": "JS Libraries 2",
            //     "question": "Which is your favorite?",
            //     "start": "2016-05-18T00:00:00+02:00",
            //     "end": "2016-05-18T00:00:00+02:00",
            //     "alternatives": ["React", "AngularJS", "Angular 2", "Polymer", "jQuery"] 
            // }, 
            // {
            //     "id": 3,
            //     "status": "CREATED",
            //     "title": "JS Libraries 3",
            //     "question": "Which is your favorite?",
            //     "start": "2016-05-18T00:00:00+02:00",
            //     "end": "2016-05-18T00:00:00+02:00",
            //     "alternatives": ["React", "AngularJS", "Angular 2", "Polymer", "jQuery"] 
            // }, 
            // {
            //     "id": 4,
            //     "status": "CREATED",
            //     "title": "JS Libraries 4",
            //     "question": "Which is your favorite?",
            //     "start": "2016-05-18T00:00:00+02:00",
            //     "end": "2016-05-18T00:00:00+02:00",
            //     "alternatives": ["React", "AngularJS", "Angular 2", "Polymer", "jQuery"] 
            // }, 
            // {
            //     "id": 5,
            //     "status": "CREATED",
            //     "title": "JS Libraries 5",
            //     "question": "Which is your favorite?",
            //     "start": "2016-05-18T00:00:00+02:00",
            //     "end": "2016-05-18T00:00:00+02:00",
            //     "alternatives": ["React", "AngularJS", "Angular 2", "Polymer", "jQuery"] 
            // }, 
            // {
            //     "id": 6,
            //     "status": "CREATED",
            //     "title": "JS Libraries 6",
            //     "question": "Which is your favorite?",
            //     "start": "2016-05-18T00:00:00+02:00",
            //     "end": "2016-05-18T00:00:00+02:00",
            //     "alternatives": ["React", "AngularJS", "Angular 2", "Polymer", "jQuery"] 
            // }