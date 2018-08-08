const express           =   require('express');
const router            =   express.Router();

const Controller        =   require('../controllers/UsersController');

const UsersController   =   new Controller();


router.get('/', (req, res) => UsersController.request(req, res).read());
router.get('/:id', (req, res) => UsersController.request(req, res).get());
router.post('/', (req, res) => UsersController.request(req, res).create());
router.put('/:id', (req, res, next) => UsersController.request(req, res, next).update());
router.delete('/:id', (req, res, next) => UsersController.request(req, res, next).delete());


module.exports  =   router;