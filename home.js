// Define
var figlet = require("figlet");
function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
function sleep(n) {
  msleep(n * 1000);
}
//Show Header
figlet("Docker Container", function(err, data) {
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

sleep(3);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of Node.js? ", answer => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
