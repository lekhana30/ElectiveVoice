const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Electronics = mongoose.model('Electronics');
 


 router.get('/', (req, res) => {
 res.render("oe6ece/ecaddOrEdit", {
 viewTitle: "Insert 6th sem oe ec course "
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var oe6ece = new Electronics();
 oe6ece.CourseTitle = req.body.CourseTitle;
 oe6ece.CourseCode = req.body.CourseCode;
 oe6ece.Credits = req.body.Credits;
 oe6ece.CourseContents = req.body.CourseContents;
 oe6ece.TextBooks = req.body.TextBooks;
 oe6ece.ReferenceBooks = req.body.ReferenceBooks;
 oe6ece.SubjectTeacher = req.body.SubjectTeacher;
 oe6ece.OptedStudents = req.body.OptedStudents;
 oe6ece.PassedStudents = req.body.PassedStudents;
 oe6ece.save((err, doc) => {
 if (!err)
 res.redirect('oe6ece/eclist');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Electronics.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('oe6ece/eclist'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/eclist', (req, res) => {
 Electronics.find((err, docs) => {
 if (!err) {
 res.render("oe6ece/eclist", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Electronics.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("oe6ece/ecaddOrEdit", {
 viewTitle: "Update 6th sem oe ec Course",
 oe6ece: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Electronics.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/oe6ece/eclist');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
 
 

 module.exports = router;


 





