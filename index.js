var perfjankie = require('perfjankie');

var version = require('./../dbmonster/bower.json').dependencies.ember;

perfjankie({
	url: 'http://192.168.0.106:8080',
	name: 'DBMonster',
	time: (version + '.....').split(/[\.-]/g).slice(0, 5).map(function(part) {
		return ('ZZZZZ' + part).slice(-5);
	}).join('.'), // Hack to sort versions, assuming version is like 1.12.0-beta.1 or 1.12.0
	run: version,
	couch: {
		server: 'http://localhost:5984',
		database: 'ember-perf'
	},
	browsers: [{
		browserName: 'android',
	}],
	selenium: 'http://localhost:9515',
	repeat: 30
});