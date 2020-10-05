module.exports = app => {
    const words = require("../controllers/wordsController.js");
  
    // Retrieve all words from file
    app.get("/words", words.findAll);
    //post to file {word:""}
    app.post('/words', words.WordCreate);
  };