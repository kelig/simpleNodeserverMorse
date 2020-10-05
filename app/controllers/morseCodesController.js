const Morsecodes = require("../models/morseCode.js");


// Retrieve all words from the database.
exports.findAll = (req, res) => {
    Morsecodes.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving the data. \r ... --- -- . / . .-. .-. --- .-. / --- -.-. -.-. ..- .-. .-. . -.. / .-- .... .. .-.. . / .-. . - .-. .. . ...- .. -. --. / - .... . / -.. .- - .- .-.-.-"
          });
        else res.send(data);
      });
    };