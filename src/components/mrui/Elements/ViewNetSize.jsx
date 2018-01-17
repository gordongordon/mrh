import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewNetSize = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>實用面積:</Label>
    <Text fontSize="0.9rem" color="black">
      {value}呎
    </Text>
  </Cell>
);

ViewNetSize.defaultProps = {
  value: -1
};

ViewNetSize.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewNetSize;