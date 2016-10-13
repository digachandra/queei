'use strict'

var chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect

chai.use(chaiHttp)

describe('Test API Answer', () => {
  var id
  it(': create record', function(done){
    chai.request('http://localhost:8000')
        .post('/answers')
        .send({
          title: 'Title 1'
        })
        .end(function(err, res){
          expect(res).to.have.status(200)
          id = res.body._id;
          done()
        })
  })
  it(': read data', function(done){
    chai.request('http://localhost:8000')
        .get('/answers')
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': update record', function(done){
    chai.request('http://localhost:8000')
        .put(`/answers/${id}`)
        .send({
          title: 'Title 1 New'
        })
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': delete record', function(done){
    chai.request('http://localhost:8000')
        .delete(`/answers/${id}`)
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
})
