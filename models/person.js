const mongoose = require('mongoose');
const personSchema = new mongoose.Schema ({

nom: {
    type:String,
    require:true
},
age:{
    type:Number,
    require:true
},
favoriteFoods:{
    type:[String],
    require:false
}
});
const Person = mongoose.model('Person', personSchema);

module.exports = Person;