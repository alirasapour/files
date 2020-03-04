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

var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: '3234457462325A3057636C67467641334C2F377A386A7069586A694F4F6548626C33725059414D38584C673D'
});
api.Send({
        message: "پروژه با موفقیت بر روی سرور قرار گرفت",
        sender: "10004346",
        receptor: "09199901495"
    },
    function(response, status) {
        console.log(response);
        console.log(status);
    });



const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Ali Rasapour'))

app.listen(port, () => console.log(`\n\nExample app listening on port ${port}! \n\n`))
