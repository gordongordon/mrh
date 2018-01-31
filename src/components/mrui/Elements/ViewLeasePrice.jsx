import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';
import SpecialCell from './SpecialCell';

const ViewLeasePrice = ({ value }) => (
  <SpecialCell px={2} py={1} width={1 / 4}>
    <Label f={4}>租金(元):</Label>
    <Text fontSize="0.9rem" color="black">
      ${value}
    </Text>
  </SpecialCell>
);

ViewLeasePrice.defaultProps = {
  value : 0
};

ViewLeasePrice.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewLeasePrice;