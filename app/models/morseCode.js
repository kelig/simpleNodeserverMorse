const sql = require("./db.js");


//model
const MorseCode = function(letter) {
    this.id = letter.id;
    this.Letter = letter.letter;
    this.Morse = letter.morse;
  };


/* MorseCode will look like this in as object in array
id,  
letter,
Morsecode
*/


MorseCode.getAll = result => {
  //query
    sql.query("SELECT * FROM MorseCodes", (err, res) => {
      //error
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      //result
      //console.log("words: ", res);
      result(null, res);
    });
  };

  module.exports = MorseCode;