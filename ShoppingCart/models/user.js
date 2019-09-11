var mongoose = require('mongoose');
var Schmea = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


var userSchmea = new Schmea({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

userSchmea.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
userSchmea.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model('User', userSchmea);