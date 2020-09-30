const express = require("express");

const app = express();

app.use(() => {
  console.log("hello server...");
  console.log("hello cuan");
  console.log("hello bosque");
});

app.listen(4000);
