
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('replace').del()
    .then(function () {
      // Inserts seed entries
      return knex('replace').insert([
        {id: 30000001, stage_template_id: 200000001, media_type_id: 1, slot:0},
        {id: 30000002, stage_template_id: 200000001, media_type_id: 1, slot:1},
        {id: 30000003, stage_template_id: 200000001, media_type_id: 1, slot:2},
        {id: 30000004, stage_template_id: 200000001, media_type_id: 1, slot:3},
        {id: 30000005, stage_template_id: 200000001, media_type_id: 1, slot:4},

        {id: 30000006, stage_template_id: 200000002, media_type_id: 2, slot:0},
        {id: 30000007, stage_template_id: 200000002, media_type_id: 2, slot:1},
        {id: 30000008, stage_template_id: 200000002, media_type_id: 2, slot:2},
        {id: 30000009, stage_template_id: 200000002, media_type_id: 2, slot:3},
        {id: 30000010, stage_template_id: 200000002, media_type_id: 2, slot:4},

        {id: 30000011, stage_template_id: 200000003, media_type_id: 2, slot:0},
        {id: 30000012, stage_template_id: 200000003, media_type_id: 2, slot:1},
        {id: 30000013, stage_template_id: 200000003, media_type_id: 2, slot:2},
        {id: 30000014, stage_template_id: 200000003, media_type_id: 2, slot:3},
      ]);
    });
};
