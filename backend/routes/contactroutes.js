const express =require('express')

const contactSchema = require('../model/contact')


const contactroutes=express.Router()




    // route get all contact
    //==> http://localhost:4000/contact/getall



    contactroutes.get('/getall',async(req,res)=>{
        try{

            const contact= await contactSchema.find()
            res.status(200).json({msg:'your get all the user',contact})
        
        
        
        
        }catch(err){
            console.log(err)
            res.send('your have a probleme')
        }


    })




    // route poste or add contact
    //==> http://localhost:4000/contact/addcontact


    contactroutes.post('/addcontact',async(req,res)=>{
        try{
    
    const newContact = new contactSchema(req.body)
    
     await newContact.save()
    
    res.status(200).send({msg:"you added ur contact user",newContact})
    
        }catch(err){
            console.log(err)
        }
    })


    // route update contact
    //==> http://localhost:4000/contact/update/:id

    contactroutes.put('/update/:id',async(req,res)=>{
        try{

            const {id}=req.params
            const updateduser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})

            res.status(200).json({msg:'your could apdate the user',updateduser})



        }catch(err){
            console.log(err)
            res.send('your have a probleme')
        }
    })




    // route delete contact
    //==> http://localhost:4000/contact/delete/:id
    contactroutes.delete('delete/:id',async(req,res)=>{
        try{

            const {id}=req.params
            const deleteuser= await contactSchema.findByIdAndDelete(id,{$set:{...req.body}})

            res.status(200).json({msg:'your could delete the user'})



        }catch(err){
            console.log(err)
            res.send('your have a probleme')
        }
    })





    // route get unique contact
    //==> http://localhost:4000/contact/getunique/:id


    contactroutes.get('getunique/:id',async(req,res)=>{
        try{

            const {id}=req.params
            const getuser= await contactSchema.findById(id)

            res.status(200).json({msg:"your could  find him ur user".getuser})



        }catch(err){
            console.log(err)
            res.send('your have a probleme')
        }
    })









module.exports=contactroutes