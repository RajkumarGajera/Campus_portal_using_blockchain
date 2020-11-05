//var db = require('../Database/db.js');
var express = require('express');
var Web3 =require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider ("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

var studentGrading = web3.eth.contract([
    {
      "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "string"
          }
        ],
        "name": "setemail",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "string"
          }
        ],
        "name": "setname",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          }
        ],
        "name": "setsem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          }
        ],
        "name": "setSPI",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          }
        ],
        "name": "setyear",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getemail",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getname",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getsem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getSPI",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getyear",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
  ]);


var studentdata = studentrecord.at("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");


exports.studentdata = studentdata;
exports.web3Module = web3;
