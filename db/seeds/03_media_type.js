
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('media_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('media_type').insert([
        {id: 1, name: 'text', icon_url:'text.png'},
        {id: 2, name: 'image', icon_url:'image.png'},
        {id: 3, name: 'audio', icon_url:'audio.png'},
        {id: 4, name: 'video', icon_url:'video.png'},
      ]);
    });
};
