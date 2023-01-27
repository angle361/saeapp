const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username : String,
    email : String,
});

// const out = mongoose.model('registeredusers',userSchema);
// console.log(out);

module.exports = mongoose.model('registeredusers',userSchema);