
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grant_invite').del()
    .then(function () {
      // Inserts seed entries
      return knex('grant_invite').insert([
        {id: 300001, grant_id: 3, invited_id:10000002, status:0}
      ]);
    });
};
