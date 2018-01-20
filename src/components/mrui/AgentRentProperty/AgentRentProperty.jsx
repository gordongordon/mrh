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
    ViewUserRentHeading
  } from '../Elements';

export class AgentRentProperty extends React.Component {
    constructor( props ) {
        super( props );

        this.triggetNext = this.triggetNext.bind(this);

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
        const status  = this.props.status;
        const fStatus = this.props.fStatus;
        const p = this.props.property;
        const isFirst = this.props.isFirst;
        const isLast = this.props.isLast;
        
        // 租客名稱: Peter Kwan 

        // ————個人資料————
        // 職業: 政府工
        // 收入: $16k
        // 同居人數: 2
        // ————要求————
        // 養寵物: ✔
        // 傢俬: ❌
        // 租期: 1年
        // ———— 時間————
        // 最快可睇樓: 1月20日
        // 入住日期：1月27日
        // 更新時間: 5分鐘前
        // ————聯絡方式————
        // 資料來源: 地產代理
        // 聯絡人: Gordon Wong
        // 經驗評級: ** 
        // CALL 98765374
        // Whatsapp 98765374
        // Exit window
        // 間隔要求

        return (
      <Card w={19 / 20}>
      <ViewUserRentHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={1} />

        {BackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
          <LineText>
            <Text f={3}>租客資料</Text>
          </LineText>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>職業:</Label>
            <Text fontSize="0.9rem" color="black" children="政府工" />
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4} bold>
            收入: 
            </Label>
            <Text fontSize="0.9rem" color="black">
              $16k
              
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>同居人數:</Label>
            <Text fontSize="0.9rem" color="black">
              2人
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>間隔要求: </Label>
            <Text fontSize="0.9rem" color="black">
              2房1廳
            </Text>
          </Cell>

          <LineText>
            <Text f={3}>要求</Text>
          </LineText>

          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}> 傢俬: </Label>
            <Text color="black" f="0.9rem">
            ❌
            </Text>
          </Cell>

          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}> 養寵物: </Label>
            <Text color="black" fontSize="0.9rem">
              ✔
            </Text>
          </Cell>

          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>租期:</Label>
            <Text color="black" fontSize="0.9rem">
            1年
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Tooltip text="買賣連租賃- 樓盤已經簽咗一份租約俾人">
              <Label f={4}>出售形式:</Label>
              <Text color="black" fontSize="0.9rem">
                連租約
              </Text>
            </Tooltip>
          </Cell>

          <LineText>
            <Text f={3}>時間</Text>
          </LineText>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>學校網: </Label>
            <Text color="black" f="0.5rem">
            小學:95
            </Text>
            <Text color="black" f="0.5rem" p={0}>
            中學馬鞍山區
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}> 最快可睇樓: </Label>
            <Text color="black" f="0.8rem">
              1月20日
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>上載時間:</Label>
            <Text color="black" f="0.8rem">
              2分鐘前
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Tooltip text="@$19,389">
              <Label f={4}> ?? </Label>
              <Text color="black" f="0.8rem">
                ??
              </Text>
            </Tooltip>
          </Cell>
          <LineText>
            {" "}
            <Text f={3}>聯絡方式</Text>{" "}
          </LineText>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}> 資訊來源: </Label>
            <Text color="black" f="0.6rem">
              地產代理
            </Text>
            <Text color="black" f="0.5rem" p={0}>
              (E-3348778)
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Avatar
              size="2rem"
              src="http://www.kowsinn.com/dc03.jpeg"
            />
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>聯絡人:</Label>
            <Text color="black" f="0.6rem">
              Gordon Wong
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>經驗評級 </Label>
            <Flex>
              <Star checked bg="blue" />
              <Star checked bg="blue" />
              <Star checked bg="blue" />
              <Star bg="blue" half />
              <Star color="blue" />
            </Flex>
          </Cell>
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


AgentRentProperty.propTypes = {
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
  
AgentRentProperty.defaultProps = {
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



             {/* <Carousel.GenericContainer 
              className="cmui-GenericContainer"
               opened="true"
               width="100%">
                <Carousel.Title className="cmui-Title" isFirst={isFirst} isLast={isLast}>{p.addressLocationLabel}/{p.nameOfBuildingLabel}</Carousel.Title>
                <Carousel.SubTitle className="cmui-SubTitle">{p.roleName} : {p.contactNameLabel}</Carousel.SubTitle>
                <Carousel.Content>
                <Carousel.LineText> Agent Rent Property </Carousel.LineText>
                <Carousel.ContentItem>income: {p.incomeLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>rentBudgetMax: {p.rentBudgetMaxLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>numOfPeople: {p.numOfPeopleLivingLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>isPetAllowed: {p.isPetAllowedLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>level: {p.levelLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>isViewAble: {p.isViewAbeleLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>hasHomeHardware: {p.hasHomeHardwareLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>leasingPeriod: {p.leasingPeriodLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>jobNature: {p.jobNatureLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>dayListed: {p.dayListed}</Carousel.ContentItem>
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