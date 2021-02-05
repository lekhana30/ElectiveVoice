const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Mechanical = mongoose.model('Mechanical');
 


 router.get('/', (req, res) => {
 res.render("oe6mech/maddOrEdit", {
 viewTitle: "Insert 6th sem oe mechanical course"
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var oe6mech = new Mechanical();
 oe6mech.CourseTitle = req.body.CourseTitle;
 oe6mech.CourseCode = req.body.CourseCode;
 oe6mech.Credits = req.body.Credits;
 oe6mech.CourseContents = req.body.CourseContents;
 oe6mech.TextBooks = req.body.TextBooks;
 oe6mech.ReferenceBooks = req.body.ReferenceBooks;
 oe6mech.SubjectTeacher = req.body.SubjectTeacher;
 oe6mech.OptedStudents = req.body.OptedStudents;
 oe6mech.PassedStudents = req.body.PassedStudents;
oe6mech.save((err, doc) => {
 if (!err)
 res.redirect('oe6mech/mlist');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Mechanical.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('oe6mech/mlist'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/mlist', (req, res) => {
 Mechanical.find((err, docs) => {
 if (!err) {
 res.render("oe6mech/mlist", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Mechanical.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("oe6mech/maddOrEdit", {
 viewTitle: "Update 6th sem oe mechanical Course",
 oe6mech: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Mechanical.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/oe6mech/mlist');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
 
 

 module.exports = router;
