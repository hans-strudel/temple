var temple = require('./temple.js');

var data = {
	'names': ['Jack', 'Jill'],
	'ages': {
		'Jack': 10
	}
}

var compiled = temple('=names=, Hey -=names=-, this is your brother, -=names=-! I am now -=ages==Jack=-', data)
console.log(compiled)
