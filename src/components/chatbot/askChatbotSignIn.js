/* eslint global-require: 0 */
import React from "react";
import { ActionSheet, Button, Toast, Icon } from "antd-mobile";
import PropTypes from "prop-types";
import styled from "styled-components";

//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from "react-simple-chatbot";
import Chatpicker from "./chatpicker";
import TabExample from "./TabExample";
import { ThemeProvider } from "styled-components";
import MobxStore from "mobxStore";
import views from "views";
import { Fb } from "firebase-store";
import Key from "./key";
import firebase from "firebase";

//import Generic from './chatbot-message-ui';

// Green
const theme = {
  background: "#F2f2f2",
  background: "#F2f2f2",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#F55869",
  headerFontColor: "#fecea8",
  botBubbleColor: "#e6e6e6",
  botFontColor: "#000",
  userBubbleColor: "#fecea8",
  userFontColor: "#000"
};

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault()
  };
}

const iconList = [
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png"
        alt="icon"
      />
    ),
    title: "发送给朋友"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png"
        alt="icon"
      />
    ),
    title: "新浪微博"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png"
        alt="icon"
      />
    ),
    title: "生活圈"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png"
        alt="icon"
      />
    ),
    title: "微信好友"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png"
        alt="icon"
      />
    ),
    title: "QQ"
  }
  //{ icon: <Icon type={require('./refresh.svg')} />, title: '刷新' },
  //  { icon: <Icon type={require('./link.svg')} />, title: '链接' },
  //  { icon: <Icon type={require('./complaints.svg')} />, title: '投诉' },
];

class AskChatbotSignIn extends React.Component {
  constructor(props) {
    super(props);

    this.displayName = "MrHouse";

    this.state = {
      clicked: "none",
      clicked1: "none",
      clicked2: "none"
    };
    //this.addPropertyForBuy = this.addPropertyForBuy.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.trythis = this.trythis.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }


  componentDidMount() {
    //this.handleEnd = this.handleEnd.bind(this);
    console.log( "window.location.host ", window.location.host );
  }

  trythis = async ({ value, steps }) => {
    return await firebase
      .auth()
      //steps.getUserIdInput.value, steps.getUserPasswordInput.value 
      .signInWithEmailAndPassword(steps.getUserIdInput.value, steps.getUserPasswordInput.value)
      .catch(error => {
        return "getUserSignIn";
      })
    //          console.log( "finish await", post ); 
  }

  toggleSignIn = ({ value, steps }) => {
    //  toggleSignIn = (email, password) => {
    //console.log(`email ${email}, password ${password}`);
    // Sign in with email and pass.
    // [START authwithemail]
    return firebase
      .auth()
      //steps.getUserIdInput.value, steps.getUserPasswordInput.value 
      .signInWithEmailAndPassword(steps.getUserIdInput.value, steps.getUserPasswordInput.value)
      //      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        return "signUp";
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
          //isSign = false;
        } else {
          alert(errorMessage);
          //isSign = false;
        }
        console.log(error);
        console.log(error);
        // [END_EXCLUDE]
        return "signUp";
      });

  };


  // toggleSignIn = (email, password) => {
  //   var isSign = true; // default to true, unless singup error

  //   console.log(`email ${email}, password ${password}`);
  //   // Sign in with email and pass.
  //   // [START authwithemail]
  //   var promise = firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(function(error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // [START_EXCLUDE]
  //       if (errorCode === "auth/wrong-password") {
  //         alert("Wrong password.");
  //         isSign = false;
  //       } else {
  //         alert(errorMessage);
  //         isSign = false;
  //       }
  //       console.log(error);
  //       // [END_EXCLUDE]
  //     });

  //     promise.then(
  //       function(user) {
  //         // Email sent.
  //         return isSign;
  //       },
  //       function(error) {
  //         // An error happened.
  //         return isSign;
  //       }
  //     );

  //   // return isSign;
  // };

  // to be program
  resetPassword = (email) => {
    const auth = firebase.auth();

    const emailAddress = email;

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        console.log("email sent", email)
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  /**
   * Handling xhttp
   * Ask node.js for a token, which send it back to user's email 
   * 
   * @argument email login email
   * @description todo. update to post
   * 
   */
  handleLogin = ( email ) => {
    var xhttp;
    //const email = steps.getUserEmailInput.value;
    const url = `${window.location.protocol}//${window.location.host}/login/${email}`;
    // const url = `${window.location.host}/login/${email}`;
    console.log('askChatbot xhttp url', url);
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  handleEnd = ({ steps, values }) => {
    // var user = firebase.auth().currentUser;

    // if (user != null) {
    //   user.providerData.forEach(function(profile) {
    //     console.log("Sign-in provider: " + profile.providerId);
    //     console.log("  Provider-specific UID: " + profile.uid);
    //     console.log("  Name: " + profile.displayName);
    //     console.log("  Email: " + profile.email);
    //     console.log("  Photo URL: " + profile.photoURL);
    //   });
    // } else {
    //   console.log("user === null");
    // }
    // var xhttp;
    // const email = steps.getUserEmailInput.value;
    // const url = `http://localhost:3000/login/${email}`;
    // xhttp = new XMLHttpRequest();
    // xhttp.open("GET", url, true);
    // xhttp.send();

    //    MobxStore.router.goTo(views.list, { uid : user.uid });
    MobxStore.router.goTo(views.home);
  };

  render() {
    const Welcome = [
      {
        // welcome
        id: "getUserSignIn",
        message: "多謝你再次使用mr.house。",
        trigger: "getEmail"
      },
      {
        id: "getEmail",
        message: "請輸入你的電郵去登入你的帳戶。",
        trigger: "getEmailUserInput"
      },
      {
        // on.FILLED
        id: "getEmailUserInput",
        user: true,
        inputType: "email",
        trigger: "validaEmailUserInput"
      },
      {
        //
        id: "validaEmailUserInput",
        message: ({ previousValue, steps }) => {
          return `「${previousValue} 」是否正確? !`;
        },
        trigger: "validaEmailBoolean"
      },
      {
        id: "validaEmailBoolean",
        options: [
          { value: "true", label: "👍🏻正確", trigger: "followUp" },
          {
            value: "false",
            label: "👎🏻要更改",
            trigger: "update-getEmailUserInput"
          }
        ]
      },
      {
        id: "update-getEmailUserInput",
        update: "getEmailUserInput",
        trigger: "validaEmailUserInput"
      },
      {
        id: "followUp",
        message : ({ previousValue, steps }) => {
          const email = steps.getEmailUserInput.value;
          this.handleLogin( email );
          return `Ok, Mr.house 啱啱發了電郵給你[${email}]，請你打開"歡迎來到Mr House"的電郵並按附屬的一次性連結。`;
        },
        delay: 1000,
        trigger: "examplelink"
      },
      {
        id: "examplelink",
        message: `e.g. ${window.location.protocol}//${window.location.host}/list/xxx `,
        trigger: 'followUp2'
      },
      {
        id: "followUp2",
        message : "連結會直接帶你前往到你的帳戶，你即可翻查你過往的請求有沒有新訊息 。",
        trigger: "followUp3"
      },
      {
        id: "followUp3",
        message : "溫馨提示：mr.house不需要密碼去登入平台。下次登入時，你只需再輸入電郵地址然後一個新的連結會發送給你。",
        trigger: "stop"
      }
    ];
    

    const AboutMrHouse = [];

    const EndOfSteps = [
      {
        // stop
        id: "stop",
        message: "stop",
        delay: 600000,
        end: true
      }
    ];

    // const saleSteps = [];
    // const rentSteps = [];
    // const leaseSteps = [];
    // const redirectSteps = [];

    // Concat mesage into conversation
    let ms1 = Welcome.concat(AboutMrHouse);
    let conversation = ms1.concat(EndOfSteps);

    //  garbage collection
    ms1 = null;
    //ms2 = null;

    // console.log( conversation );
    //console.log( this.addPropertyForBuy );
    // debugger
    return (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Mr.House - Sign In"
            hideSubmitButton="false"
            // hideBotAvatar="false"
            placeholder="請輸入這裏"
            handleEnd={this.handleEnd}
            //cache="true"
            //cacheName="mrhouse"
            //floating="true"
            //          bubbleStyle={{ overflow: "visible", fontSize: "0.3rem" }}
            steps={conversation}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default AskChatbotSignIn;
