
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {id: 1, account_id: 10000002, area_id: 310101, detail: 'Victor家', mobile: '13612345678', contact_name: 'Victor', usage: 1},
        {id: 2, account_id: 10000002, area_id: 310115, detail: 'Glooby家', mobile: '13612345678', contact_name: 'Glooby', usage: 0},
        {id: 3, account_id: 10000002, area_id: 310115, detail: 'Windst家', mobile: '13612345678', contact_name: 'Windst', usage: 0}
      ]);
    });
};
