import React from "react";
import {
  List,
  Toast,
  NoticeBar,
  Icon,
  Card,
  SwipeAction,
  Stepper,
  Picker,
  DatePicker,
  Badge,
  Flex,
  InputItem,
  WhiteSpace,
  Button,
  SegmentedControl
} from "antd-mobile";

/**
   * model is userModelView, use to handle all functions , e.g. del
   * propertys is list of propertys for this user
   * h is a callback to handle next route wiht keyID
   */
export default class Records extends React.Component {
 
    constructor( props ) {
      super( props );
      this.buildRecords = this.buildRecords.bind( this );
      this.onClick = this.onClick.bind( this );
      this.loadingToast = this.loadingToast.bind( this );
      this.successToast = this.successToast.bind( this );
    }

    onClick = key => {
      console.log(key);
    };
  

    loadingToast = () => {
      Toast.loading("Loading...", 1, () => {
        console.log("Load complete !!!");
      });
    };
  
    successToast = () => {
      Toast.success("成功刪除!!!", 1);
    };


    buildRecords( model  ) {
    const list = model;

    // Function to test is list empty
    const isListEmpty = list =>
      list === null
        ? console.log("list === null")
        : list.size >= 0 ? false : true;

    // Catched empty list, don't do anything!
    if (isListEmpty(list)) {
      return null;
    }

    const that = this;

    console.log("list size ", list.size);
    var element = [];

    list.forEach((property, keyID) => {
      const size = property.responsedPropertys.size;
      var color = "#ff5b05";
      if (size > 0) {
        color = "green";
      }

      if (property.typeTo === "lease") {
        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: "gray" }}
              autoClose
              right={[
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                },
                {
                  text: "Delete",
                  onPress: () => {
                    this.successToast();
                    model.del(keyID);
                  },
                  style: { backgroundColor: "#F4333C", color: "white" }
                }
              ]}
              left={[
                {
                  text: "Reply",
                  onPress: () => console.log("reply"),
                  style: { backgroundColor: "#108ee9", color: "white" }
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                }
              ]}
              onOpen={() => console.log("global open")}
              onClose={() => console.log("global close")}
            >
              <Item
                thumb="http://hair.losstreatment.com/icons/building-down.svg"
                arrow="horizontal"
                onClick={() =>
                  MobxStore.router.goTo(views.chatAgentRentRespond, { keyID })}
                multipleLine
                extra={<Badge text={"回覆" + size} style={{ backgroundColor: color }} />}
              >
                {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}
                <Brief>
                  實用面積{property.netSize}呎/租金${property.leasePrice}
                </Brief>
                {keyID}
              </Item>
            </SwipeAction>
          </div>
        );
      } // end of lease //  MobxStore.router.goTo(views.matchLease, { keyID })}

      if (property.typeTo === "rent") {

        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: "gray" }}
              autoClose
              right={[
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                },
                {
                  text: "Delete",
                  onPress: () => {
                    this.successToast();
                    model.del(keyID);
                  },
                  style: { backgroundColor: "#F4333C", color: "white" }
                }
              ]}
              left={[
                {
                  text: "Reply",
                  onPress: () => console.log("reply"),
                  style: { backgroundColor: "#108ee9", color: "white" }
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                }
              ]}
              onOpen={() => console.log("global open")}
              onClose={() => console.log("global close")}
            >
              <Item
                thumb="http://hair.losstreatment.com/icons/rent-up.svg"
                arrow="horizontal"
                onClick={() =>
                  MobxStore.router.goTo(views.chatAgentLeaseRespond, { keyID })}

                multipleLine
                extra={<Badge text={"回覆" + size} style={{ backgroundColor: color }} />}
              >
                {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}
                <Brief>
                  最少{property.netSizeMin}呎實用面積/租金上限${property.rentBudgetMax}
                </Brief>
                {keyID}
              </Item>
            </SwipeAction>
          </div>
        );
      } // end of rent //                   MobxStore.router.goTo(views.matchRent, { keyID })}

      if (property.typeTo === "buy") {
        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: "gray" }}
              autoClose
              right={[
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                },
                {
                  text: "Delete",
                  onPress: () => {
                    this.successToast();
                    model.del(keyID);
                  },
                  style: { backgroundColor: "#F4333C", color: "white" }
                }
              ]}
              left={[
                {
                  text: "Reply",
                  onPress: () => console.log("reply"),
                  style: { backgroundColor: "#108ee9", color: "white" }
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                }
              ]}
              onOpen={() => console.log("global open")}
              onClose={() => console.log("global close")}
            >
              <Item
                thumb="http://hair.losstreatment.com/icons/rent-up.svg"
                arrow="horizontal"
                onClick={() => MobxStore.router.goTo(views.chatAgentSaleRespond, { keyID })}
                multipleLine
                extra={<Badge text={"回覆" + size} style={{ backgroundColor: color }} />}
              >
                {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}
                <Brief>
                  最少 {property.netSizeMin}呎實用面積/預算上限${property.buyBudgetMax}萬
                </Brief>
                {keyID}
              </Item>
            </SwipeAction>
          </div>
        );
      } // end of buy, views.chatMatching

      if (property.typeTo === "sale") {
        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: "gray" }}
              autoClose
              right={[
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                },
                {
                  text: "Delete",
                  onPress: () => {
                    this.successToast();
                    model.del(keyID);
                  },
                  style: { backgroundColor: "#F4333C", color: "white" }
                }
              ]}
              left={[
                {
                  text: "Reply",
                  onPress: () => console.log("reply"),
                  style: { backgroundColor: "#108ee9", color: "white" }
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("cancel"),
                  style: { backgroundColor: "#ddd", color: "white" }
                }
              ]}
              onOpen={() => console.log("global open")}
              onClose={() => console.log("global close")}
            >
              <Item
                thumb="http://hair.losstreatment.com/icons/rent.svg"
                arrow="horizontal"
                onClick={() =>
                  MobxStore.router.goTo(views.chatAgentBuyRespond, { keyID })}
                multipleLine
                extra={<Badge text={"回覆" + size} style={{ backgroundColor: color }} />}
              >
                {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}
                <Brief>
                  實用面積:{property.netSize}呎/售價${property.salePrice}萬
                </Brief>
                {keyID}
              </Item>
            </SwipeAction>
          </div>
        );
      } // end of sale //                   MobxStore.router.goTo(views.matchSale, { keyID })}



    } // List
    );

    return <div>{element.reverse()}</div>;
  };

  render() {
       const model = this.props.src;

    return (
      <div>
       { this.buildRecords( model ) }
       </div>
    )
  }

}
