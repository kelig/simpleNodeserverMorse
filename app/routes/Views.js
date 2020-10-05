module.exports = app => {
    var path = require('path');
    const express = require("express");

    // it's a static html page, dirname makes path start from this dir "routes"
    app.use("/", express.static(path.join(__dirname, '/../Views')));

    //static html page with a fun easter egg
    app.get('/admin',function(req,res){
        res.sendFile((path.join(__dirname+'/../Views/funtime.html')));
      });
  };
  
