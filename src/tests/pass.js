"use strict";

const enp = require("easy-no-password")("YOUR_LONG_SECURE_ENCRYPTION_SECRET");

// Generating a token
var userId = 'gordon';
var newtoken;

enp.createToken(userId, (err, token) => {
    var that = this;
    if (err) return console.error(err);

    console.log( 'token', token);

    setTimeout( () => {
        this.newtoken = token;
        console.log( 'newtoken , token', this.newtoken , token);
  
    }, 1000)
    // Send token to the user, using email, SMS, etc.
});


setTimeout( () => {
// // Checking a token
var token = this.newtoken;
console.log( 'after token', token);
// var userId = 'gordon';
enp.isValid(token, userId, (err, isValid) => {
 	if (isValid) {
 		console.log("User is real!", userId);
 	} else {
 		console.log("Someone is trying to hack into user's account!", userId);
 	}
});
}, 5000)

