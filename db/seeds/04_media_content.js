
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('media_content').del()
    .then(function () {
      // Inserts seed entries
      return knex('media_content').insert([
        {id: 1, owner_id: 10000003, content:'这个世界上谁最可爱？'},
        {id: 2, owner_id: 10000003, content:'化腾哥'},
        {id: 3, owner_id: 10000003, content:'外星人云哥'},
        {id: 4, owner_id: 10000003, content:'nick_345'},
        {id: 5, owner_id: 10000003, content:'潇洒哥'},
        {id: 6, owner_id: 10000003, content:'b_388359_1315747054ur40.jpg'},
      ]);
    });
};
