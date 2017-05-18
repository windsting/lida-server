
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {id: 2, user_id: 10000002, sender_id:0, title:'收礼邀请', content:'nick_345 邀请你来抢礼物了',read: false}
      ]);
    });
};
