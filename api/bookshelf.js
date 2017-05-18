var knex = require('../db/knex');

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
bookshelf.plugin('pagination');

function defModel(name,options) {
	return {
		name : name,
		options : options,
		tableName : options.tableName
	}
}

var models = [
	defModel('Account',{
		tableName: 'account',
		hasTimestamps: true,
		grant(){return this.hasMany('Grant','publisher')},
		relations:['grant']
	}),
	defModel('StageTemplate',{
		tableName: 'stage_template',
		replaces(){
			return this.hasMany('Replace');
		},
		relations:['replaces']
	}),
	defModel('MediaType',{
		tableName: 'media_type',
	}),
	defModel('Replace',{
		tableName: 'replace',
		stageTemplate(){
			return this.belongsTo('StageTemplate');
		},
		relations:['stageTemplate']
	}),
	defModel('GrantType',{
		tableName: 'grant_type',
		grant(){
			return this.hasMany('Grant');
		},
		relations:['grant']
	}),
	defModel('Grant',{
		tableName: 'grant',
		publisher(){
			return this.belongsTo('Account','publisher');
		},
		grantType(){
			return this.belongsTo('GrantType','grant_type');
		},
		stage(){
			return this.hasMany('Stage');
		},
		relations:['publisher','grantType','stage']
	}),
	defModel('Product',{
		tableName: 'product',
	}),
	defModel('Gift',{
		tableName: 'gift',
		grant(){
			return this.belongsTo('Grant');
		},
		product(){
			return this.belongsTo('Product');
		},
		relations:['grant','product']
	}),
	defModel('Stage',{
		tableName: 'stage',
		template(){
			return this.belongsTo('StageTemplate', 'template_id');
		},
		grant(){
			return this.belongsTo('Grant');
		},
		replaceContent(){
			return this.hasMany('ReplaceContent')
		},
		relations:['grant','template','replaceContent']
	}),
	defModel('MediaContent',{
		tableName: 'media_content',
		owner(){
			return this.belongsTo('Account','owner_id');
		},
		// relations:['owner']
	}),
	defModel('ReplaceContent',{
		tableName: 'replace_content',
		stage(){
			return this.belongsTo('Stage');
		},
		replace(){
			return this.belongsTo('Replace');
		},
		media(){
			return this.belongsTo('MediaContent', 'media_id');
		},
		relations:['stage','replace','media']
	}),
	defModel('GrantInvite',{
		tableName: 'grant_invite',
		grant(){
			return this.belongsTo('Grant');
		},
		invited(){
			return this.belongsTo('Account', 'invited_id');
		},
		hasTimestamps: true,
		relations:['grant','invited']
	}),
	defModel('GrantRefer',{
		tableName: 'grant_refer',
		grant(){
			return this.belongsTo('Grant');
		},
		player(){
			return this.belongsTo('Account', 'player_id');
		},
		address(){
			return this.belongsTo('Address');
		},
		relations:['grant','player','address'],
		hasTimestamps: true
	}),
	defModel('Task',{
		tableName: 'task',
		stage(){
			return this.belongsTo('Stage');
		},
		player(){
			return this.belongsTo('Account', 'player_id');
		},
		relations:['stage','player'],
		hasTimestamps: true
	}),
	defModel('Location',{
		tableName: 'location',
		hasTimestamps : true
	}),
	defModel('Address',{
		tableName: 'address',
		location(){
			return this.belongsTo('Location', 'area_id');
		},
		relations:['location'],
	}),
	defModel('Message',{
		tableName: 'message',
		user(){
			return this.belongsTo('Account', 'user_id');
		},
		relations:['user'],
		hasTimestamps : true
	}),
	defModel('ParamType',{
		tableName: 'param_type',
		params(){
			return this.hasMany('Param', 'type');
		},
		relations:['params']
	}),
	defModel('Param',{
		tableName: 'param',
	}),
];

bookshelf.models = models;
models.forEach(model=>{
	bookshelf[model.name] = bookshelf.Model.extend(model.options);
	bookshelf.model(model.name, bookshelf[model.name]);
	bookshelf[model.name].tableName = model.tableName;
});

var Promise = require('bluebird');
Promise.map(models, model=>{
	return knex(model.tableName).columnInfo().then(columns=>{
		return { tableName:model.tableName, columns: columns};
	})
}).then(tables=>{
	var fs = require('fs');
	fs.writeFile('./db/source/tables.json', JSON.stringify(tables), err=>{
		if(err)
			console.log(err);
	});
});



module.exports = bookshelf;