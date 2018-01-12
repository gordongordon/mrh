// src/blocks/Card/index.js
import React from "react";
import defaultTheme from "../theme";
import PropTypes from "prop-types";
import Carousel from "../Carousel/index";
import {
  Star,
  ButtonOutline,
  Row, 
  Column,
  Small,
  Label,
  Checkbox,
  Border,
  Divider,
  Card,
  Flex,
  Box,
  Text,
  ButtonCircle
} from "rebass";
import Cell from "./Cell";
import LineText from '../Elements/LineText';
import MrCard from '../Elements/MrCard';
import TextHeader from '../Elements/TextHeader';


export default class AgentBuyProperty extends React.Component {
  constructor(props) {
    super(props);

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
    const label = "gordon";
    console.log("triggetNext() ");
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep({ value: label, label: label });
    });
  }

  render() {
    const onCall = this.props.onCall;
    const onWhatsapp = this.props.onWhatsapp;
    const onTriggetNext = this.props.onTriggetNext;
    // const onSharePhone = this.props.onSharePhone;
    const status = this.props.status;
    const fStatus = this.props.fStatus;
    const p = this.props.property;
    const isFirst = this.props.isFirst;
    const isLast = this.props.isLast;

    return (
<<<<<<< HEAD
      <Card w={19 / 20}>
        <Flex wrap mx={-2} my={0}>
          <Box px={4} py={1} width={1} my={0}>
            <Text color="white" bg={["blue", "green"]}>
              心水樓盤：{p.addressLocationLabel}/{p.nameOfBuildingLabel}
            </Text>
          </Box>
          <Box px={2} py={1} width={1 / 3} my={0}>
            <Text color="black">
              姓名:
            </Text>
=======
      <MrCard w={19 / 20}>
        <Flex wrap mx={1} my={1}>
          <Box px={2} py={1} width={1} my={0}>
            <TextHeader p={1} color="white" bg={["blue", "#F55869"]}>
            出售樓盤: ：龍苑, 九龍塘
            </TextHeader>
>>>>>>> 8106b096a873a2311186a65a6744493c27db0d68
          </Box>
          <LineText> <Text f={3}>重點</Text> </LineText>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}>出售價(萬元):</Label>

            <Text color="black" f="1rem">$588</Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label color="black" f={4}>實用面積:</Label>
            <Text color="black" f="1rem">
              344呎
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
              <Label f={4}>單位間隔: </Label>
            <Text color="black" f="1rem">
            2房1廳
            </Text>
          </Cell>
          <LineText> <Text f={3}>特徵</Text> </LineText>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}> 樓層: </Label>
            <Text color="black" f="1rem">
            中層
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}> 養寵物: </Label>
            <Text color="black" f="1rem">
            ✔
            </Text>
          </Cell>
<<<<<<< HEAD
          <LineText> <Text f={3}>其他</Text> </LineText>          
          <Cell px={4} py={1} width={1 / 3}>
            <Label f={4}>發布日期</Label>
=======
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}>睇樓:</Label>
>>>>>>> 8106b096a873a2311186a65a6744493c27db0d68
            <Text color="black" f="1rem">
            ✔
            </Text>
          </Cell>

          <LineText> <Text f={3}>其他</Text> </LineText>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}> 出售形式: </Label>
            <Text color="black" f="1rem">
            連租約 
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}> 睇樓日期： </Label>
            <Text color="black" f="1rem">
            1月20日 
            </Text>
          </Cell>
<<<<<<< HEAD
          <LineText> <Text f={3}>你的决定</Text> </LineText>          
          <Box px={3} py={1} width={1} my={0}>
            <ButtonOutline width={4/5} children="96181448" f={5}/>
          </Box>
          <Box px={3} py={1} width={1} my={0}>
            <ButtonCircle width={4/5} children="Whatsapp"  f={5} bg="gray" />
          </Box>
          <Box px={3} py={1} width={1} my={0}>
            <ButtonOutline width={4/5} children="Exit"  f={5}/>
=======
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}>更新時間:</Label>
            <Text color="black" f="1rem">
            2分鐘前
            </Text>
          </Cell>       
          <LineText> <Text f={3}>聯絡方式</Text> </LineText>     
          <Cell px={2} py={1} width={1 / 3}>
          <Label f={4}> 資訊來源: </Label>
          <Text color="black" f="0.6rem">
          地產代理
          </Text>
        </Cell>
        <Cell px={2} py={1} width={1/ 3}>
          <Label f={4}>聯絡人:</Label>
          <Text color="black" f="0.6rem">
          Gordon Wong
          </Text>
        </Cell>    
        <Cell px={2} py={1} width={1 / 3}>
        <Label f={4}>經驗評級 </Label>
        <Flex>
        <Star checked color="blue"/>
        <Star checked color="blue"/>
        <Star checked color="blue"/>
        <Star half color="blue"/>
        <Star color="blue"/>
      </Flex> 
    </Cell>  
          <Box px={2} py={1} width={1} my={0}>
            <ButtonOutline width={1} children="96181448" f={5}/>
          </Box>
          <Box align='center' px={4} py={1} width={1} my={0}>
            <ButtonCircle width={1} children="Whatsapp"  f={5} bg="gray" />
          </Box>
          <Box px={2} py={1} width={1} my={0}>
            <ButtonOutline width={1} children="Exit"  f={5}/>
>>>>>>> 8106b096a873a2311186a65a6744493c27db0d68
          </Box>
        </Flex>
      </MrCard>
    );
  }
}

{
  /* <Carousel.GenericContainer 
               className="cmui-GenericContainer"
               opened="true"
               width="100%">
                <Carousel.Title className="cmui-Title" isFirst={isFirst} isLast={isLast}>{p.addressLocationLabel}/{p.nameOfBuildingLabel}</Carousel.Title>
                <Carousel.SubTitle className="cmui-SubTitle">{p.roleName} : {p.contactNameLabel}</Carousel.SubTitle>
                <Carousel.Content>
                <Carousel.LineText> Agent Buy Property </Carousel.LineText>
                <Carousel.ContentItem>: {p.buyBudgetMaxLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.partitionLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.isPetAllowedLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.isViewAbleLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.howFresh}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.dayListed}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.isSaleWithLeaseLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.earlyTimeToViewLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>: {p.dueDayLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>f:{p.fbid}-r:{p.relatedFbid}</Carousel.ContentItem>
                <Carousel.Toggle/>
                </Carousel.Content>
                {
                    onCall && <Carousel.Button className="cmui-Button" onClick={ () => onCall( p.contactPhone ) } first> { p.contactPhone} </Carousel.Button>
                }
                {
                    onWhatsapp && <Carousel.Button className="cmui-Button" onClick={ () => onWhatsapp( p.contactPhone ) } first> whatsapp { p.contactPhone} </Carousel.Button>
                }
                {
                    onTriggetNext && <Carousel.Button className="cmui-Button" onClick={ () => onTriggetNext() } first> triggetNext </Carousel.Button>
                }
            </Carousel.GenericContainer> */
}

{
  /* <Title className="cmui-Title">迎海 Double Cove</Title>
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
                <Button className="cmui-Button" onClick={ () => onClick() } first> Call 96181448 </Button> */
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
  isLast: PropTypes.bool
};

AgentBuyProperty.defaultProps = {
  steps: undefined,
  triggerNextStep: false,
  status: undefined,
  fStatus: undefined,
  property: undefined,
  isFirst: false,
  isLast: false
};

{
  /* <GenericContainer className="cmui-GenericContainer">
               <Title className="cmui-Title">Title</Title>
               <SubTitle className="cmui-SubTitle">SubTitle</SubTitle>
               <Content className="cmui-Content">Content</Content>
               <Footer className="cmui-Footer">Footer</Footer>
           </GenericContainer> */
}
