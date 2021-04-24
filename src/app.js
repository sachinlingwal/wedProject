const express = require("express");
const app = express();
const path = require('path');
const hbs = require("hbs")
const port = process.env.PORT || 8000;


// public static path 
const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set("views","../views")
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));



//routing
//route for home page
app.get("",(req,res)=>{
    res.render("index");
});

// route for about page 
app.get("/about",(req,res)=>{
    res.render("about");
});

//weather page 
app.get("/weather",(req,res)=>{
    res.render("weather");
})

//if page is not found
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg :'oops ! page not found'
    });
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("listning in port 8000");
})