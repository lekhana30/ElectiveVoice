const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ElectiVoice",{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false},(error)=>{
if(!error)
{
    console.log("Success Connected");
}
else{
    console.log("Error connecting to database."+ error);
}
});
 require("./oe6mech.model");
 require("./core6.model");
 require("./oe6civ.model");
 require("./core5.model");
require("./oe6aero.model");
require("./core7.model");
require("./core8.model");
require("./oe6electric.model");
require("./oe6ece.model");
