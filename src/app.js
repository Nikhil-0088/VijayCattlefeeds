const express=require('express');
const path=require('path');
const app=express();
require('./db/conn')
const Received=require('./models/register');
const port=process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact",{sucess:""})
})
app.get("/testimonial",(req,res)=>{
    res.render("testimonial")
})
app.get('/admin',(req,res)=>{
    res.render("login")
})
app.get('*',(req,res)=>{
    // res.send("<h1>The page your trying to open does not exist</h1> <a href="/">Go to home</a>")
    res.send("The Page your Trying to view Does not exist")
})
app.post("/login",async(req,res)=>{
    if(req.body.email=='vijaycattlefeed@gmail.com' && req.body.password=='Vcf32014@'){
      var message= await Received.find({seen:false}); 
      res.status(200).render('admin',{messages:message})
    }
    else{
        res.status(400).send("Invalid Login Details")
    }
})
app.post("/contact",async(req,res)=>{
    if(!(req.body.FullName==""||req.body.Email==""||req.body.PhoneNumber==""|| req.body.Message==""||req.body.PhoneNumber.length!=10)){
       try {
          const sendMessage=new Received({
            fullname:req.body.FullName,
            email:req.body.Email,
            phone:req.body.PhoneNumber,
            message:req.body.Message,
            seen:false
          })
        const send=await sendMessage.save();
        res.status(200).render('contact',{sucess:"We recived your message we will contact you back as soon as possible!!!"})
       } catch (error) {
        res.status(400).render('contact',{sucess:"Invalid data in the form"})
       }
    }
    else{
        res.status(400).render('contact',{sucess:"Message was not sent because the data in the form is invalid please enter a valid data."})   
    }
})


app.listen(port,()=>{
    console.log(`app is listening to port ${port}`)
})