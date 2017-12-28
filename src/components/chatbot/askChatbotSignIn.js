/* eslint global-require: 0 */
import React from "react";
import { ActionSheet, Button, Toast, Icon } from "antd-mobile";
import PropTypes from "prop-types";
import styled from 'styled-components';

//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from "react-simple-chatbot";
import Chatpicker from "./chatpicker";
import TabExample from "./TabExample";
import { ThemeProvider } from "styled-components";
import MobxStore from "mobxStore";
import views from "views";
import { Fb } from "firebase-store";
import Key from './key';
import firebase from 'firebase';

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
    this.toggleSignIn  = this.toggleSignIn.bind( this );
    this.handleEnd = this.handleEnd.bind( this );
    
  }

  showActionSheet = () => {
    const BUTTONS = ["操作一", "操作二", "操作三", "删除", "取消"];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        // title: '标题',
        message: "我是描述我是描述",
        maskClosable: true,
        "data-seed": "logId",
        wrapProps
      },
      buttonIndex => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }
    );
  };
  showShareActionSheet = () => {
    const icons = [...iconList];
    icons.length = 4;
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: icons,
        // title: '标题',
        message: "我是描述我是描述",
        className: "my-action-sheet"
      },
      buttonIndex => {
        this.setState({
          clicked1: buttonIndex > -1 ? icons[buttonIndex].title : "cancel"
        });
        // also support Promise
        return new Promise(resolve => {
          Toast.info("1000ms 后关闭");
          setTimeout(resolve, 1000);
        });
      }
    );
  };
  showShareActionSheetMulpitleLine = () => {
    const icons = [[...iconList], [iconList[5], iconList[6], iconList[7]]];
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: icons,
        // title: '标题',
        message: "我是描述我是描述",
        className: "my-action-sheet"
      },
      (buttonIndex, rowIndex) => {
        this.setState({
          clicked2:
            buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : "cancel"
        });
      }
    );
  };

  componentDidMount() {
    //this.handleEnd = this.handleEnd.bind(this);
  }


  toggleSignIn = ( email, password )  => {

        var isSign = true; // default to true, unless singup error 

        console.log( `email ${email}, password ${password}`)
            // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
              isSign = false;
            } else {
              alert(errorMessage);
              isSign = false;
            }
            console.log(error);
            // [END_EXCLUDE]
        });

        return isSign;
    
  }

  handleEnd = ({ steps, values }) => {

    MobxStore.router.goTo(views.list );

  }  

  render() {

    const Welcome = [
      {
        // welcome
        id: "getUserId",
        message: "please sign with your email id",
        trigger: "getUserIdInput" 
      },
      {
        // on.FILLED
        id: "getUserIdInput",
        user: true,
        inputType: "text",
        trigger: "getUserPassword"
      },
      { id: "getUserPassword",
        message: "please input your password!",
        trigger: "getUserPasswordInput"
      },
      {
        // on.FILLED
        id: "getUserPasswordInput",
        user: true,
        inputType: "password",
        trigger: "signUp"
      },
      {
        id: "signUp",
        message  : ( {previouis, steps } ) => {
          if ( this.toggleSignIn( steps.getUserIdInput.value, steps.getUserPasswordInput.value) )
          {   
             return "Successful signup";
          } else {
             return "invalid user id or password, please try again";
          }
        },
        trigger: "stop"
      }
    ];


    const AboutMrHouse = [
    ];
   
   const EndOfSteps = [   
      {
        // stop
        id: "stop",
        message: "stop",
        end: true
      }
    ];

    // const saleSteps = [];
    // const rentSteps = [];
    // const leaseSteps = [];
    // const redirectSteps = [];

    // Concat mesage into conversation
    let ms1 = Welcome.concat( AboutMrHouse );
    let conversation = ms1.concat( EndOfSteps );

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
          steps={
            conversation
          }
        />
      </ThemeProvider>
      </div>
    );
  }
}

export default AskChatbotSignIn;

