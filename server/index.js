const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()

app.use(cors())
dotenv.config()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const sliderSchema = new mongoose.Schema({
     name: String, 
     imageUrl: String,
   });

const sliderModel = mongoose.model('Slider', sliderSchema);


app.post(`/api/project`,async(req,res)=>{
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
})

app.get(`/api/project`,async(req,res)=>{
     const {name} = req.query
     newGet = await sliderModel.find()
     if (!name){
          res.status(200).send(newGet)
     }
     else{
          const searched = newGet.filter((x)=>
          x.name.toLowerCase().trim().
          )
     }
})



PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace('<password>',DB_PASSWORD)).then(()=>{
     console.log("MongoDB Connected!!!")
});