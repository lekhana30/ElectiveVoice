const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Electrical = mongoose.model('Electrical');
 


 router.get('/', (req, res) => {
 res.render("oe6electric/eleaddOrEdit", {
 viewTitle: "Insert 6th sem oe electric course "
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var oe6electric = new Electrical();
 oe6electric.CourseTitle = req.body.CourseTitle;
 oe6electric.CourseCode = req.body.CourseCode;
 oe6electric.Credits = req.body.Credits;
 oe6electric.CourseContents = req.body.CourseContents;
 oe6electric.TextBooks = req.body.TextBooks;
 oe6electric.ReferenceBooks = req.body.ReferenceBooks;
 oe6electric.SubjectTeacher = req.body.SubjectTeacher;
 oe6electric.OptedStudents = req.body.OptedStudents;
 oe6electric.PassedStudents = req.body.PassedStudents;
 oe6electric.save((err, doc) => {
 if (!err)
 res.redirect('oe6electric/elelist');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Electrical.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('oe6electric/elelist'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/elelist', (req, res) => {
 Electrical.find((err, docs) => {
 if (!err) {
 res.render("oe6electric/elelist", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Electrical.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("oe6electric/eleaddOrEdit", {
 viewTitle: "Update 6th sem oe electric Course",
 oe6electric: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Electrical.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/oe6electric/elelist');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
 
 

 module.exports = router;


 


