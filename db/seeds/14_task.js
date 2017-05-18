
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 3, player_id: 10000002, stage_id: 50000001, score: 13}
      ]);
    });
};
