function compile(template, data){
	if (typeof template !== 'string' || template === ''){
		throw new Error('template is not a string!')
	}
	data = data || {};
	
	var indexes = {};
	
	var match = /-(=(.*?)=)-/g;
        
        var result = template.replace(match, function(l,m,n){
             indexes[n] = (indexes[n] || -1);
             indexes[n]++;
             return (data[n] || [])[indexes[n]] || l;
        })
	return result;
}



module.exports = compile;
