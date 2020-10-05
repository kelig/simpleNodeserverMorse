module.exports = app => {
    const MorseCodes = require("../controllers/morseCodesController.js");
  
    // Retrieve all morsecodes
    app.get("/morsecodes", MorseCodes.findAll);
  };