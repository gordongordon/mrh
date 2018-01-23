import React from 'react';
import defaultTheme from '../theme';
import PropTypes from 'prop-types';
import Carousel from '../Carousel/index';

import {
  Avatar,
  Star,
  Row,
  Column,
  Small,
  Sticky,
  Label,
  Pre,
  Checkbox,
  BackgroundImage,
  Border,
  Divider,
  Group,
  Heading,
  Flex,
  Box,
  Absolute,
  Relative,
  Text,
  Tooltip
} from "rebass";

import MrCard from '../MrCard';

export class AgentRentProperty extends React.Component {
  constructor(props) {
    super(props);

    // this.triggetNext = this.triggetNext.bind(this);

    // this.state = {
    //   value: null,
    //   trigger: false
    // };

  }

  // update property's timestamp in order to display howFresh.. 
  componentWillMount() {
    //const p = this.props;
    //    const t = moment().format('YYYY-MM-DD HH:mm:ss');
    //  this.props.property.realTime = moment( t );

    // Will be active while production
    //this.props.property.setTimeStamp();

    //    console.log( 'realTime will mount', this.props.property.realTime)
  }

  // // For Chatbot Custom Component Return 
  // triggetNext() {

  //     const label = 'gordon';
  //     console.log( 'triggetNext() ');
  //     this.setState({ trigger: true }, () => {
  //       this.props.triggerNextStep( { value: label, label : label });

  //     });

  // }

  /**
有客約睇租盤: 名城, 大圍 
————重點————

收入範圍: $16k ~20k
職業: 政府工


————要求————
同居人數: 2
養寵物: ✔
租期: 1年

平均響應時間: 1分鐘
———— 其他————
最快可睇樓: 1月20日
入住日期：1月27日
更新時間: 5分鐘前

————聯絡方式————
資料來源: 地產代理
Avatar
聯絡人: Gordon Wong
經驗評級: 平均回复時間: 1分鐘
CALL 98765374
Whatsapp 98765374
Exit window     * 
   */
  render() {
    const onWhatsapp = this.props.onWhatsapp;
    const onCall = this.props.onCall;
    const onTriggetNext = this.props.onTriggetNext;
    // const onSharePhone = this.props.onSharePhone;
    //const status = this.props.status;
    //const fStatus = this.props.fStatus;
    const p = this.props.property;
    const isFirst = this.props.isFirst;
    const isLast = this.props.isLast;



    return (
      <MrCard w={19 / 20}>
        <MrCard.AgentRentHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={1} />

        {BackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        
        <Flex wrap mx={1} my={1}>
          
          
          <MrCard.LineText>
            <Text f={3}>租客資料</Text>
          </MrCard.LineText>

          <MrCard.JobNature value={p.jobNature} />
          <MrCard.Income value={p.income} />
          <MrCard.NumOfPeopleLiving value={p.numOfPeopleLiving} />
          <MrCard.Partition value={p.Partition} />

          <MrCard.LineText>
            <Text f={3}>要求</Text>
          </MrCard.LineText>
          <MrCard.HasHomeHardware value={p.hasHomeHardware} />
          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.LeasePeriod value={p.leasePeriod} />
          <MrCard.LineText>
            <Text f={3}>時間</Text>
          </MrCard.LineText>
          <MrCard.LeasingPeriod value={p.leasingPeriod} />
          <MrCard.DueDay value={p.dueDay} />
          <MrCard.EarlyTimeToView value={p.earlyTimeToView}  />
          <MrCard.DayListed value={p.dayListed} />
          <MrCard.LineText>
            
            <Text f={3}>聯絡方式</Text>{" "}
          </MrCard.LineText>
          <MrCard.AgentID value="E-3348778" />
          <MrCard.Avatar src="http://www.kowsinn.com/dc03.jpeg" />
          <MrCard.ContactName value={p.contactName}/>
          <MrCard.AgentStar value={3} />
          <MrCard.LineText>
            <Text f={3}>下一步行動</Text>
          </MrCard.LineText>
          <MrCard.Cell px={2} py={1} width={1} align="center">
            <MrCard.ButtonOutline
              width={7 / 22}
              children="96181448"
              f={5}
              color="#F55869"
            />
            <MrCard.ButtonOutline
              mx={1}
              width={7 / 22}
              children="Whatsapp"
              f={5}
              color="#F55869"
            />
            <MrCard.ButtonOutline
              width={7 / 22}
              children="Home"
              f={5}
              color="#F55869"
            />
          </MrCard.Cell>
        </Flex>
      </MrCard>
    );

  }
}


AgentRentProperty.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
  onWhatsapp: PropTypes.func,
  onClick: PropTypes.func,
  status: PropTypes.object,
  fStatus: PropTypes.object,
  property: PropTypes.object,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

AgentRentProperty.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
  status: undefined,
  fStatus: undefined,
  property: undefined,
  isFirst: false,
  isLast: false,
};