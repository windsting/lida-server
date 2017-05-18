var express = require('express');
var bookshelf = require('./bookshelf');
var models = bookshelf.models;

var router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now().toString());
	next()
})

models.forEach(function (model) {
	router.get('/' + model.tableName, function(req,res){
		bookshelf[model.name].forge()
			.fetchAll()
			.then(function(rows){
				console.log(rows.related())
				res.json({error:false, data: rows.toJSON()});
			})
			.catch(function(err){
				res.status(500).json({err:true, data:err.message});
			})
	})

	router.get('/'+model.tableName+'/page/:p?/:s?', function(req, res){
		var fetchOptions = {
			pageSize: req.params.s,
			page: req.params.p,
		}

		bookshelf[model.name].forge()
			.fetchPage({
				pageSize: req.params.s,
				page: req.params.p,
				withRelated: model.options.relations
			})
			.then(function(rows){
				// console.log(rows);
				if(model.options.relations){
					rows.forEach(function (row) {
						var relations = {}
						model.options.relations.forEach(function (r) {
							relations[r] = row.related(r);
						})
						row.related = relations;
					})
				}
				res.json({error:false, data: {rows:rows, pagination:rows.pagination}});
			})
			.catch(function(err){
				res.status(500).json({err:true, data:err.message});
			})
	})
})

var path = '/' + bookshelf.Location.tableName + '/parent/:id?';
router.get(path, function(req, res){
	bookshelf.Location.where({parent_id:req.params.id || 0}).fetchAll()
	.then(function(rows){
		res.json({err:false, data:rows});
	})
});

router.get('/', function(req, res){
	res.send('Hello api');
})



module.exports = router;