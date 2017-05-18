
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {id: 1, name: '新马泰游', desc:'行程共计一天一晚', price: 100000, sku: 20},
        {id: 2, name: '白宫参观', desc:'食宿路费自理', price: 10000, sku: 20},
        {id: 3, name: '旧马克杯', desc:'本来用途是刷牙', price: 1000, sku: 2}
      ]);
    });
};
