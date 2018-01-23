// src/blocks/Card/index.js
import React from "react";
import defaultTheme from "../theme";
import PropTypes from "prop-types";
//import moment from "moment";

import {
  BackgroundImage,
  Flex,
  Text
} from "rebass";

import MrCard from '../MrCard';

export class AgentBuyProperty extends React.Component {

  static displayName = 'AgentBuyProperty';

  constructor(props) {
    super(props);

    // this.triggetNext = this.triggetNext.bind(this);
  }

  // update property's timestamp in order to display howFresh..
  componentWillMount() {
    // Trigger dayListed Field! 
    this.props.property.setTimeStamp();
  }

  // // For Chatbot Custom Component Return
  // triggetNext() {
  //   const label = "gordon";
  //   console.log("triggetNext() ");
  //   this.setState({ trigger: true }, () => {
  //     this.props.triggerNextStep({ value: label, label: label });
  //   });
  // }


  render() {
    const onCall = this.props.onCall;
    const onWhatsapp = this.props.onWhatsapp;
    const onTriggetNext = this.props.onTriggetNext;
    const index = this.props.index;
    const isBackgroundImage = this.props.isBackgroundImage;

    //const onSharePhone = this.props.onSharePhone;
    //const status = this.props.status;
    //const fStatus = this.props.fStatus;

    const p = this.props.property;
    const isFirst = this.props.isFirst;
    const isLast = this.props.isLast;

    return (
      <MrCard w={19 / 20}>
        <MrCard.AgentBuyHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={1} />
        {isBackgroundImage && BackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        {p.uid}
        <Flex wrap mx={1} my={1}>

          <MrCard.LineText>
            <Text f={3}>重點 </Text>
          </MrCard.LineText>
          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel}  />


          <MrCard.LineText>  <Text f={3}>特徵</Text> </MrCard.LineText>

          <MrCard.LineText>
            <Text f={3}>其他</Text>
          </MrCard.LineText>
          <MrCard.DayListed value={p.dayListed} />

          <MrCard.LineText>
            <Text f={3}>聯絡方式</Text>
          </MrCard.LineText>
          <MrCard.AgentID value="E-3348778" />
          <MrCard.Avatar value="http://www.kowsinn.com/dc03.jpeg" />
          <MrCard.ContactName value={p.contactName} />
          <MrCard.AgentStar value={2} />
          <MrCard.LineText>
            <Text f={3}>下一步行動</Text>
          </MrCard.LineText>
          <MrCard.Cell px={2} py={1} width={1} align="center">
            {onCall &&
              <MrCard.ButtonOutline
                onClick={() => onCall(p.contactPhone)}
                width={7 / 22}
                children={p.contactPhone}
                f={5}
                color="#F55869"
              />
            }
            {onWhatsapp &&
              <MrCard.ButtonOutline

                onClick={() => onWhatsapp(p.contactPhone)}
                mx={1}
                width={7 / 22}
                children="Whatsapp"
                f={5}
                color="#F55869"
              />
            }
            {onTriggetNext && <MrCard.ButtonOutline
              onClick={() => onTriggetNext()}
              width={7 / 22}
              children="Home"
              f={5}
              color="#F55869"
            />
            }
          </MrCard.Cell>
        </Flex>
      </MrCard>
    );
  }
}


AgentBuyProperty.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
  onWhatsapp: PropTypes.func,
  onClick: PropTypes.func,
  status: PropTypes.object,
  fStatus: PropTypes.object,
  property: PropTypes.object,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  isBackgroundImage: PropTypes.bool
};

AgentBuyProperty.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
  status: undefined,
  fStatus: undefined,
  property: undefined,
  isFirst: false,
  isLast: false,
  isBackgroundImage: true
};
