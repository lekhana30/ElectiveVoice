const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Core6 = mongoose.model('Core6');
 


 router.get('/', (req, res) => {
 res.render("core6/6addOrEdit", {
 viewTitle: "Insert 6th sem ce course"
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var core6 = new Core6();
 core6.CourseTitle = req.body.CourseTitle;
 core6.CourseCode = req.body.CourseCode;
 core6.Credits = req.body.Credits;
 core6.CourseContents = req.body.CourseContents;
 core6.TextBooks = req.body.TextBooks;
 core6.ReferenceBooks = req.body.ReferenceBooks;
 core6.SubjectTeacher = req.body.SubjectTeacher;
 core6.OptedStudents = req.body.OptedStudents;
 core6.PassedStudents = req.body.PassedStudents;
 core6.save((err, doc) => {
 if (!err)
 res.redirect('core6/6list');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Core6.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('core6/6list'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/6list', (req, res) => {
 Core6.find((err, docs) => {
 if (!err) {
 res.render("core6/6list", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Core6.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("core6/6addOrEdit", {
 viewTitle: "Update 6th sem ce Course",
 core6: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Core6.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/core6/6list');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
 
 

 module.exports = router;


 



