import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewLeasingPeriod = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>租期:</Label>
    <Text fontSize="0.9rem" color="black">
      {value}月
    </Text>
  </Cell>
);

ViewLeasingPeriod.defaultProps = {
    value: -1
};

ViewLeasingPeriod.propTypes = {
    value: PropTypes.number.isRequired
};


export default ViewLeasingPeriod;