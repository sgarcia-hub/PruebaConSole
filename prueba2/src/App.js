import React from "react";
import "./App.css";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

function App() {
  const [ccard, setCcard] = React.useState("");
  const [ach, setAch] = React.useState("");

  var CryptoJS = require("crypto-js");

  const SubmitsEncry = () => {
    if (ccard.length == 0 && ach.length == 0) {
      console.log("Vacio");
    }

    setCcard([(ccard = CryptoJS.encrypt())]);
  };

  return (
    <>
      <h1>Enter Credit Card Or ACH information</h1>
      <label for="Ccard">Enter Credit Card</label>
      <input type="text" id="Ccard" onChange={(e) => setCcard()}></input>{" "}
      <br></br>
      <label for="ACH">Enter ACH information</label>
      <input type="text" id="ACH" onChange={(e) => setAch()}></input> <br></br>
      <button onClick={SubmitsEncry}>Accept</button>
    </>
  );
}

export default App;

// function SubmitsEncry() {
//   //console.log("Encrypting...");

//   var CryptoJS = require("crypto-js");

//   const encrypted = CryptoJS.encrypt();
//   console.log(encrypted);
// }
