const supertest = require("supertest");
const assert    = require('assert');
const app       = require("../../../app");
const request   = supertest(app);

describe('Info', function () {
  describe('#displayForm', function () {
    it('should fetch data from API and parse as format requested', async function () {

      const response = await request
        .get("/api/v1/githubInfo/displayForm")
      const pageText = response.text;

      assert.equal(response.status, 200);
      assert.equal(pageText.includes("Github Bootstrap CSV"), true)
      assert.equal(pageText.includes("Please type a destination directory and click the process button to start."), true)
    });
  });
})
