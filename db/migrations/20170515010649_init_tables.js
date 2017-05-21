
exports.up = function(knex, Promise) {
  return Promise.all([
  		knex.schema.dropTableIfExists('account')
  			.createTable('account', function (table) {
  			table.bigIncrements().primary();
  			table.string('account').notNullable();
  			table.string('password');
  			table.string('nick_name');
  			table.integer('dev_group').defaultTo(0);
  			table.integer('gender');
  			table.integer('balance');
  			table.integer('tycoon_point');
  			table.integer('charm_point');
  			table.integer('active_point');
  			table.timestamp('last_login_at').defaultTo(knex.fn.now());
  			table.timestamps(true ,true);
  			table.unique('account');
  		})
  		.dropTableIfExists('stage_template')
  		.createTable('stage_template', function (table) {
  			table.bigIncrements().primary();
  			table.string('name').notNullable();
  			table.string('desc');
  			table.integer('full_score');
  			table.integer('price');
  			table.integer('duration');
  			table.integer('difficuty');
  			// table.timestamps();
  		})
  		.dropTableIfExists('media_type')
  		.createTable('media_type', function (table) {
  			table.bigIncrements().primary();
  			table.string('name').notNullable();
  			table.string('icon_url');
  		})
  		.dropTableIfExists('media_content')
  		.createTable('media_content', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('owner_id').references('id').inTable('account');
  			table.string('content');
  			table.string('filetype');
  			table.timestamps(true ,true);
  		})
  		.dropTableIfExists('replace')
  		.createTable('replace', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('stage_template_id').references('id').inTable('stage_template');
  			table.integer('media_type_id').notNullable();
  			table.integer('slot').notNullable();
  			table.unique(['stage_template_id', 'slot']);
  		})
  		.dropTableIfExists('grant_type')
  		.createTable('grant_type', function (table) {
  			table.bigIncrements().primary();
  			table.string('name').notNullable();
  		})
  		.dropTableIfExists('grant')
  		.createTable('grant', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('publisher').references('id').inTable('account');
  			table.bigInteger('grant_type').references('id').inTable('grant_type');
  			table.string('name').notNullable();
  			table.string('desc').notNullable();
  			table.bigInteger('cover_id').references('id').inTable('media_content');
  			table.integer('price');
  			table.timestamp('order_time').defaultTo(knex.fn.now());
  			table.timestamp('start_time').defaultTo(knex.fn.now());
  			table.timestamp('end_time').defaultTo(knex.fn.now());
  			table.integer('gift_score');
  			table.integer('city');
  			table.integer('paid');
  		})
  		.dropTableIfExists('product')
  		.createTable('product', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('mechant_id').defaultTo(0);
  			table.string('name').notNullable();
  			table.string('desc').notNullable();
  			table.bigInteger('image_id').references('id').inTable('media_content');
  			table.integer('price');
  			table.integer('sku');
  			table.timestamps(true, true);
  		})
  		.dropTableIfExists('gift')
  		.createTable('gift', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('grant_id').references('id').inTable('grant');
  			table.bigInteger('product_id').references('id').inTable('product').defaultTo(null);
  			table.string('content').defaultTo('');
  			table.bigInteger('image_id').references('id').inTable('media_content').defaultTo(null);
  			table.integer('count').defaultTo(1);
  			table.integer('ranking').defaultTo(1);
  			table.integer('min_score').defaultTo(0);
  		})
  		.dropTableIfExists('stage')
  		.createTable('stage', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('template_id').references('id').inTable('stage_template');
  			table.bigInteger('grant_id').references('id').inTable('grant');
  			table.integer('mode');
  		})
  		.dropTableIfExists('replace_content')
  		.createTable('replace_content', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('stage_id').references('id').inTable('stage');
  			table.bigInteger('replace_id').references('id').inTable('replace');
  			table.bigInteger('media_id').references('id').inTable('media_content');
  		})
  		.dropTableIfExists('grant_invite')
  		.createTable('grant_invite', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('grant_id').references('id').inTable('grant');
  			table.bigInteger('invited_id').references('id').inTable('account');
  			table.integer('status');
  			table.timestamps(true, true);
  			table.unique(['grant_id', 'invited_id']);
  		})
  		.dropTableIfExists('grant_refer')
  		.createTable('grant_refer', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('grant_id').references('id').inTable('grant');
  			table.bigInteger('player_id').references('id').inTable('account');
  			table.integer('rank');
  			table.bigInteger('address_id').references('id').inTable('address');
  			table.string('mail_type');
  			table.string('mail_id');
  			table.integer('score');
  			table.string('comment');
  			table.timestamps(true, true);
  			table.unique(['grant_id', 'player_id']);
  		})
  		.dropTableIfExists('task')
  		.createTable('task', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('refer_id').references('id').inTable('grant_refer');
  			table.bigInteger('stage_id').references('id').inTable('stage');
  			table.integer('score');
  			table.timestamps();
  			table.unique(['refer_id', 'stage_id']);
  		})
  		.dropTableIfExists('location')
  		.createTable('location', function (table) {
  			table.bigIncrements().primary();
  			table.string('name');
  			table.bigInteger('parent_id');
  			table.string('short_name');
  			table.integer('level_type');
  			table.string('city_code');
  			table.string('zip_code');
  			table.string('merger_name');
  			table.float('lng');
  			table.float('lat');
  			table.string('pinyin');
  			table.boolean('inactive').defaultTo(false);
  			table.timestamps();
  		})
  		.dropTableIfExists('address')
  		.createTable('address', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('account_id').references('id').inTable('account');
  			table.bigInteger('area_id').references('id').inTable('location');
  			table.string('detail');
  			table.string('mobile');
  			table.string('contact_name');
  			table.integer('usage').defaultTo(0);
  			table.timestamps();
  		})
  		.dropTableIfExists('message')
  		.createTable('message', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('user_id').references('id').inTable('account');
  			table.bigInteger('sender_id').references('id').inTable('account');
  			table.string('title');
  			table.string('content');
  			table.boolean('read');
  			table.timestamps();
  		})
  		.dropTableIfExists('param_type')
  		.createTable('param_type', function (table) {
  			table.bigIncrements().primary();
  			table.string('name').notNullable();
  			table.string('desc').notNullable();
  		})
  		.dropTableIfExists('param')
  		.createTable('param', function (table) {
  			table.bigIncrements().primary();
  			table.bigInteger('type').references('id').inTable('param_type');
  			table.string('name').notNullable();
  			table.string('desc').notNullable();
  			table.integer('value').notNullable();
  		})
  	]);
};

exports.down = function(knex, Promise) {
	return knex.schema
			.dropTable('account')
  			.dropTable('stage_template')
  			.dropTable('media_type')
  			.dropTable('replace')
  			.dropTable('grant_type')
  			.dropTable('grant')
  			.dropTable('product')
  			.dropTable('gift')
  			.dropTable('stage')
  			.dropTable('media_content')
  			.dropTable('replace_content')
  			.dropTable('grant_refer')
  			.dropTable('task')
  			.dropTable('grant_invite')
  			.dropTable('location')
  			.dropTable('address')
  			.dropTable('message')
  			.dropTable('param_type')
  			.dropTable('param')
  			;
};
