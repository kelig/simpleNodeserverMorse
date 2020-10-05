const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//add word routes to api
require("./app/routes/words.js")(app);

//add morsecodes to api
require("./app/routes/Morsecodes.js")(app);

// add views
require("./app/routes/Views.js")(app);


// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});