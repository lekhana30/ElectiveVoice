const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const Civil = mongoose.model('Civil');
 


 router.get('/', (req, res) => {
 res.render("oe6civ/caddOrEdit", {
 viewTitle: "Insert 6th sem oe civil course"
 });
 });
 
 router.post('/', (req, res) => {
 if (req.body._id == '')
 insertRecord(req, res);
 else
 updateRecord(req, res);
 });
 
 
 function insertRecord(req, res) {
 var oe6civ = new Civil();
 oe6civ.CourseTitle = req.body.CourseTitle;
 oe6civ.CourseCode = req.body.CourseCode;
 oe6civ.Credits = req.body.Credits;
 oe6civ.CourseContents = req.body.CourseContents;
 oe6civ.TextBooks = req.body.TextBooks;
 oe6civ.ReferenceBooks = req.body.ReferenceBooks;
 oe6civ.SubjectTeacher = req.body.SubjectTeacher;
 oe6civ.OptedStudents = req.body.OptedStudents;
 oe6civ.PassedStudents = req.body.PassedStudents;
 oe6civ.save((err, doc) => {
 if (!err)
 res.redirect('oe6civ/clist');
 
 else
 console.log('Error during record insertion : ' + err);
 }
 );
 } 
 
 function updateRecord(req, res) {
 Civil.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
 if (!err) { res.redirect('oe6civ/clist'); }
 
 else
 console.log('Error during record update : ' + err);
 }
 );
 } 
 
 
 router.get('/clist', (req, res) => {
 Civil.find((err, docs) => {
 if (!err) {
 res.render("oe6civ/clist", {
 list: docs
 });
 }
 else {
 console.log('Error in retrieving course list :' + err);
 }
 });
 });
 
 
 
 
 router.get('/:id', (req, res) => {
 Civil.findById(req.params.id, (err, doc) => {
 if (!err) {
 res.render("oe6civ/caddOrEdit", {
 viewTitle: "Update 6th sem oe civil Course",
 oe6civ: doc
 });
 }
 });
 });
 
 router.get('/delete/:id', (req, res) => {
 Civil.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {
 res.redirect('/oe6civ/clist');
 }
 else { console.log('Error in course delete :' + err); }
 });
 });
 
 
 

 module.exports = router;
