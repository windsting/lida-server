
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grant').del()
    .then(function () {
      // Inserts seed entries
      return knex('grant').insert([
        {id: 3, publisher: 10000003, grant_type: 3, name:'分了这500万',desc:'',price:500,gift_score:350,paid:false}
      ]);
    });
};
