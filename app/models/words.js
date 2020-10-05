const fs = require("fs");
const xmorse = require('xmorse');

const Word = function (words) {
  this.words = words;
};

//not saved in json but per line so read per line and split on newline,
//returns jsonobject {word:morse}  1 time per word that exist 
Word.getAll = (res, result) => {
  //callback omdat het moet met een filereader
  fs.readFile(__dirname + '/../Files/Morsecodes.txt', 'utf8', function (err, data) {
    //error
    if (err) {
      console.log("error: ", err);
      result(res,null, err);
      return;
    }
    //result
    let obj = {};
    //check file for data
    if (data.length != 0) {
      let splitted = data.toString().split("\n");
      //filter empty lines
      splitted = splitted.filter(Boolean)
      //split objects on key : word and 1 word will have the last value
      for (let i = 0; i < splitted.length; i++) {
        let splitLine = splitted[i].split(":");
        obj[splitLine[0]] = splitLine[1].trim().replace(new RegExp("/", "g"), ' ');
      }
      //sort object
      obj = sortObject(obj);
      //check for bloating file
      deleteFile(obj);
    } else {
      // give them a chance to be the first 
      obj = { "No new words available": xmorse.encode("No new words available") }
    }
  //return result
    result(res,null, obj);
  });
};



//save for new word
Word.Save = (word, result) => {
  //line creation
  let morse = xmorse.encode(word);
  let line = "\n" + word + ":" + morse;
  //filewrite
  fs.appendFile(__dirname + '/../Files/Morsecodes.txt', line, 'utf8', function (err, data) {
    //error
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    //result returns added line
    result(null, line);
  });
};


function deleteFile(obj) {

  //if more than 30 words in list, reset list  
  if (Object.keys(obj).length >= 30) {
    //the w flag makes sure the file is created if not existing, and if the file exists it overwrites it with a new file, overriding its content.
    fs.closeSync(fs.openSync(__dirname + '/../Files/Morsecodes.txt', 'w'));
  }

}

//sorting function for json object 
function sortObject(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}





module.exports = Word;