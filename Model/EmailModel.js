const Mongoose = require('mongoose')
const emailSchema = new Mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    }
});
module.exports = Mongoose.model('email',emailSchema);