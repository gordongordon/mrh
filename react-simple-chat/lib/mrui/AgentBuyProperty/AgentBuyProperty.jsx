// src/blocks/Card/index.js
import React from "react";
import defaultTheme from "../theme";
import PropTypes from "prop-types";
import Carousel from "../Carousel/index";
import {
  ButtonOutline,
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
          </Box>

          <Box px={2} py={1} width={1 / 3} my={0} />

          <Box px={2} py={1} width={1 / 3} my={0}>
            <Text p={1} color="black">
              Gordon
            </Text>
          </Box>
          <LineText> <Text f={3}>特徵</Text> </LineText>
          <Cell px={4} width={1 / 3}>
            <Label f={4}>會養物</Label>

            <Text color="black" f="1rem">{p.isPetAllowedLabel}</Text>
          </Cell>

          <Cell px={4} width={1 / 3}>
            <Label f={4}>-會養物-</Label>

            <Text color="black" f="1rem">會</Text>
          </Cell>
          <Cell px={4} py={1} width={1 / 3}>
              <Label f={4}>實用面積</Label>
            <Text color="black" f="1rem">
              300呎
            </Text>
          </Cell>
          <LineText> <Text f={3}>特定日期</Text> </LineText>
          <Cell px={4} py={1} width={1 / 3}>
            <Label f={4}> 發布日期</Label>
            <Text color="black" f=".5rem">
            17年2月2日
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}> 放售形式 </Label>
            <Text color="black" f="1rem">
              買
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}>出租樓盤</Label>
            <Text color="black" f="1rem">
              No
            </Text>
          </Cell>
          <LineText> <Text f={3}>其他</Text> </LineText>          
          <Cell px={4} py={1} width={1 / 3}>
            <Label f={4}>發布日期</Label>
            <Text color="black" f="1rem">
              {p.dayListed}
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}> 單位間隔 </Label>
            <Text color="black" f="1rem">
            開放式
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label color="black" f={4}>預算上限</Label>
            <Text color="black" f="1rem">
              $300萬
            </Text>
          </Cell>
          <LineText> <Text f={3}>你的决定</Text> </LineText>          
          <Box px={3} py={1} width={1} my={0}>
            <ButtonOutline width={4/5} children="96181448" f={5}/>
          </Box>
          <Box px={3} py={1} width={1} my={0}>
            <ButtonCircle width={4/5} children="Whatsapp"  f={5} bg="gray" />
          </Box>
          <Box px={3} py={1} width={1} my={0}>
            <ButtonOutline width={4/5} children="Exit"  f={5}/>
          </Box>
        </Flex>
      </Card>
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
