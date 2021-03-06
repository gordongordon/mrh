import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewBuyBudgetMax = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>預算(萬元):</Label>
    <Text fontSize="0.9rem" color="black">
      ${value}
    </Text>
  </Cell>
);

ViewBuyBudgetMax.defaultProps = {
  value : 0
};

ViewBuyBudgetMax.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewBuyBudgetMax;