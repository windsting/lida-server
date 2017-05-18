
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('replace_content').del()
    .then(function () {
      // Inserts seed entries
      return knex('replace_content').insert([
        {id: 1, stage_id: 50000001, replace_id: 30000001, media_id: 1},
        {id: 2, stage_id: 50000001, replace_id: 30000002, media_id: 2},
        {id: 3, stage_id: 50000001, replace_id: 30000003, media_id: 3},
        {id: 4, stage_id: 50000001, replace_id: 30000004, media_id: 4},
        {id: 5, stage_id: 50000001, replace_id: 30000005, media_id: 5}
      ]);
    });
};
