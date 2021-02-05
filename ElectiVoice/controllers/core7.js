const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Core7 = mongoose.model('Core7');
 


 router.get('/', (req, res) => {
 res.render("core7/7addOrEdit", {
 viewTitle: "Insert 7th sem ce course"
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var core7 = new Core7();
 core7.CourseTitle = req.body.CourseTitle;
 core7.CourseCode = req.body.CourseCode;
 core7.Credits = req.body.Credits;
 core7.CourseContents = req.body.CourseContents;
 core7.TextBooks = req.body.TextBooks;
 core7.ReferenceBooks = req.body.ReferenceBooks;
 core7.SubjectTeacher = req.body.SubjectTeacher;
 core7.OptedStudents = req.body.OptedStudents;
 core7.PassedStudents = req.body.PassedStudents;
 core7.save((err, doc) => {
 if (!err)
 res.redirect('core7/7list');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Core7.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('core7/7list'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/7list', (req, res) => {
 Core7.find((err, docs) => {
 if (!err) {
 res.render("core7/7list", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Core7.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("core7/7addOrEdit", {
 viewTitle: "Update 7th sem ce Course",
 core7: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Core7.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/core7/7list');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
module.exports = router;



 


