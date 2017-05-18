
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grant_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('grant_type').insert([
        {id: 1, name: '公开'},
        {id: 2, name: '聚会'},
        {id: 3, name: '链接分享'}
      ]);
    });
};
