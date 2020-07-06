const axios = require('axios'),
    fs = require('fs'),
    path = require('path'),
    pathToAuth = path.join('./auth.json'),
    pathToCommands = path.join('./jiraCommandsAPI.json'),
    login = JSON.parse(fs.readFileSync(pathToAuth)).login,
    password = JSON.parse(fs.readFileSync(pathToAuth)).password,
    postComment = JSON.parse(fs.readFileSync(pathToCommands)).comment;
    postComment1567 = JSON.parse(fs.readFileSync(pathToCommands)).comment1567;
const token = Buffer.from(`${login}:${password}`, 'utf8').toString('base64');

// axios.defaults.baseURL = 'https://jira.epam.com';

// 1st version
axios({
        method: 'post',
        url: postComment,
        auth: {
            username: login,
            password: password
        },
        data: {
            "body": "1st version"
        },
        responseType: 'json'
    }).then(function (response) {
        console.log(response.status);
    })
    .catch(function (error) {
        console.log(error);
    });

// 2nd version
axios({
        headers: {
            'Authorization': `Basic ${token}`
        },
        method: 'post',
        url: postComment1567,
        data: {
            "body": "token version"
        },
        responseType: 'json',
    })
    .then(function (response) {
        console.log(response.status);
    })
    .catch(function (error) {
        console.log(error);
    });