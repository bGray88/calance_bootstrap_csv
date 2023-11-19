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
}

module.exports = {
  getGithubInfo
}