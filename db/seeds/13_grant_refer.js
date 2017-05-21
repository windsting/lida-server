
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grant_refer').del()
    .then(function () {
      // Inserts seed entries
      return knex('grant_refer').insert([
        {id: 1, grant_id: 3, player_id: 10000002, rank: 3}
      ]);
    });
};
