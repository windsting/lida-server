exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('stage_template').del()
        .then(function() {
            // Inserts seed entries
            return knex('stage_template').insert([
                { id: 200000001, name: '文字选择题', full_score: 100, price: 0, duration: 60 },
                { id: 200000002, name: '图片选择题', full_score: 50, price: 0, duration: 30 },
                { id: 200000003, name: '看、记、点', full_score: 300, price: 0, duration: 0 }
            ]);
        });
};
