/* instantiating dependencies */
const path          =   require('path');
const bodyParser    =   require('body-parser');
const cors          =   require('cors');
const express       =   require('express');
const mongoose      =   require('mongoose');

const userRoutes    =   require('./routes/user');

mongoose.connect('mongodb://localhost/gameengine')
.then(() => console.log('conectado a base'))
.catch(err => console.log('Error al conectar: ' + err));

const app           =   express();

/* configuration */

app.set('port', process.env.PORT || 3000);


/* middlewares */

app.use(cors());

app.use(bodyParser.json());

/* routes */

app.use('/user', userRoutes);

/* static */

app.use(express.static(path.join(__dirname, 'public')));

/* init server in port 3000 */
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en puerto', app.get('port') );
});