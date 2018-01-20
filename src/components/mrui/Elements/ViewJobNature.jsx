import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewJobNature = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>職業:</Label>
    <Text fontSize="0.9rem" color="black">
      {value}
    </Text>
  </Cell>
);

ViewJobNature.defaultProps = {
  value: "null"
};

ViewJobNature.propTypes = {
  value: PropTypes.string.isRequired
};

export default ViewJobNature;