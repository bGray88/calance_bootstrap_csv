const { generateOptions } = require('../utils/utils');
const https = require('https');

const getGithubInfo = async (req, res) => {

  const repoName = req.params.repoName;
  const options  = generateOptions(`/repos/${repoName}`)

  https.get(options, function (apiResponse) {
      apiResponse.pipe(res);
  }).on('error', (e) => {
      console.log(e);
      res.status(500).send({
        message: constants.error_message,
      });
  })

  const data = {
    description: 'Please type a destination directory and click the process button to start.'
  };
  // render the info page
  res.status(200);
  res.render('inputFrame', data);
}

module.exports = {
  getGithubInfo
}