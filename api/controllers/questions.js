const Questions = require('../models/questions')

module.exports = {
  create:createRecord,
  read:readRecord,
  update:updateRecord,
  delete:deleteRecord
}

function createRecord(req, res, next){
  var record = new Questions({
    title:req.body.title
  })

  record.save()
  res.status(200).json(record)
}

function readRecord(req, res, next){
  Questions.find({},(err, record) => {
    if(record.length >= 1)
      res.status(200).json(record)
    else
      res.status(204).json({error:"Cannot read any record"})
  })
}

function updateRecord(req, res, next){
  Questions.findOne({
    _id:req.params.id
  },(err, record) => {
    if(err) throw err
    if(record){
      record.title = req.body.title

      record.save((err)=> {
        if(err) throw err
        res.status(200).json(record)
      })
    } else {
      res.status(204).json({error: "Cannot find your record"})
    }
  })
}

function deleteRecord(req, res, next){
  Questions.findOne({
    _id:req.params.id
  },(err, record) => {
    if(err) throw err
    if(record){
      record.remove((err)=> {
        if(err) throw err
        res.status(200).json(record)
      })
    } else {
      res.status(204).json({error: "Cannot find your record"})
    }
  })
}
