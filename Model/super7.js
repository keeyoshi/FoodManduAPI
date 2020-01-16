const mongoose=require('mongoose');
const SuperSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    cafe:{
        type:String,
        required:true
    },
    dish:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('supers',SuperSchema);