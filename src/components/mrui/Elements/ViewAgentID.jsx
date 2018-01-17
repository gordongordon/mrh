import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewAgentID = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
  <Label f={4}> 資訊來源: </Label>
  <Text color="black" f="0.6rem">
    地產代理
  </Text>
  <Text color="black" f="0.5rem" p={0}>
    ({value})
  </Text>
</Cell>
);

export default ViewAgentID;