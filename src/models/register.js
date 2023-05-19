const mongoose=require('mongoose')

const messageSchema= new mongoose.Schema({
   fullname:{
      type:String,
      require:true,
   },
   email:{
        type:String,
        require:true,
   },
   phone:{
     type:String,
     require:true
   },
   message:{ 
    type:String,
    require:true
   },
   seen:{
      type:Boolean,
      require:true
   }
})
//cereting a collection
const Received=new mongoose.model("Received",messageSchema);

module.exports= Received;