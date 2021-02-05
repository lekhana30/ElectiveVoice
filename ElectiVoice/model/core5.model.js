const mongoose = require("mongoose");

var Core5Schema = new mongoose.Schema({
 CourseTitle :{
 type:String,
 required:"Required"
 },
 CourseCode :{
 type:String
 },
 Credits:{
 type:String
 },
 CourseContents:{
 type:String
 },
 TextBooks:{
 type:Array
 },
 ReferenceBooks:{
 type:Array
 },
 SubjectTeacher:{
 type:String
 },
 OptedStudents:{
 type:String
 },
 
 PassedStudents:{
 type:String
 }
 });
 
mongoose.model("Core5",Core5Schema);

