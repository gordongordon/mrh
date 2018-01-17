// src/blocks/Card/index.js
import React from "react";
import defaultTheme from "../theme";
import PropTypes from "prop-types";
//import Carousel from "../Carousel/index";
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

import { 
  Cell,
  LineText,
  Card,
  TextHeader,
  ButtonOutline,
  ViewSalePrice
} from '../Elements';

export class AgentBuyProperty extends React.Component {

  static displayName = 'AgentBuyProperty';

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

  //   <Box px={2} py={1} width={1} my={0}>
  //   <TextHeader p={1} color="white" bg={["blue", "#F55869"]}>
  //     出售樓盤: 龍苑, 九龍塘
  //     <Relative>
  // <Absolute bottom right>
  // <Pre>
  // 編號:MOS-0001</Pre>
  // </Absolute>
  // </Relative>
  //   </TextHeader>
  // </Box>

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
        <Heading>
          <TextHeader p={1} color="white" bg={["blue", "#F55869"]}>
          心儀樓盤: 龍苑, 九龍塘
            <Relative>
              <Absolute bottom right>
                <Pre>編號:MOS-0001</Pre>
              </Absolute>
            </Relative>
          </TextHeader>
        </Heading>
        {BackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
          <LineText>
            <Text f={3}>重點</Text>
          </LineText>


          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4} bold>
              實用面積:
            </Label>
            <Text fontSize="0.9rem" color="black">
              344呎
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>實用呎價:</Label>
            <Text fontSize="0.9rem" color="black">
              $13k
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>單位間隔: </Label>
            <Text fontSize="0.9rem" color="black">
              2房1廳
            </Text>
          </Cell>

          <LineText>
            <Text f={3}>特徵</Text>
          </LineText>

          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}> 樓層: </Label>
            <Text color="black" f="0.9rem">
              中層
            </Text>
          </Cell>

          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}> 養寵物: </Label>
            <Text color="black" fontSize="0.9rem">
              ✔
            </Text>
          </Cell>

          <Cell px={2} py={1} width={1 / 4}>
            <Label f={4}>睇樓:</Label>
            <Text color="black" fontSize="0.9rem">
              ✔
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
            <Text f={3}>其他</Text>
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
            <Label f={4}> 睇樓日期： </Label>
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
              <Label f={4}> 每月供款: </Label>
              <Text color="black" f="0.8rem">
                $19K
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

//export const AgentBuyProperty = AgentBuyProperty;
//

{
  /* <Box px={3} py={1} width={1} my={0}>
            <MrButtonOutline width={1} children="96181448" f={5} color="#F55869"/>
          </Box>
          <Box px={3} py={1} width={1} my={0}>
            <MrButtonOutline  width={1} children="Whatsapp" f={5} color="#F55869"/>
          </Box>
          <Box px={3} py={1} width={1} my={0}>
            <MrButtonOutline  width={1} children="Exit" f={5} color="#F55869"/>
          </Box> */
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
