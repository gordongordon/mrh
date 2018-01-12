import React from "react";
import {
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
import Cell from "../AgentBuyPRoperty/Cell";
import LineText from '../Elements/LineText';
import MrCard from '../Elements/MrCard';
// 出售樓盤: 龍苑, 九龍塘

// ————重點————
// 出售價(萬元): $588
// 實用面積(呎): 344
// 單位間隔: 2房1廳
// ————特徵————
// 樓層: 中
// 養寵物: ✔
// 睇樓: ✔
// ————其他————
// 出售形式: 連租約
// 睇樓日期：1月20日
// 更新時間: 2分鐘前
// ————聯絡方式————
// 代理人：Gordon 
// CALL 98765374
// Whatsapp 98765374
// Exit window
const HouseView = props => (
  <MrCard w={19 / 20}>
        <Flex wrap mx={1} my={1}>
          <Box px={2} py={1} width={1} my={0}>
            <Text p={1} color="white" bg={["blue", "green"]}>
            出售樓盤: ：龍苑, 九龍塘
            </Text>
          </Box>
          <LineText> <Text f={3}>重點</Text> </LineText>
          <Cell px={2} width={1 / 3}>
            <Label f={4}>出售價(萬元):</Label>

            <Text color="black" f="1rem">$588</Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label color="black" f={4}>實用面積(呎):</Label>
            <Text color="black" f="1rem">
              344
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
            中
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}> 養寵物: </Label>
            <Text color="black" f="1rem">
            ✔
            </Text>
          </Cell>
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}>睇樓:</Label>
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
          <Cell px={2} py={1} width={1 / 3}>
            <Label f={4}>更新時間:</Label>
            <Text color="black" f="1rem">
            2分鐘前
            </Text>
          </Cell>       
          <LineText> <Text f={3}>你的决定</Text> </LineText>     
          <Box px={2} py={1} width={1 / 3} my={0}>
            <Text p={1} color="black">
              姓名:
            </Text>
          </Box>

          <Box px={2} py={1} width={1 / 3} my={0} />

          <Box px={2} py={1} width={1 / 3} my={0}>
            <Text p={1} color="black">
              Gordon
            </Text>
          </Box>     
          <Box px={2} py={1} width={1} my={0}>
            <ButtonOutline width={1} children="96181448" f={5}/>
          </Box>
          <Box align='center' px={4} py={1} width={1} my={0}>
            <ButtonCircle width={1} children="Whatsapp"  f={5} bg="gray" />
          </Box>
          <Box px={2} py={1} width={1} my={0}>
            <ButtonOutline width={1} children="Exit"  f={5}/>
          </Box>
        </Flex>
      </MrCard>
);

export default HouseView;
