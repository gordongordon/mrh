import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewIncome = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>收入範圍: </Label>
    <Text fontSize="0.9rem" color="black">
      ${value}
    </Text>
  </Cell>
);

ViewIncome.defaultProps = {
  value: -1
};

ViewIncome.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewIncome;