const Words = require("../models/words.js");

const ERROR="Some error occurred please try again ";

const responseHandler = (res,err, data)=>{
    if (err)
      res.status(500).send({
        message:
          err.message || ERROR
      });
    else res.send(data);
  }


// Retrieve all words from the File.
exports.findAll = (req, res) => {
    Words.getAll((err, data) => {
      responseHandler(res,err, data);
    });
    };


// post handler 
exports.WordCreate = function(req, res) {
  let word = req.body.word;
  Words.Save(word, (err, data) => {
    responseHandler(res,err, data);
  });
};