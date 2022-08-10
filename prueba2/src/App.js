import "./App.css";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

function App() {
  return (
    <>
      <h1>Enter Credit Card Or ACH information</h1>
      <label for="Ccard">Enter Credit Card</label>
      <input type="text" id="Ccard"></input> <br></br>
      <label for="ACH">Enter ACH information</label>
      <input type="text" id="ACH"></input> <br></br>
      <button onClick={SubmitsEncry}>Accept</button>
    </>
  );
}

export default App;

function SubmitsEncry() {
  console.log("Encrypting...");

  var CryptoJS = require("crypto-js");

  var data = "Hello World!";
  var _secretKey = "some-super-secret-key";

  // var ncryptObject = new ncrypt(_secretKey);

  // // encrypting super sensitive data here
  // var encryptedData = ncryptObject.encrypt(data);
  // console.log("Encryption process...");
  // console.log("Plain Text    : " + data);
  // console.log("Cipher Text   : " + encryptedData);

  // // decrypted super encrypted string here
  // var decryptedData = ncryptObject.decrypt(encryptedData);
  // console.log("... and then decryption...");
  // console.log("Decipher Text : " + decryptedData);
  // console.log("...done.");
}
