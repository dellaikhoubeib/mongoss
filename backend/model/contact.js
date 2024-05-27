const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:String,
    lastName:String,
    age:Number,
     email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+@.+..+/, 'Please fill a valid email address']
    }
    
})


module.exports=mongoose.model('contactSchema',contactSchema)