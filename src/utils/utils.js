const constants = require('../bin/helpers/constants');

const generateOptions = (path) => {
  return options = {
    url: `https://${constants.hostName}${path}`,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }
}

module.exports = { generateOptions }