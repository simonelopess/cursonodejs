
const app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
var home = require('./app/routes/home');
var formulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia');

rotaNoticias(app);
home(app);
formulario_inclusao_noticia(app);

app.listen(3000, function () {
    console.log('Servidor Online');
});