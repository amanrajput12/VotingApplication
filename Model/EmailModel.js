const mongoose = require('mongoose')
const emailSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    verified:{
        type:Boolean,
        default:false,
    },
    admin:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('email',emailSchema);