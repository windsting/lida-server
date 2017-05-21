
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gift').del()
    .then(function () {
      // Inserts seed entries
      return knex('gift').insert([
        {id: 40000001, grant_id: 3, product_id: 1, content: null, image_id: 0, count: 5 , ranking:1},
        {id: 40000002, grant_id: 3, product_id: 2, content: null, image_id: 0, count: 10, ranking:2},
        {id: 40000003, grant_id: 3, product_id: 0, content: 'custom gift', image_id: 6, count: 15, ranking:3}
      ]);
    })
};
