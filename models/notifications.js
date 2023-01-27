const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
    date: String,
    description:String
});

module.exports = mongoose.model('notifications',userSchema);