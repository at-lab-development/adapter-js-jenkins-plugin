const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const autorization = require('./auth.json');
const baseURL = 'https://jira-api.epam.com/jira/';

const issue = 'YOUR_JIRA_ISSUE';

const formData = new FormData();
formData.append('file', fs.createReadStream('./reports/cucumber_report.html'));

axios({
        method: 'POST',
        url: `${baseURL}rest/api/2/issue/${issue}/attachments`,
        auth: {
            username: autorization.login,
            password: autorization.password
        },
        headers:{
            'Content-Type':`multipart/form-data; boundary=${formData._boundary}`,
            'X-Atlassian-Token':'no-check'
        },
        data: formData,
        responseType: 'json'
    }).then(function (response) {
        console.log(response.status);
    })
    .catch(function (error) {
        console.log('ERROR:', error.response.status);
    });