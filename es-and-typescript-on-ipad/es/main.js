System.transpiler = 'babel';

System.paths['es/*'] = '/es/*.js';
			
System.import('es/helloworld').catch(function(e){
	alert(e);
});