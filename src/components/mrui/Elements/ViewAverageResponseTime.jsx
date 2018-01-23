import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewAverageResponseTime = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>平均答應時間:</Label>
    <Text fontSize="0.9rem" color="black">
      {value}
    </Text>
  </Cell>
);

ViewAverageResponseTime.defaultProps = {
};

ViewAverageResponseTime.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewAverageResponseTime;