const constants = require('../bin/helpers/constants');

const generateOptions = (path) => {
  return options = {
    url: `https://${constants.hostName}${path}`,
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }
}

module.exports = { generateOptions }