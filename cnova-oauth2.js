// npm install express simple-oauth2

var express = require('express'),
    app = express();

var oauth2 = require('simple-oauth2')({
	
	// Alterar as próximas duas variáveis 
	// de acordo com os dados da sua APP
	clientID: 'll0rQx9SSsgf',
	clientSecret: '0MrkwnYXN1Ev',

	site: '',
	tokenPath: 'https://api.cnova.com/oauth/access_token',
	authorizationPath: 'https://lojista.ehub.com.br/oauth-api/authorize'

});
 
// Definicoes de Autorizacao
var authorization_uri = oauth2.authCode.authorizeURL({
	redirect_uri: 'http://localhost:3000/callback',
	scope: 'notifications',
	state: '12345'
});
 
// Pagina inicial
app.get('/auth', function (req, res) {
	res.redirect(authorization_uri);
});

app.get('/', function (req, res) {
	res.redirect('/auth');
});
 
// Callback Service. Recupera o grant_code e solicita o access_token 
app.get('/callback', function (req, res) {
	var code = req.query.code;
	console.log('/callback');
	oauth2.authCode.getToken({
		code: code,
		redirect_uri: 'http://localhost:3000/callback'
	}, saveToken);
 
	function saveToken(error, result) {
		if (error) { console.log('Access Token Error', error.message); }
		token = oauth2.accessToken.create(result);
	}
});

app.listen(3000);
console.log('Express server started on port 3000');