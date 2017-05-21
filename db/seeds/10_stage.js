
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stage').del()
    .then(function () {
      // Inserts seed entries
      return knex('stage').insert([
        {id: 50000001, template_id: 200000001, grant_id: 3, mode: 1}
      ]);
    });
};
