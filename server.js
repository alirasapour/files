'use strict';
var figlet = require("figlet");


figlet("Docker  Container", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  console.log(
    "\n\t [+] Created By : Ali Rasapour \n\t [+] https://www.alirasapour.ir \n\n\n"
  );
});


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
