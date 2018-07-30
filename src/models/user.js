const mongoose  =   require('mongoose');
const Schema    =   mongoose.Schema;

const user = new Schema({
    name        :   { type: String },
    email       :   { type: String },
    password    :   { type: String },
    created     :   { type: String },
    status      :   { type : Boolean}
}, {
    collection  : 'users'
});

module.exports = mongoose.model('user', user);