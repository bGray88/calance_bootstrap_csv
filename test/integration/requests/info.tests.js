const { generateOptions } = require('../../../src/utils/utils');
const axios  = require('axios')
const assert = require('assert');

describe('Info', function () {
  describe('#processInfo', function () {
    it('should fetch data from API and parse as format requested', async function () {

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
        repos = repos.map((repo) => (
          {
            created_at: new Date(repo.created_at).toUTCString(),
            tag_name: repo.tag_name,
            zipball_url: repo.zipball_url
          }
        ))
      }
      
      assert.equal(typeof(repos[0].created_at), "string");
      assert.equal(Object.prototype.toString.call(new Date(repos[0].created_at)), "[object Date]");
      assert.equal(typeof(repos[0].tag_name), "string");
      assert.equal(/^v\d\.\d\.\d$/.test(repos[0].tag_name), true);
      assert.equal(typeof(repos[0].zipball_url), "string");
      assert.equal(repos[0].zipball_url.includes("https://api.github.com"), true);
    });
  });
})
