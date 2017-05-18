var crypto = require('crypto');

var hash = function (a,p) {
  return crypto.createHash('sha1').update(a+p).digest('hex');
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('account').del()
    .then(function () {
      // Inserts seed entries
      var accounts = [
        {id: 10000001, balance: 123, dev_group: 65535},
        {id: 10000002, balance: 234, dev_group: 0},
        {id: 10000003, balance: 345, dev_group: 0}
      ].map(function (row) {
        var b = row.balance;
        var bs = '' + b;
        row.account = row.password = bs;
        row.nick_name = 'nick_' + bs;
        row.gender = b % 2;
        row.tycoon_point = b % 13;
        row.charm_point = b % 11;
        row.active_point = b % 7;
        row.password = hash(row.account, row.password);
        return row;
      });
      // console.log(JSON.stringify(accounts));
      return knex('account').insert(accounts);
    })
};
