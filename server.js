var express = require("express");
var compression = require("compression");
//var cors = require('cors');
//var express = require('express')
//var app = express()

// Create our app
var app = express();

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-app-a2b7c.firebaseio.com"
});

/**
 * SendGrid
 * Testing
 */
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
function sendToken(email, token) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  var url = "http://localhost:3000/list/" + token;

  const msg = {
    to: email,
    from: "webmaster@mr.house",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong>
             Click the link below to login 
             <a href="${url}"> ${url} </a>
           </strong>`

  };
  sgMail.send(msg);
}

// For compression
app.use(
  compression({
    threshold: 10240,
    filter: function() {
      return true;
    },
    level: 9
  })
);


//app.use(cors())

// app.use(compression({filter: shouldCompress}))
// Gordon
// function shouldCompress (req, res) {
//    if (req.headers['x-no-compression']) {
//        // don't compress responses with this request header
//        return false
//    }
//
//   // fallback to standard filter function
//    return compression.filter(req, res)
//  }
app.use(express.static(__dirname + "/public"));
//app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

app.get("/login/:email", function(req, res) {
  console.log("login ");
  var email = req.params.email;
  console.log("email", email);

  var uid = "lypMuS2sdpVGoripKanyoOn0zBe2";

  admin
    .auth()
    .createCustomToken(uid)
    .then(function(customToken) {
      // Send token back to client
      sendToken( email, customToken );
      res.send(customToken);
      console.log(customToken);
    })
    .catch(function(error) {
      console.log("Error creating custom token:", error);
    });
});

app.use(function(req, res, next) {
  if (req.headers["x-forwarded-proto"] === "https") {
    res.redirect("http://" + req.hostname + req.url);
    res.status(200).send("doing ok");
  } else {
    next();
    res.status(200).send("doing ok");
  }
});

//app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("Express server is up on port " + PORT);
});

// var express = require('express');
// var app = express();
//
// app.use(express.static(__dirname + '/public'));
//
// app.listen(process.env.PORT || 3000);
