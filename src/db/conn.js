const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nikhilb1216:Jayasri0088@cluster0.tslyqja.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection sucessfull!!")
}).catch((err)=>{
    console.log(err)
})
