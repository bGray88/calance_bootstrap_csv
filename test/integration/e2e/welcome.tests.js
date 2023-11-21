const supertest = require("supertest");
const assert    = require('assert');
const app       = require("../../../app");
const request   = supertest(app);

describe("Welcome", function () {
  describe("Get /", function () {
    it("should display welcome page upon arrival", async function () {
      const response = await request
        .get("/")
      const pageText = response.text;

      assert.equal(response.status, 200);
      assert.equal(pageText.includes("Github Bootstrap CSV"), true)
      assert.equal(pageText.includes("Hello Calance!"), true)
    });
  });
})
