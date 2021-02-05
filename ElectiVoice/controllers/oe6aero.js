const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Aero = mongoose.model('Aero');
 


 router.get('/', (req, res) => {
 res.render("oe6aero/aaddOrEdit", {
 viewTitle: "Insert 6th sem oe aero course"
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var oe6aero = new Aero();
 oe6aero.CourseTitle = req.body.CourseTitle;
 oe6aero.CourseCode = req.body.CourseCode;
 oe6aero.Credits = req.body.Credits;
 oe6aero.CourseContents = req.body.CourseContents;
 oe6aero.TextBooks = req.body.TextBooks;
 oe6aero.ReferenceBooks = req.body.ReferenceBooks;
 oe6aero.oe6aeroSubjectTeacher = req.body.SubjectTeacher;
 oe6aero.OptedStudents = req.body.OptedStudents;
 oe6aero.PassedStudents = req.body.PassedStudents;
 oe6aero.save((err, doc) => {
 if (!err)
 res.redirect('oe6aero/alist');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Aero.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('oe6aero/alist'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/alist', (req, res) => {
 Aero.find((err, docs) => {
 if (!err) {
 res.render("oe6aero/alist", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Aero.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("oe6aero/aaddOrEdit", {
 viewTitle: "Update 6th sem oe aero Course",
 oe6aero: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Aero.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/oe6aero/alist');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
 
 

 module.exports = router;


 

