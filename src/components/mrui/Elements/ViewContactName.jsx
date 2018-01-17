import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewContactName = ({ value }) => (
          <Cell px={2} py={1} width={1 / 4}>
          <Label f={4}>聯絡人:</Label>
          <Text color="black" f="0.6rem">
            {value}
          </Text>
        </Cell>
);

export default ViewContactName;