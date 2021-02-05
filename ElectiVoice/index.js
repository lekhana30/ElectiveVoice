 require("./model/index");
const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = require('handlebars');
const bodyparser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const app = express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
const oe6ece =require('./controllers/oe6ece');
const oe6electric = require('./controllers/oe6electric');
const core5= require('./controllers/core5');
const oe6mech = require('./controllers/oe6mech');
const oe6civ =require('./controllers/oe6civ');
const core6 = require('./controllers/core6');
const core7 = require('./controllers/core7');
const core8 = require('./controllers/core8');
const oe6aero = require('./controllers/oe6aero');

app.set('views',path.join(__dirname,'/views/')); 
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainlayout',layoutsDir:__dirname+'/views/layouts/',handlebars: allowInsecurePrototypeAccess(hbs)}));
app.set('view engine','hbs');
app.listen("10101",()=>{
    console.log("Server started");
});
app.use("/core6",core6);
app.use("/oe6civ",oe6civ);
app.use("/oe6mech",oe6mech);
app.use("/core5",core5);
app.use("/core7",core7);
app.use("/core8",core8);
app.use("/oe6aero",oe6aero);
app.use("/oe6ece",oe6ece);
app.use("/oe6electric",oe6electric);



    






  



