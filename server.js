'use strict';
var figlet = require("figlet");
const { exec } = require("child_process");

exec("jcal", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`${stdout}`);
});
figlet("\nDocker  Container", function(err, data) {
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
const port = 80

app.get('/', (req, res) => res.send('Ali Rasapour'))

app.listen(port, () => console.log(`\n\nExample app listening on port ${port}! \n\n`))
