const axios = require('axios');
const fs = require('fs');

// NOTE that Jenkins authorization works according to the follow template:
// user:password  which is encoded to Base64 format (like Basic bmltbWljdjpqZX*********==)

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/job/Artifact%20generator/2',
        headers: {
            Authorization: 'Basic YXJ0e************yNQ==',
            host: 'localhost:8080',
            'Content-Type': 'application/json',
        }
})

function getJiraData() {
    axiosInstance
        .get('/api/json?pretty=true')
      .then(res => res.data.artifacts[0].fileName)
      .then(resp => getArtifactContent(resp))
      .catch(err => console.error(err))
}

function getArtifactContent (fileName) {
    axiosInstance
        .get(`/artifact/${fileName}`)
      .then(res => res.data)
      .then(content => writeArtifactsInFile(content, fileName))
      .catch(err => console.error(err))
}

function writeArtifactsInFile(content, fileName) {
    if (fileName.substr(-4) === '.txt') {
    fs.writeFile(`artifact.txt`, content, function (err) {
        if (err) throw err;
      });
    } else {
    fs.writeFile(`artifact.jpg`, content, function (err) {
        if (err) throw err;
      }); 
    }
}

getJiraData();