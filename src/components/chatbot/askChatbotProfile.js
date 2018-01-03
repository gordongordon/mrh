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

class AskChatbotProfile extends React.Component {
  constructor(props) {
    super(props);
    var user = firebase.auth().currentUser;
    this.displayName = user.displayName;

    if ( user.phone != null ) {
        this.phone = user.phone;
    }

    this.state = {
      clicked: "none",
      clicked1: "none",
      clicked2: "none"
    };
    //this.addPropertyForBuy = this.addPropertyForBuy.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  componentDidMount() {
    //this.handleEnd = this.handleEnd.bind(this);
  }

  toggleSignIn = (email, password) => {
    var isSign = true; // default to true, unless singup error

    console.log(`email ${email}, password ${password}`);
    // Sign in with email and pass.
    // [START authwithemail]
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
          isSign = false;
        } else {
          alert(errorMessage);
          isSign = false;
        }
        console.log(error);
        // [END_EXCLUDE]
      });

    return isSign;
  };

  handleEnd = ({ steps, values }) => {
    var user = firebase.auth().currentUser;
    if (user != null) {
      user.updateProfile({
          displayName: steps.getNameInput.value,
        })
        .then(function() {
          // Update successful.
        })
        .catch(function(error) {
          // An error happened.
        });
    }
    MobxStore.router.goTo(views.list);
  };

  render() {



    const Welcome = [
        {
            id: "welcome",
            message: "Ok, 你想 Update profile 的。",
            trigger: "getName"
          },
          {
            id: "getName",
            message: `Your name ${this.displayName} 請問如何稱呼你`,
            trigger: "getNameInput"
          },
          {
            // on.FILLED
            id: "getNameInput",
            user: true,
            inputType: "text",
            trigger: "getPhone"
          },
      // Input Field
      {
        // getXXX
        id: "getPhone",
        message : `Your Phone ${this.phone}, please input`,
        trigger: "getPhoneInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getPhoneInput",
        user: true,
        validator: value => {
          if (isNaN(value)) {
            return "value must be a number";
          } else if (value < 0) {
            return "value must be positive";
          } else if (value > 100000000) {
            return `${value}? Come on!`;
          }

          return true;
        },
        inputType: "number",
        pattern: "[0-9]*",
        trigger: "stop"
      },
        ];

    const AboutMrHouse = [];

    const EndOfSteps = [
      {
        id: "stop",
        message : "Going back to user control panel!",
        trigger: "end",
      },
      {
        // stop
        id: "end",
        message: "stop",
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
            headerTitle="Mr.House - Update Profile"
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

export default AskChatbotProfile;
