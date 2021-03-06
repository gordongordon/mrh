import React from "react";
import ReactDOM from "react-dom";
//import { render } from 'react-dom';
import { MobxRouter, startRouter } from "mobx-router";
//import {FrontPageTabBar} from 'frontPageTabBar';
//import DevTools from 'mobx-react-devtools';
//mobx
import { Provider } from "mobx-react";
//router
import views from "views";

import MobxStore from "mobxStore";
import firebase from "firebase";
import NavigationBar from "navigationBar";
//import { NoticeBar } from 'antd-mobile';
import initReactFastclick from "react-fastclick";
import { Fb } from "firebase-store";
// import ChatBot from 'react-simple-chatbot';
// import {FormSaleChatbot} from 'chatbot/formSaleChatbot'

//import DevTools, { setLogEnabled, setUpdatesEnabled, setGraphEnabled } from 'mobx-react-devtools';
//import FormSaleChatbot from 'chatbot/formSaleChatbot'
//import FormSaleChatbot from './components/chatbot/formSaleChatbot';
import MrHouse from "./components/chatbot/mrHouse";
import { Provider as RebassProvider } from "rebass";
// import { AppContainer } from 'react-hot-loader';
// import App from 'app';
// import { BrowserRouter } from 'react-router-dom';

// setLogEnabled(false); // same as configureDevtool({ logEnabled: true });
// setUpdatesEnabled(false); // same as configureDevtool({ updatesEnabled: false });
// setGraphEnabled(true); // same as configureDevtool({ graphEnabled: false });

startRouter(views, MobxStore);

// For Touch display
initReactFastclick();

/**
 * Testing Passwordless login from node.js
 */
// function loadDoc(url, cFunction) {
//   var xhttp;
//   xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       cFunction(this);
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }

// function myFunction(xhttp) {
//   // console.log( 'myFunction running')
//   const token = xhttp.responseText;
//   console.log("myFunction running token", token);
//   firebase
//     .auth()
//     .signInWithCustomToken(token)
//     .catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
// }

// loadDoc("http://localhost:3000/login/gordon@mr.house", myFunction);

// const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJsU3I2dG1pQjcxV0xRSmhxcmhHbjlORWViUEQyIiwiaWF0IjoxNTE1OTUwODk5LCJleHAiOjE1MTU5NTQ0OTksImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaXNzIjoiZmlyZWJhc2UtYWRtaW5zZGstNXBwOG9AdG9kby1hcHAtYTJiN2MuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay01cHA4b0B0b2RvLWFwcC1hMmI3Yy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSJ9.Rffb_0wVCJMhsN7BJDxBAL0E1Y5gOwEx_TZ3i646r5XAY1ezlAQZhQC-gh4RHAZeCjCF5GAnGd7C78Be9ILOBkYro7zd_Zmj1u-5_JRZ3q9U5TsP0GNqvETFmo9heIgsi8NFZ47YTJwaE_pFFv70ERz5FT08Q8iDBblZebkdrSVCOwgQkJtFYj0CEb_LYfR5L8uSOhu2sPMez8TLeCqy4PyiEl32kyJ-qRPfM7bwkrT0lEAiVJ21Kd7JLIY3c69gxhXPref_OW4rOxWhh10t-T6KX4dhCkFQf4BG7DtEDxg3HhltdxXwNskzM-N6ClPokM74BENHh-yGtCVALD74cw';
// firebase.auth().signInWithCustomToken(token).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;
// }
//
// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }
//
// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }
//
// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }
//
// function preventZoom(e) {
//   var t2 = e.timeStamp;
//   var t1 = e.currentTarget.dataset.lastTouch || t2;
//   var dt = t2 - t1;
//   var fingers = e.touches.length;
//   e.currentTarget.dataset.lastTouch = t2;
//
//   if (!dt || dt > 500 || fingers > 1) return; // not double-tap
//
//   e.preventDefault();
//   e.target.click();
// }
//
// //preventZoom();
// //disableScroll();

firebase.auth().onAuthStateChanged(user => {
  console.log("onAuthStateChanged");
  // update currentUser login or not
  MobxStore.app.user = firebase.auth().currentUser;
  // MobxStore.app.user = true;
  // User is signed in.

  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

    //var uid = user.uid;

    console.log("user signed", user);
    // Redirect to member page!
    //MobxStore.app.startLogin();
    //Fb.startLogin();
    MobxStore.app.uid = user.uid;
    if (isAnonymous) {
      MobxStore.app.displayName = "anonymous - " + user.displayName;
      MobxStore.app.email = "anonymous";
      MobxStore.app.providerId = user.displayName;
    } else {
      MobxStore.app.displayName = user.displayName;
      MobxStore.app.email = user.email;
      // MobxStore.app.providerId = user.providerData[0].providerId;
      // Assign title bar heading
      MobxStore.app.providerId = user.displayName;

      // user.emailVerified.
    }
    //MobxStore.app.setTitle( user.displayName )

    console.log("displayName", user.displayName);

    /**
     * Think over before remove this like, may cause matchedPropertys = null
     * Update firebase reference
     * init userModel Propertys & agentModel Propertys
     */
    Fb.app.updateUid();

    // Once, user login redirect to "List" or "Home"
    console.log("currentPath ", MobxStore.router.currentPath);
    if (MobxStore.router.currentPath === "/") {
      MobxStore.router.goTo(views.list, { uid: user.uid }, MobxStore);
    }
  } else {
    console.log("user haven't sign");
    //MobxStore.app.startLogout();
    Fb.startLogout();

    MobxStore.app.uid = null;
    MobxStore.app.displayName = "none";
    MobxStore.app.email = "none";
    MobxStore.app.providerId = "none";

    MobxStore.router.goTo(views.home, {}, MobxStore);
  }
  console.log("end of onAuthStateChanged");
  // debugger
});

//<MobxRouter/>

// ReactDOM.render(
//  <App/>
//  , document.getElementById('root')
// )

//  ReactDOM.render(
//    <MrHouse />
//    , document.getElementById('root')
//  )

ReactDOM.render(
  <Provider store={MobxStore}>
    <div>
      <NavigationBar />
      <MobxRouter />
    </div>
  </Provider>,
  document.getElementById("root")
);

// <Provider store={MobxStore}>
//   <div>
//     <NavigationBar/>
//     <MobxRouter/>
//   </div>
// </Provider>, document.getElementById('root')

// ReactDOM.render(
// <AppContainer>
//      <App />
// </AppContainer>,
// document.getElementById('root')
// );

// if (module.hot) {
// module.hot.accept('app', () => {
//  const NextApp = require('app').default;

//  ReactDOM.render(
//    <AppContainer>
//      <NextApp />
//    </AppContainer>,
//    document.getElementById('root')
//  );
// });
// }

// render( <AppContainer>
//      <BrowserRouter >
//      <App />
//     </BrowserRouter>
//     </AppContainer>, document.getElementById('root')
// );

// if (module.hot) {
// module.hot.accept('app', () => {
//  const NextApp = require('app').default;

//  render( <AppContainer>
//          <NextApp />
//          </AppContainer>,
//          document.getElementById('root')
//  );
// });
// }

//<button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>
//MobxStore.app.title
