const sliderModel = require('../models/name.model')

const nameController = {
    getAll:async(req,res)=>{
        const {name} = req.query
        newGet = await sliderModel.find()
        if (!name){
             res.status(200).send(newGet)
        }
        else{
             const searched = newGet.filter((x)=>
             x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
             )
        }
   },
    getByID:async(req,res)=>{
        const {id} = req.params
        const getID = await sliderModel.findById(id)
        res.status(200).send(getID)
   },
    getPost:async(req,res)=>{
        const{name,imageUrl} = req.body
        const newPost = new sliderModel({
             name:name,
             imageUrl:imageUrl,
        })
        await newPost.save()
        res.status(201).send({
             message:"Posted Succefully!!!",
             payload:newPost
        })
   },
    getDelete:async(req,res)=>{
        const id = req.params.id
        const getDelete = await sliderModel.findByIdAndDelete(id)
        res.status(202).send(getDelete)
   }
}

module.exports = nameController;