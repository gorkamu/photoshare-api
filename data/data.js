'use strict'

module.exports = {
    'users': [
        { 
            "githubLogin": "mHattrup", 
            "name": "Mike Hattrup",
            "avatar": "uno"
        },
        { 
            "githubLogin": "gPlake", 
            "name": "Glen Plake" ,
            "avatar": "dos"
        },
        { 
            "githubLogin": "sSchmidt", 
            "name": "Scot Schmidt" ,
            "avatar": "tres"
        }
    ],
    'photos': [
        {
            "id": "1",
            "name": "Dropping the Heart Chute",
            "description": "The heart chute is one of my favorite chutes",
            "category": "ACTION",
            "githubName": "gPlake"
        },
        {
            "id": "2",
            "name": "Enjoying the sunshine",
            "category": "SELFIE",
            "githubName": "sSchmidt"
        },
        {
            "id": "3",
            "name": "Gunbarrel 25",
            "description": "25 laps on gunbarrel today",
            "category": "LANDSCAPE",
            "githubName": "mHattrup"
        }
    ],
    'tags': [
        { "photoID": "1", "userID": "gPlake" },
        { "photoID": "2", "userID": "sSchmidt" },
        { "photoID": "2", "userID": "mHattrup" },
        { "photoID": "2", "userID": "gPlake" }
    ]
}