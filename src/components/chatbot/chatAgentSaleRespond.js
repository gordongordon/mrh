/* eslint global-require: 0 */
import React from "react";
import { Button, Toast, Icon } from "antd-mobile";
import PropTypes from "prop-types";
//import styled from 'styled-components';

//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot, {Generic} from "react-simple-chatbot";
import Chatpicker from "./chatpicker";
import TabExample from "./TabExample";
import { ThemeProvider } from "styled-components";
import MobxStore from "mobxStore";
import views from "views";

import PartitionPicker from "./partitionPicker";
import { Fb } from "firebase-store";
import { Property } from "property";
import Key from './key';
import firebase from "firebase";


//import Slick from './slick';
//import { SlickSaleProperty as Carouse } from './slickAgentSaleProperty';
import SlickAgentSaleProperty from './slickAgentSaleProperty';
//import RCarouse from './rcarousel';
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

class ChatAgentSaleRespond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: "none",
      clicked1: "none",
      clicked2: "none"
    };
    //this.addPropertyForBuy = this.addPropertyForBuy.bind(this);
  }

  componentDidMount() {
    //this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd = ({ steps, values }) => {

    const user = firebase.auth().currentUser;
    MobxStore.router.goTo(views.list, { uid: user.uid });

  };

  render() {
    const keyID = MobxStore.router.params.keyID;
 
    //console.log( this.addPropertyForBuy );
    // debugger
    return (
      <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Mr.House"
          hideSubmitButton="false"
          // hideBotAvatar="false"
          placeholder="請輸入這裏"
          handleEnd={this.handleEnd}
          //cache="true"
          //cacheName="mrhouse"
          // floating="false"
//          bubbleStyle={{ overflow: "visible", fontSize: "0.3rem" }}

          steps={[
            {
                id: "1",
                message: '你嘅請求已經比發散中... ',
                trigger: '2'
            },
            {
                id: "2",
                message: '係等待嘅期間，等我同你講解下螢幕嘅運作。',
                trigger: '3'
            },
            {
                id: "2",
                message: '你將會見到一串式嘅回覆。你可以撥左撥右去挑選你嘅心水樓盤。',
                trigger: '3'
            },
            {
                id: "3",
                message: '如果你見到有個樓盤有興趣，你可以按”留電話” 。輸入完你電話號碼，對方就可以睇到你號碼，跟住與你聯絡。',
                trigger: '4'
            },            
            {
                id: "4",
                message: '啱啱收到消息， 5個負責「沙田區」嘅Agents已經睇緊你嘅請求 ，佢哋準備聯絡你架啦！',
                trigger: '5'
            },
            {
                id: "5",
                message: '佢哋輸入中 ...',
                trigger: 'CBUY_Matching'
            },
            {
                // on.FILLED
                id: "CBUY_Matching",
                //component: <Key placeholder="96181448"/>,
                // component: <Chatpicker />,
//                component: <Slick keyID={keyID}/>,
                //component: <Carouse keyID={keyID}/>,
                component: <SlickAgentSaleProperty keyID={keyID} />,
                //component: <RCarouse />,
                // component: <Generic className="cumi Generic"/>,
  
                waitAction: true,
                trigger: "stop"
            },
            {
              // stop
              id: "stop",
              message: "Going back to ... control panel ! ",
              trigger : "end"
            },
            {
              // stop
              id: "end",
              message: "exiting now ... ",
              end: true
            }
          ]}
        />
      </ThemeProvider>
      </div>
    );
  }
}

export default ChatAgentSaleRespond;


// {
//   id: "getSex",
//   message: "我應該稱呼你先生(Mr)/ 小姐(Ms)?",
//   trigger: "getSexUserInput"
// },
// {
//   id: "getSexUserInput",
//   options: [
//     { value: "先生", label: "先生(Mr)", trigger: "getLastName" },
//     { value: "小姐", label: "小姐(Miss)", trigger: "getLastName" }
//   ]
// },
// // Input Field
// {
//   // getXXX
//   id: "getLastName",
//   message: "OK, {previousValue} 明白。請問你貴姓？",
//   trigger: "getLastNameUserInput"
//   // MISSED " validation = false"
// },
// {
//   // on.FILLED
//   id: "getLastNameUserInput",
//   user: true,
//   inputType: 'text',
//   trigger: "getEmail"
// },

//   render() {
//     return (<div className="actionSheetContainer">
//       <div style={{ margin: '0.15rem 0' }}>
//         <Button onClick={this.showActionSheet}>默认状态</Button>
//       </div>
//       <div style={{ margin: '0.15rem 0' }}>
//         <Button onClick={this.showShareActionSheet}>分享功能</Button>
//       </div>
//       <div style={{ margin: '0.15rem 0' }}>
//         <Button onClick={this.showShareActionSheetMulpitleLine}>带多行按钮的分享功能</Button>
//       </div>
//     </div>);
//   }
// }

// steps={[
//   {
//     id: '1',
//     message: '歡迎來到Mr House,請輸入名稱',
//     trigger: 'name',
//   },
//   {
//     id: 'name',
//     // component: (
//     //     <Chatpicker />
//     //  ),
//     user: true,
//     trigger: '2',
//   },
//   {
//     id: '2',
//     message: '請選擇樓盤名稱',
//     trigger: '2b',
//   },
//   {
//     id: '2b',
//     component: (<div className="actionSheetContainer" style={{width: '16rem'}}>
// <div style={{ margin: '0.15rem 0' }}>
// <Button type="primary" onClick={this.showActionSheet}>默认状态</Button>
// </div>
// <div style={{ margin: '0.15rem 0' }}>
// <Button tyipe="ghost" onClick={this.showShareActionSheet}>分享功能</Button>
// </div>
// </div>),
//     trigger: '3',
//   },
//   {
//     id: '3',
//     message: '你是？',
//     trigger: 'role',
//   },
//   {
//     id: 'role',
//     options: [
//       { value: '房東', label: '房東', trigger: '6' },
//       { value: '買家', label: '買家', trigger: '6' },
//       { value: '業主', label: '業主', trigger: '6' },
//       { value: '租客', label: '租客', trigger: '6' }
//     ],
//   },
//   {
//     id: '6',
//     message: '請選擇(房)間隔?',
//     trigger: '6b',
//   },
//   {
//     id: '6b',
//     options: [
//       { value: '開放式', label: '開放式', trigger: '5' },
//       { value: '0房', label: '0房', trigger: '5' },
//       { value: '1房', label: '1房', trigger: '5' },
//       { value: '2房', label: '2房', trigger: '5' },
//       { value: '3房', label: '3房', trigger: '5' },
//       { value: '4房', label: '4房', trigger: '5' },
//       { value: '5房', label: '5房', trigger: '5' },
//     ],
//   },
//   {
//     id: '5',
//     message: '想買多少萬?',
//     trigger: 'price',
//   },
//   {
//     id: 'price',
//     user: true,
//     trigger: '7',
//     validator: (value) => {
//       if (isNaN(value)) {
//         return 'value must be a number';
//       } else if (value < 0) {
//         return 'value must be positive';
//       } else if (value > 10000) {
//         return `${value}? Come on!`;
//       }

//       return true;
//     },
//   },
//   {
//     id: '7',
//     message: '以下是你的輸入請確認',
//     trigger: 'review',
//   },
//   {
//     id: 'review',
//     component: <Chatpicker />,
//     asMessage: true,
//     trigger: 'update',
//   },
//   {
//     id: 'update',
//     message: '請確認傳送?',
//     trigger: 'update-question',
//   },
//   {
//     id: 'update-question',
//     options: [
//       { value: 'yes', label: 'Yes', trigger: 'update-yes' },
//       { value: 'no', label: 'No', trigger: 'end-message' },
//     ],
//   },
//   {
//     id: 'update-yes',
//     message: 'What field would you like to update?',
//     trigger: 'update-fields',
//   },
//   {
//     id: 'update-fields',
//     options: [
//       { value: 'name', label: 'Name', trigger: 'update-name' },
//       { value: 'role', label: 'Role', trigger: 'update-role' },
//       { value: 'price', label: 'Price', trigger: 'update-price' },
//     ],
//   },
//   {
//     id: 'update-name',
//     update: 'name',
//     trigger: '7',
//   },
//   {
//     id: 'update-role',
//     update: 'role',
//     trigger: '7',
//   },
//   {
//     id: 'update-price',
//     update: 'price',
//     trigger: '7',
//   },
//   {
//     id: 'end-message',
//     message: 'Thanks! Your data was submitted successfully!',
//     end: true,
//   },
// ]}