const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    tel: String,
    pwd: String,
    role: String,
    
});
const user = mongoose.model('User',userSchema);
module.exports = user;