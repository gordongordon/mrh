import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewLeaseDeposit = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>按金:</Label>
    <Text fontSize="0.9rem" color="black">
      {value}個月租金
    </Text>
  </Cell>
);

ViewLeaseDeposit.defaultProps = {
  value : 0
};

ViewLeaseDeposit.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewLeaseDeposit;