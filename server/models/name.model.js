const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    name: String, 
    imageUrl: String,
  });

const sliderModel = mongoose.model('Slider', sliderSchema);


module.exports = sliderModel