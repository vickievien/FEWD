const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema ({
    name: {type: String, required: true},
    animalType: {type:String, required: true},
    gender: {type:String, required: true},
    breed: [String],
    color: String,
    age: Number,
    likes: [String]
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;