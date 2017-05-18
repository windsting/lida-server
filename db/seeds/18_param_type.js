
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('param_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('param_type').insert([
        {id: 1, name: 'Grant价格', desc:'((stage_count-free_count)-(stage_count-free_count)/discount_unit)*price_per_stage'}
      ]);
    });
};
