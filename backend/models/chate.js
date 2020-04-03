const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let chateSchema=new Schema({
    name: {
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{
    collation:'chates'
});
module.exports=mongoose.model('Chate',chateSchema);