const { generateOptions } = require('../utils/utils');
const axios = require('axios')
const fs    = require('fs')
const path = require('path');
const { constants } = require('buffer');
const createCsvWriter = require('csv-writer').createObjectCsvWriter

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
    description: 'Please type a destination directory and click the process button to start.'
  };
  res.status(200);
  res.render('basicFrame', data);
}

const processInfo = async (req, res) => {
  const getInfo = async (req, res) => {

    const folderName = req.query.destination;
    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
    } catch (err) {
      console.error(err);
    }
  
    const options = generateOptions(`/repos/twbs/bootstrap/releases`);
    let repos = []

    await axios.get(options.url, { headers: options.headers })
      .then((res) => {
        repos = res.data
    }).catch('error', (e) => {
        console.log(e);
        res.status(500).send({
          message: constants.errorMessage
        });
    })

    if (repos) {
      repos = repos.map((repo) => (
        {
          created_at: new Date(repo.created_at).toUTCString(),
          tag_name: repo.tag_name,
          zipball_url: repo.zipball_url
        }
      ))
    }

    const filename = "bootstrap_github_info.csv";
    const csvWriter = createCsvWriter({
      path: `${folderName}/${filename}`,
      header: [
        {id: 'created_at', title: 'CREATED_DATE'},
        {id: 'tag_name', title: 'TAG_NAME'},
        {id: 'zipball_url', title: 'URL_OF_DIST_ZIP'}
      ]
    });

    csvWriter.writeRecords(repos)
      .then(() => {
        console.log('...Done');
      });

    return { repos: repos };
  }

  const displayInfo = async (req, res) => {
    const data = {
      page: "table",
      title: "Github CSV Data",
      description: 'Your CSV has been saved to the desired location.',
      table: req.repos
    };
    res.render('basicFrame', data);
  }

  const data = await getInfo(req, res)
  await displayInfo(data, res)
}

module.exports = {
  displayForm, processInfo
}