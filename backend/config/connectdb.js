const mongoose = require('mongoose')

const connectdb=async()=>{
    try{
        await mongoose.connect('mongodb+srv://dellaikhoubeib85:4AI9WdxCJ9KSksYo@cluster0.2abzey6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
       
        console.log('you are connected to ur db')

    }

catch(err){
    console.log(err)
}
}
module.exports = connectdb