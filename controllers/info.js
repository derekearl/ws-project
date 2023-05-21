const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => 
{
  const result = await mongodb.getDb().db().collection('info').find();
  result.toArray().then((lists) => 
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => 
{
  const name = new ObjectId(req.params.name);
  const result = await mongodb.getDb().db().collection('info').find({ _name: name });
  result.toArray().then((lists) => 
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

  

module.exports = 
{
  getAll,
  getSingle,
};

