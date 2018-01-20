import React from 'react';
import defaultTheme from '../theme';
import PropTypes from 'prop-types';
// import Carousel from '../Carousel/index';

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

  import { Card, Cell, TextHeader, LineText, ButtonOutline, ViewSalePrice, ViewNetSize, ViewLevel, 
    ViewIsPetAllowed,
    ViewIsSaleWithLease,
    ViewNetSquarePrice,
    ViewContactName,
    ViewAgentID,
    ViewAvatar,
    ViewPartition,
    ViewSchool,
    ViewIsViewAble,
    ViewAgentStar,
    ViewMonthlyPayment,
    ViewDayListed,
    ViewBuyBudgetMax,
    ViewNetSizeMin,
    ViewJobNature,
    ViewIsFreeForSevenDay,
    ViewHasHomeHardware,
    ViewIncome,
    ViewLeasingPeriod,
    ViewDueDay,
    ViewEarlyTimeToView,
    ViewUserSaleHeading
  }  from '../Elements';


export class AgentSaleProperty extends React.Component {
    constructor( props ) {
        super( props );

        this.triggetNext = this.triggetNext.bind(this);

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
        //this.props.property.setTimeStamp();
    
        //    console.log( 'realTime will mount', this.props.property.realTime)
      }    

    // // For Chatbot Custom Component Return 
    triggetNext() {
        
        const label = 'gordon';
        console.log( 'triggetNext() ');
        this.setState({ trigger: true }, () => {
          this.props.triggerNextStep( { value: label, label : label });

        });

    }

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
        // 實用呎價: $13,000
        // ————特徵————
        // 樓層: 中
        // 養寵物: ✔
        // 睇樓: ✔
        // 每月供款: $18,000
        // ————其他————
        // 出售形式: 連租約
        // 睇樓日期：1月20日
        // 更新時間: 2分鐘前
        // 學校網 : 95小學/中學西貢區
        // ————聯絡方式————
        // 資料來源: 地產代理
        // Avator
        // 聯絡人: Gordon Wong
        // 經驗評級: */平均回复時間: 1分鐘
        // CALL 98765374
        // Whatsapp 98765374
        // Exit window


        return (
 <Card w={19 / 20}>
 <ViewUserSaleHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={1} />

        {BackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
          <LineText>
            <Text f={3}>重點</Text>
          </LineText>
          <ViewSalePrice value={p.salePrice} />
          <ViewNetSize value={p.netSize} />
          <ViewNetSquarePrice value={13000} />
          <ViewPartition room={1} bathRoom={1} livingRoom={1} />
          <LineText>
            <Text f={3}>特徵</Text>
          </LineText>
          <ViewLevel value={p.levelLabel} />
          <ViewIsPetAllowed value={p.isPetAllowed} />
          <ViewIsViewAble value={p.isViewAble} />
          <ViewIsSaleWithLease value={p.isSaleWithLease} />
          <LineText>
            <Text f={3}>其他</Text>
          </LineText>
          <ViewSchool  primary={95} secondary="馬鞍山區"/>
          <ViewEarlyTimeToView value={p.earlyTimeToView} />
          <ViewDayListed value={p.dayListed} />
          <ViewMonthlyPayment value={19389} />
          <LineText>
            <Text f={3}>聯絡方式</Text>
          </LineText>
          <ViewAgentID value="E-3348778" />
          <ViewAvatar value="http://www.kowsinn.com/dc03.jpeg" />
          <ViewContactName value={p.contactName} />
          <ViewAgentStar value={2} />
          <LineText>
            <Text f={3}>下一步行動</Text>
          </LineText>
          <Cell px={2} py={1} width={1} align="center">
            <ButtonOutline
              width={7 / 22}
              children="96181448"
              f={5}
              color="#F55869"
            />
            <ButtonOutline
              mx={1}
              width={7 / 22}
              children="Whatsapp"
              f={5}
              color="#F55869"
            />
            <ButtonOutline
              width={7 / 22}
              children="Home"
              f={5}
              color="#F55869"
            />
          </Cell>
        </Flex>
      </Card>

        );

    }
}



                {/* <Title className="cmui-Title">迎海 Double Cove</Title>
                <SubTitle className="cmui-SubTitle">烏溪沙路8號 地區：馬鞍山</SubTitle>
                <Content>
                <ContentItem>最少實用面積: </ContentItem><ContentItem left>330</ContentItem>
                <ContentItem>付出預算上限:</ContentItem><ContentItem left>$800</ContentItem>
                <ContentItem>你會唔會養物:</ContentItem><ContentItem left>會</ContentItem>
                <ContentItem>冇樓睇租左俾人會唔會買: </ContentItem><ContentItem left>330</ContentItem>
                <ContentItem>間隔::</ContentItem><ContentItem left> Studio</ContentItem>
                </Content>
                <Button className="cmui-Button" onClick={ () => onClick() } first>Set Phone </Button>
                <Button className="cmui-Button" onClick={ () => onClick() } first>Text Me </Button>
                <Button className="cmui-Button" onClick={ () => onClick() } first> Call 96181448 </Button> */}


AgentSaleProperty.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
    onWhatsapp : PropTypes.func,
    onClick : PropTypes.func,
    status  : PropTypes.object,
    fStatus : PropTypes.object,
    property: PropTypes.object,
    isFirst : PropTypes.bool,
    isLast  : PropTypes.bool,
  };
  
AgentSaleProperty.defaultProps = {
    steps: undefined,
    triggerNextStep: undefined,
    status  : undefined,
    fStatus : undefined,
    property: undefined,
    isFirst : false,
    isLast  : false,
  };

           {/* <GenericContainer className="cmui-GenericContainer">
               <Title className="cmui-Title">Title</Title>
               <SubTitle className="cmui-SubTitle">SubTitle</SubTitle>
               <Content className="cmui-Content">Content</Content>
               <Footer className="cmui-Footer">Footer</Footer>
           </GenericContainer> */}

        //    <Carousel.GenericContainer 
        //    className="cmui-GenericContainer"
        //    opened="true"
        //    width="100%">
        //     <Carousel.Title className="cmui-Title" isFirst={isFirst} isLast={isLast}>{p.addressLocationLabel}/{p.nameOfBuildingLabel}</Carousel.Title>
        //     <Carousel.SubTitle className="cmui-SubTitle">{p.roleName} : {p.contactNameLabel}</Carousel.SubTitle>
        //     <Carousel.Content>
        //     <Carousel.LineText> Agent Sale Property </Carousel.LineText>
        //     <Carousel.ContentItem>: {p.partitionLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.salePriceLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.isPetAllowedLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.isViewAbleLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.levelLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.roleName}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.howFresh}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.netSizeLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.dayListed}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.isSaleWithLeaseLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.dueDayLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>: {p.earlyTimeToViewLabel}</Carousel.ContentItem>
        //     <Carousel.ContentItem>f:{p.fbid}-r:{p.relatedFbid}</Carousel.ContentItem>
        //     <Carousel.Toggle/>
        //     </Carousel.Content>
        //     {
        //         onCall && <Carousel.Button className="cmui-Button" onClick={ () => onCall( p.contactPhone ) } first> { p.contactPhone} </Carousel.Button>
        //     }
        //     {
        //         onTriggetNext && <Carousel.Button className="cmui-Button" onClick={ () => onTriggetNext() } first> triggetNext </Carousel.Button>
        //     }
        // </Carousel.GenericContainer>

        

            
           {/* <Carousel.GenericContainer 
           className="cmui-GenericContainer"
           opened="true"
           width="100%">
            <Carousel.Title className="cmui-Title" isFirst={isFirst} isLast={isLast}>{p.addressLocationLabel}/{p.nameOfBuildingLabel}</Carousel.Title>
            <Carousel.SubTitle className="cmui-SubTitle">{p.roleName} : {p.contactNameLabel}</Carousel.SubTitle>
            <Carousel.Content>
            <Carousel.LineText> Agent Sale Property </Carousel.LineText>
            <Carousel.ContentItem>: {p.partitionLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.salePriceLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.isPetAllowedLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.isViewAbleLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.levelLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.roleName}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.howFresh}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.netSizeLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.dayListed}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.isSaleWithLeaseLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.dueDayLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>: {p.earlyTimeToViewLabel}</Carousel.ContentItem>
            <Carousel.ContentItem>f:{p.fbid}-r:{p.relatedFbid}</Carousel.ContentItem>
            <Carousel.Toggle/>
            </Carousel.Content>
            {
                onCall && <Carousel.Button className="cmui-Button" onClick={ () => onCall( p.contactPhone ) } first> { p.contactPhone} </Carousel.Button>
            }
                            {
                    onWhatsapp && <Carousel.Button className="cmui-Button" onClick={ () => onWhatsapp( p.contactPhone ) } first> Whatsapp { p.contactPhone} </Carousel.Button>
                }
            {
                onTriggetNext && <Carousel.Button className="cmui-Button" onClick={ () => onTriggetNext() } first> triggetNext </Carousel.Button>
            }
        </Carousel.GenericContainer> */}