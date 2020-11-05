var studentModule = require('./configuration.js');
//var db = require('../Database/db.js');
var express = require('express');

var studentdata = studentModule.studentdata;
var Web3 = studentModule.web3Module;
var listAccount = Web3.eth.accounts;
var data1 = "";
var temp = "";

exports.addStudentDataGet = function(req,res){
	
	res.render('addStudentData', {page_title:"student details"});
}


exports.addStudData = function(req,res){
	
	res.render('addStudentData', {page_title:"student details"});

	var studentId = req.body.studentId;
	var studentName = req.body.studentName;
	//var std = req.body.std;
	//var division = req.body.division;
	
	var bodyParser = require('body-parser');
	
	console.log(studentId);
	console.log(studentName);
	studentResult.addStudentData(studentId, studentName, std, division,{gas:400000});
};
exports.studentDataTable = function(req,res){

	res.render('studentDataTable', {page_title:"student final grades",data:data1});	
}