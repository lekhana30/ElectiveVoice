const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Core5 = mongoose.model('Core5');
 


 router.get('/', (req, res) => {
 res.render("core5/5addOrEdit", {
 viewTitle: "Insert 5th sem ce course "
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var core5 = new Core5();
 core5.CourseTitle = req.body.CourseTitle;
 core5.CourseCode = req.body.CourseCode;
 core5.Credits = req.body.Credits;
 core5.CourseContents = req.body.CourseContents;
 core5.TextBooks = req.body.TextBooks;
 core5.ReferenceBooks = req.body.ReferenceBooks;
 core5.SubjectTeacher = req.body.SubjectTeacher;
 core5.OptedStudents = req.body.OptedStudents;
 core5.PassedStudents = req.body.PassedStudents;
 core5.save((err, doc) => {
 if (!err)
 res.redirect('core5/5list');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Core5.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('core5/5list'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/5list', (req, res) => {
 Core5.find((err, docs) => {
 if (!err) {
 res.render("core5/5list", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Core5.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("core5/5addOrEdit", {
 viewTitle: "Update 5TH Sem Ce Course",
 core5: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Core5.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/core5/5list');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
 
 

 module.exports = router;


 






