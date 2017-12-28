import React from "react";
import { observer } from "mobx-react";
import {
  Toast,
  ActionSheet,
  Popover,
  NavBar,
  Icon,
  Button,
  SegmentedControl
} from "antd-mobile";

import MobxStore from "mobxStore";
import views from "views";
import { Fb } from "firebase-store";

const Item = Popover.Item;

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

@observer
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: "none",
      isLeftIcon: false,
      visible: false,
      selected: ""
    };
    this.loginItem.bind(this);
    this.showActionSheet.bind(this);
  }

  showActionSheet = () => {
    // debugger

    const BUTTONS = ["intro", "buy", "sale", "rent", "lease", "cancel","login"];

    console.log( 'handling ShowActionSheet');

    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        // title: '标题',
        message: "Choice to do",
        maskClosable: true,
        "data-seed": "logId",
        wrapProps
      },

      buttonIndex => {
        this.setState({ clicked: BUTTONS[buttonIndex] });

        // Intro
        if (buttonIndex === 0) {
          MobxStore.router.goTo(views.mrHouse);
        }
        // Buy
        if (buttonIndex === 1) {
          MobxStore.router.goTo(views.askChatbotBuy);
        }
        // Sale
        if (buttonIndex === 2) {
          MobxStore.router.goTo(views.askChatbotSale);
        }
        // Rent
        if (buttonIndex === 3) {
          MobxStore.router.goTo(views.askChatbotRent);
        }
        // Lease
        if (buttonIndex === 4) {
          MobxStore.router.goTo(views.askChatbotLease);
        }
        // Cancel
        if (buttonIndex === 6) {
          MobxStore.router.goTo(views.askChatbotSignIn);
        }
      }
    );
  };

  onSelect = opt => {
    console.log(opt.props.value);

    if (opt.props.value === "google") {
      Fb.startLoginGoogle();
      this.setState({
        loginName: "google"
      });
    }
    if (opt.props.value === "github") {
      Fb.startLogin();
      this.setState({
        loginName: "github"
      });
    }
    if (opt.props.value === "facebook") {
      Fb.startLoginFacebook();
      this.setState({
        loginName: "fb"
      });
    }
    if (opt.props.value === "Anonymous") {
      Fb.startLoginAnonyhmously();
      this.setState({
        loginName: "Guest"
      });
    }

    this.setState({
      visible: false,
      selected: opt.props.value
    });
  };

  handleVisibleChange = visible => {
    this.setState({
      visible
    });
  };

  onLogin = e => {
    e.preventDefault();
    console.log("onLogin ... ");
    Fb.startLogin();
  };

  onLogout = e => {
    e.preventDefault();
    console.log("onLogin ... ");
    Fb.startLogout();
  };

  loginItem = () => {
    const isLogin = MobxStore.app.user;
    let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }

    if (isLogin) {
      return (
        <span key="2" onClick={this.onLogout}>
          登出
        </span>
      );
    } else {
      // For different user login
      return (
        <Popover
          mask
          overlayClassName="fortest"
          overlayStyle={{ color: "currentColor" }}
          visible={this.state.visible}
          overlay={[
            <Item key="3" value="google" data-seed="logId">
              google
            </Item>,
            <Item key="4" value="github" data-seed="logId">
              Github
            </Item>,
            <Item key="5" value="facebook" style={{ whiteSpace: "nowrap" }}>
              Facebook
            </Item>,
            <Item key="6" value="Anonymous">
              <span style={{ marginRight: 5 }}>Anonymous</span>
            </Item>
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [offsetX, 15]
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}
        >
          <div
            style={{
              height: "100%",
              padding: "0 0.3rem",
              marginRight: "-0.3rem",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span>請登入</span>
          </div>
        </Popover>
      );
    }
  };

  render() {
    const title = this.props.title;

    var leftContentLabel = "上一頁";
    //  let offsetX = -10; // just for pc demo
    //  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    //    offsetX = -26;
    //  }
    //   const that = this;

    if (title === "好 .. Matching") {
      leftContentLabel = "";
    } else {
      leftContentLabel = "上一頁";
    }

    //   {MobxStore.app.providerId},{MobxStore.app.title}

    // <SegmentedControl  style={{ height: '0.8rem', width: '5rem' }} values={['等待回覆', '已跟進']} />
    // this.loginItem()
    return (
      <div>
        <NavBar
          iconName="left"
          mode="light"

          onLeftClick={ () => {
                      this.loginItem();
                      console.log('onLeftClick')
                      }
          }

          leftContent={[<div key="1">{this.loginItem()}</div>]}
          rightContent={[
            <span key="2" onClick={this.showActionSheet}>
              +
            </span>
          ]}
        >
          {MobxStore.app.providerId},{MobxStore.app.title}
        </NavBar>
      </div>
    );
  }
}

{
  /* <div key="1">+ {
            () => { this.showActionSheet()
            console.log( 'right content click '); }
             }</div> */
}

//<Icon key="0" type="plus" style={{ marginRight: '0.32rem' }} onClick={  this.onLogin }/>,
//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }

// onLeftClick={ () => MobxStore.router.goTo( views.first ) }
