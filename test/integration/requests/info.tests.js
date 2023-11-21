const assert         = require('assert');
const axios          = require('axios');
const { faker }      = require('@faker-js/faker')

describe('Info', function () {
  describe('#assignToUser()', function () {
    it('should save a quote to a user profile', async function () {
      
      // try {
      //   quoteCreateResponse = await axios.post('http://localhost:3001/api/v1/quotes/assignQuoteToUser', vehicleQuote, {withCredentials: true})
      //   quote = quoteCreateResponse.data.quote;
      // } catch(err) {
      //   console.log(err);
      // }

      // const updatedUserResponse    = await axios.get('http://localhost:3001/api/v1/auth/getUser', { params: {_id: vehicleUser._id, withCredentials: true} })
      // const updatedUser = updatedUserResponse.data.user;
      // const updatedVehicleResponse = await axios.get('http://localhost:3001/api/v1/vehicles/getVehicle', { params: {_id: vehicle._id, withCredentials: true} })
      // const updatedVehicle = updatedVehicleResponse.data.vehicle;

      // assert.equal(updatedUser.quotes[0], quote._id)
      // assert.equal(updatedVehicle.quotes[0], quote._id)
      // assert.equal(quote.status, vehicleQuote.status);
      // assert.equal(quote.price, vehicleQuote.price);
    });
  });
});