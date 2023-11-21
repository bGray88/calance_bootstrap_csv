const { generateOptions } = require('../utils/utils');
const axios = require('axios')
const { constants } = require('buffer');
const fileSystem = require('../bin/helpers/fileSystem')

// const { generateRepos } = require('../fixtures/fixtures') # For Testing

/*
                          =============CSV Format Example=============                          
  ------------------------------------------------------------------------------------------------------------------
  |          Created Date           | Tag Name |                 URL of distribution zip file                      |
  ------------------------------------------------------------------------------------------------------------------
  |  Thu, 14 Sep 2023 14:19:27 GMT  | "v1.0.0" | "https://api.github.com/repos/octocat/Hello-World/zipball/v1.0.0" |
  ------------------------------------------------------------------------------------------------------------------
*/

const displayForm = async (req, res) => {

  const data = {
    page: "input",
    title: "Github CSV Data",
    description: 'Please type a destination directory and click the process button to start.',
    disclaimer: '(Relative directory will be used if a full path is not given)'
  };
  res.status(200);
  res.render('basicFrame', data);
}

const processForm = async (req, res) => {
  folderPath = fileSystem.createFolder(req.query.destination);

  if (folderPath) {
    req.session.folderPath = folderPath
    res.redirect('/api/v1/githubInfo/processInfo');
  } else {
    res.redirect('/api/v1/githubInfo/displayForm');
  }
} 

const displayInfo = async (req, res) => {
  const data = {
    page: "table",
    title: "Github CSV Data",
    description: 'Your CSV has been saved to the desired location with the data listed below.',
    table: req.session.repos
  };
  req.session.repos = null;

  res.status(200);
  res.render('basicFrame', data);
}

const processInfo = async (req, res) => {
  
  const options = generateOptions(`/repos/twbs/bootstrap/releases`);
  let repos = []

  await axios.get(options.url, { headers: options.headers })
    .then((res) => {
      repos = res.data
  }).catch('error', (err) => {
      console.log(err);
      res.status(500).send({
        message: constants.errorMessage
      });
  })

  if (repos) {
    req.session.repos = repos.map((repo) => (
      {
        created_at: new Date(repo.created_at).toUTCString(),
        tag_name: repo.tag_name,
        zipball_url: repo.zipball_url
      }
    ))
  }

  fileSystem.createCsv("bootstrap_github_info.csv", req.session.repos, req.session.folderPath);
  req.session.folderPath = null;

  res.status(200);
  res.redirect('/api/v1/githubInfo/displayInfo');
}

module.exports = {
  displayForm, processForm, displayInfo, processInfo
}