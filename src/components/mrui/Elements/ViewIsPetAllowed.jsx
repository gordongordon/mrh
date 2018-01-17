import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewIsPetAllowed = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}> 養寵物: </Label>
    <Text fontSize="0.9rem" color="black">
      { value ? '✔' : '❌'}
    </Text>
  </Cell>
);
export default ViewIsPetAllowed;