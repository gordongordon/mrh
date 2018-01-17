import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewLevel = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}> 樓層: </Label>
    <Text fontSize="0.9rem" color="black">
      {value}
    </Text>
  </Cell>
);

ViewLevel.defaultProps = {
  value: "none"
};

ViewLevel.propTypes = {
  value: PropTypes.string.isRequired
};

export default ViewLevel;