var Kavenegar = require("kavenegar");
var api = Kavenegar.KavenegarApi({
  apikey:
    "3234457462325A3057636C67467641334C2F377A386A7069586A694F4F6548626C33725059414D38584C673D"
});
api.Send(
  {
    message: "Docker is Running ....  |||  Ali Rasapour",
    sender: "10004346",
    receptor: "09199901495"
  },
  function(response, status) {
    console.log(response);
    console.log(status);
  }
);
