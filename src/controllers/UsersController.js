const User          =   require('../models/user');
const Controller    =   require('../controllers/Controller');


class UsersController extends Controller {

    /* Obtener Datos */
    read() {
        User.find((err, users) => {
            if (err) {
                throw err;
            }

            this.res.json(users);
        })
    }

    get() {
        User.findById(this.req.params.id, (err, user) => {
            if (!user){
                return this.next(new Error('No se pudo obtener Usuario con id ' + this.req.params.id));
            }
            this.res.json(user);
        });
    }

    /* Agregar un Dato */
    create () {
        console.log(this.req.body);
        const user = new User(this.req.body);
        user.save()
        .then(user => {
            this.res.status(200).json({ response : 'Usuario agregado.' });
        })
        .catch(err => {
            this.res.status(400).json({ response : 'Error al agregar el usuario.' });
        });
    }

    /* Actualizar un Dato */
    update() {
        User.findById(this.req.params.id, (err, user) => {
            if (!user){
                return this.next(new Error('No se pudo cargar Usuario.'));
            }
    
            user.name       =   this.req.body.name;
            user.email      =   this.req.body.email;
            user.password   =   this.req.body.password;
            user.created    =   Date.now();
            user.status     =   this.req.body.status;
    
            user.save()
            .then(user => {
                this.res.status(200).json({ response : 'Usuario actualizado.' });
            })
            .catch(err => {
                this.res.status(400).send({ response : 'Error al actualizar el usuario.' });
            });
    
        });
    }

    /* Eliminar un Dato */
    delete() {
        User.findByIdAndRemove(this.req.params.id, (err, user) => {
            if (err){
                this.res.json({ error : err });
                return;
            }
    
            this.res.json({ response : 'Usuario eliminado.' });
        });
    }
}


module.exports  =   UsersController;