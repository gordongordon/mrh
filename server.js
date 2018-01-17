var express = require("express");
var compression = require("compression");
const path = require('path');
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
//app.use(express.static(__dirname + "/public"));
//app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/public')));
const PORT = process.env.PORT || 3000;

// app.get('/list/:token', function(req, res, next){

//    res.redirect("http://localhost:3000/list/dsaf"  );
//   // res.sendFile(__dirname + '/');
// });


/**
 * SendGrid
 * Testing
 */
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
function sendToken(email, token, hostname , displayName, protocal) {
  // const sgMail = require("@sendgrid/mail");
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const url = `${protocal}://${hostname}/list/${token}`;

  console.log( 'sendToken : url', url );
  console.log( '\n');
  
  const msg = {
    to: email,
    from: "webmaster@mr.house",
    subject: "Mr.House - Passwordless login Now!",
    text: `hi, ${displayName}
    Welcome to Mr.House!
    Click and confirm that you want to sign in to Mr.House. This link will expire in five minutes:
    ${url}
    If you are having any issues with your account, please don't hesitate to contact us by replying to this mail.
    
    Thanks!
    Mr.House`,
    html: `hi, ${displayName} 
    <br />
    Welcome to Mr.House!
    <br />
    <p>
    <strong>
    Click and confirm that you want to sign in to Mr.House This link will expire in five minutes: <br>
    <a href="${url}"> ${url} </a>
    </strong>
    </p>
    <br />
    <Small>You’re receiving this email because you have an account in mrhouse. If you are not sure why you’re receiving this, please contact us. </Small>`
  };

  console.log( msg );
  // sgMail.send(msg);
}

app.get("/login/:email", function(req, res) {
  console.log("login ");
  const email = req.params.email;
  console.log( `email ${email} hostname ${req.hostname}` );

  // const uid = "lypMuS2sdpVGoripKanyoOn0zBe2";

  admin.auth().getUserByEmail(email)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
    const user = userRecord.toJSON();
    console.log( `user.uid ${user.uid} user.displayName ${user.displayName}` );
    /**
     * Send login link to user
     */
    admin
    .auth()
    .createCustomToken(user.uid)
    .then(function(customToken) {
      // Send token back to client
      sendToken( email, customToken, req.header('host'), user.displayName, req.protocol);
      res.send(customToken);
      console.log(customToken);
    })
    .catch(function(error) {
      console.log("Error creating custom token:", error);
    });
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });


});



// app.use(function(req, res, next) {
//   if (req.headers["x-forwarded-proto"] === "https") {
//     res.redirect("http://" + req.hostname + req.url);
//     //res.redirect( req.originalUrl );
//     res.status(200).send("doing ok");
//   } else {
//     next();
//     res.status(200).send("doing ok");
//   }
// });

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
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
