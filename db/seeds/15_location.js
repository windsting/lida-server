
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      var locations = require('../source/location.json');
      var _ = require('lodash');
      locations = _.chunk(locations, 20);
      return Promise.map(locations, function(ls){
        return knex('location').insert(ls);
      });
      console.log(locations.length);
    });
};
