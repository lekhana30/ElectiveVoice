const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Core8 = mongoose.model('Core8');
 


 router.get('/', (req, res) => {
 res.render("core8/8addOrEdit", {
 viewTitle: "Insert 8th sem ce course"
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var core8 = new Core8();
 core8.CourseTitle = req.body.CourseTitle;
 core8.CourseCode = req.body.CourseCode;
 core8.Credits = req.body.Credits;
 core8.CourseContents = req.body.CourseContents;
 core8.TextBooks = req.body.TextBooks;
 core8.ReferenceBooks = req.body.ReferenceBooks;
 core8.SubjectTeacher = req.body.SubjectTeacher;
 core8.OptedStudents = req.body.OptedStudents;
 core8.PassedStudents = req.body.PassedStudents;
 core8.save((err, doc) => {
 if (!err)
 res.redirect('core8/8list');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Core8.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('core8/8list'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/8list', (req, res) => {
 Core8.find((err, docs) => {
 if (!err) {
 res.render("core8/8list", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Core8.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("core8/8addOrEdit", {
 viewTitle: "Update 8th sem ce Course",
 core8: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Core8.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/core8/8list');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
module.exports = router;



 


