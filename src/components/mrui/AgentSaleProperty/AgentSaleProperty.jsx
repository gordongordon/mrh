import React from 'react';
import defaultTheme from '../theme';
import PropTypes from 'prop-types';
// import Carousel from '../Carousel/index';

import {
  BackgroundImage,
  Flex,
  Text
} from "rebass";

import MrCard from '../MrCard';


export class AgentSaleProperty extends React.Component {
  constructor(props) {
    super(props);

    // this.triggetNext = this.triggetNext.bind(this);

    // this.state = {
    //     value: null,
    //     trigger: false
    //   };

  }

  // update property's timestamp in order to display howFresh.. 
  componentWillMount() {
    //const p = this.props;
    //    const t = moment().format('YYYY-MM-DD HH:mm:ss');
    //  this.props.property.realTime = moment( t );

    // Will be active while production
    this.props.property.setTimeStamp();

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

  render() {
    const onWhatsapp = this.props.onWhatsapp;
    const onCall = this.props.onCall;
    const onTriggetNext = this.props.onTriggetNext;
    // const onSharePhone = this.props.onSharePhone;
    //const status  = this.props.status;
    //const fStatus = this.props.fStatus;
    const p = this.props.property;
    const isFirst = this.props.isFirst;
    const isLast = this.props.isLast;

    // 出售樓盤: 黃埔花園, 紅磡
    // ————重點————
    // 出售價(萬元): $588
    // 實用面積(呎): 344
    // 單位間隔: 2房1廳1廁

    // ————特徵————
    // 樓層: 中
    // 養寵物: ✔
    // 睇樓: ✔

    // ————其他————
    // 出售形式: 連租約
    // 睇樓日期：1月20日

    return (
      <MrCard w={19 / 20}>
        <MrCard.AgentSaleHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={1} />
        {BackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
          <MrCard.LineText>
            <Text f={3}>重點</Text>
          </MrCard.LineText>
          <MrCard.SalePrice value={p.salePrice} />
          <MrCard.NetSize value={p.netSize} />
          <MrCard.NetSquarePrice value={p.sellerNetSquarePrice} />
          <MrCard.Partition room={1} bathRoom={1} livingRoom={1} />
          <MrCard.LineText>
            <Text f={3}>特徵</Text>
          </MrCard.LineText>
          <MrCard.Level value={p.levelLabel} />
          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.IsViewAble value={p.isViewAble} />
          <MrCard.IsSaleWithLease value={p.isSaleWithLease} />
          <MrCard.LineText>
            <Text f={3}>其他</Text>
          </MrCard.LineText>
          <MrCard.School primary={95} secondary="馬鞍山區" />
          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel} />
          <MrCard.DayListed value={p.dayListed} />
          <MrCard.MonthlyPayment value={19389} />
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

AgentSaleProperty.propTypes = {
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

AgentSaleProperty.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
  status: undefined,
  fStatus: undefined,
  property: undefined,
  isFirst: false,
  isLast: false,
};