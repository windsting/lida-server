
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('param').del()
    .then(function () {
      // Inserts seed entries
      return knex('param').insert([
        {id: 1, type: 1, name:'free_count', desc:'前3关免费', value:3},
        {id: 2, type: 1, name:'discount_unit', desc:'每10关优惠1关', value:10},
        {id: 3, type: 1, name:'price_per_stage', desc:'每个关卡价格，单位是“分”', value:99}
      ]);
    });
};
