var express = require("express");
var compression = require("compression");
const path = require('path');
//var cors = require('cors');
//var express = require('express')
//var app = express()

/**
 * NodeMailer Setting
 */
var nodemailer = require('nodemailer');

// let smtpConfig = {
//   host: 's2-hongkong.accountservergroup.com',
//   port: 465,
//   secure: false, // upgrade later with STARTTLS
//   auth: {
//       user: 'webmaster@mr.house',
//       pass: 'mr.house.96181448'
//   }
// };

/**
 * 
 */
const poolConfig = {
  pool: true,
  host: 's2-hongkong.accountservergroup.com',
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
      user: 'webmaster@mr.house',
      pass: 'mr.house.96181448'
  },
  dsn: {
    id: 'Passwordless Login attemp',
    return: 'headers',
    notify: 'success',
    recipient: 'info@mr.house'
}  
};

let transporter = nodemailer.createTransport(poolConfig)

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
       console.log(error);
  } else {
       console.log('Server is ready to take our messages');
  }
});


/**
 * Send Token 
 */
function nodeSendMail(email, token, hostname, displayName, protocal) {

  const url = `${protocal}://${hostname}/list/${token}`;
  /**
   * Message Editing
   */
  const mailOptions = {
    from: 'webmaster@mr.house', // sender address
    to: email, // list of receivers
    subject: 'Mr.House Passwordless Login', // Subject line
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

  /**
   * Send Email
   */
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });

}

/**
 * 
 */

//# Include the SendinBlue library\
// var SibApiV3Sdk = require('sib-api-v3-sdk');
// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// //# Instantiate the client\
// var apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';

// var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

// //# Define the campaign settings\
// emailCampaigns = {
//     name: 'Campaign sent via the API',
//     subject: 'Mr.House Passwordless Testing',
//     sender: {name: 'Gordon Wong', email: 'webmaster@mr.house'},
//     type: 'classic',

//     //# Content that will be sent\
//     htmlContent: 'Congratulations! You successfully sent this example campaign via the SendinBlue API.',

//     //# Select the recipients\
//     recipients: {listIds: [2, 7]},

//   //  # Schedule the sending in one hour\
//     scheduledAt: '2018-01-01 00:00:01'
// }
// //# Make the call to the client\
// apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
//   console.log('API called successfully. Returned data: ' + data);
// }, function(error) {
//   console.error(error);
// });


// Create our app
var app = express();

/**
 * Firebase Admin SDK 
 * initialize
 */
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-app-a2b7c.firebaseio.com"
});

/**
 * Compression all messages
 */
app.use(
  compression({
    threshold: 10240,
    filter: function () {
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


/**
 * Stand setting expressjs
 */
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
<<<<<<< HEAD
function sendToken(email, token, hostname , displayName, protocal) {
  // const sgMail = require("@sendgrid/mail");
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const url = `${protocal}://${hostname}/list/${token}`;

  console.log( 'sendToken : url', url );
  console.log( '\n');
  
=======
function sendToken(email, token, hostname, displayName, protocal) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const url = `${protocal}://${hostname}/list/${token}`;

  console.log('sendToken : url', url);
>>>>>>> 36f7f588046ee7ccd1d7579be2f0f94503ef81ed
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

app.get("/login/:email", function (req, res) {
  console.log("login ");
  const email = req.params.email;
  console.log(`email ${email} hostname ${req.hostname}`);

  // const uid = "lypMuS2sdpVGoripKanyoOn0zBe2";

  admin.auth().getUserByEmail(email)
    .then(function (userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully fetched user data:", userRecord.toJSON());
      const user = userRecord.toJSON();
      console.log(`user.uid ${user.uid} user.displayName ${user.displayName}`);
      /**
       * Send login link to user
       */
      admin
        .auth()
        .createCustomToken(user.uid)
        .then(function (customToken) {
          // Send token back to client
//          sendToken(email, customToken, req.header('host'), user.displayName, req.protocol);
          nodeSendMail(email, customToken, req.header('host'), user.displayName, req.protocol);
          res.send(customToken);
          console.log(customToken);
        })
        .catch(function (error) {
          console.log("Error creating custom token:", error);
        });
    })
    .catch(function (error) {
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

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});


//app.use(express.static('public'));

app.listen(PORT, function () {
  console.log("Express server is up on port " + PORT);
});

// var express = require('express');
// var app = express();
//
// app.use(express.static(__dirname + '/public'));
//
// app.listen(process.env.PORT || 3000);
