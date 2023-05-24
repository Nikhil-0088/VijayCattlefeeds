const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nikhil_0088:Jayasri0088@cluster0.yv2qcze.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection sucessfull!!")
}).catch((err)=>{
    console.log(err)
})
