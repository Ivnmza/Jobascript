var request = require('supertest');
var express = require('express');
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var rewire = require('rewire');
// var app = express();
var companyHandler = rewire('../../server/company');
var db = require('../../server/db');

request = request('http://localhost:8080');

xdescribe('base root tests', function() {
  it ('should respond with a 200 response code', function(done) {
    request.get('/')
    .set('accept', 'text/html')
    .expect(200)
    .end(function(err, res) {
      if (err) {
        return done(err);
      }
      done();
    });
  });
});


xdescribe('/company Route Tests',  function() {
  describe('Testing addCompany Method..',   function() {
    describe('Requests with incomplete parameters:', function() {
      it('should send 500 status code if request is missing ::name:: property',  function() {

      });
      it('should send 500 status code if request is missing ::displayName:: property', function() {

      });
      it('should send 500 status code if request is missing ::domain:: property',  function() {

      });
      it('should send 500 status code if request is missing ::logo:: property',  function(){

      });
    });
    describe('Sending a valid addCompany request..',  function() {
      it('should send 200 status code', function() {

      });
      it('should respond with a stringified company Id',  function () {

      });
    });
  });
  describe('Testing removeCompany Method..',  function () {
    describe('requests with incomplete parameters', function () {
      it('should send 500 status code', function () {

      });
    });
    describe('sending a valid removeCompany request', function () {
      it('should respond with a 200 status code', function () {

      });
    });
    describe('sending a valid removeCompany request when company to be removed not present', function () {
      it('should respond with a 404 status code', function () {

      });
    });
  });
  describe('Testing getCompanies Method..', function () {
    describe('requests with incomplete parameters', function () {
      it('should send 500 status code if request is missing query parameters', function () {

      });
    });
    describe('sending a valid getCompanies request', function () {
      it('should respond with 200 status code', function () {

      });
      it('should respond with companies', function () {

      });
    });
  });
  describe('Testing getCompany Method..', function () {
    describe('requests with incomplete parameters', function () {
      it('should respond with a 400 status code if query type is undefined (neither id nor domain)', function () {

      });
    });
    describe('sending a valid getCompany request', function () {
      it('should respond with company, sending a 200 status code', function () {

      });
      it('should respond with a 404 status code if no company matching id or domain is present', function () {

      });
    });
    describe('sending an invalid getCompany request', function () {
      it('should respond with a 500 status code if ...', function () {

      });
    });
  });
});
























//   it ('should respond with a 200 status code to show that the company was added', function(done) {
//     var data =  {
//       id: 1,
//       name: "google",
//       created: "2016-04-23T00:22:40.510Z"
//     };
//     companyHandler.__set__("db", {getCompany: function(args) {
//       expect(args.name).to.equal('google');
//       var returnPromised = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//           resolve(data);
//         }, 0);
//       });
//     }
//   });
//     request.get('/company')
//     .set('accept', 'application/json')
//     .query({name: 'google'})
//     .end(function(err, res) {
//       if (err) {
//         throw err;
//       }
//       expect(res.body).to.deep.equal(data);
//       done();
//     });
//   });

//   it ('should respond with a 200 after a company has been successfully deleted', function(done) {
//     request.delete('company')
//     .delete('/company')
//     .set('accept', 'application/json')
//     .send({id: 2})
//     // .expect(200)
//     .expect(function(res) {
//       console.log(res);
//     })
//     .end(function(err, res) {
//       if (err) {
//         throw err;
//       }
//       done();
//     });
//   });
// });
