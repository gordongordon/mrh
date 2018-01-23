import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewNumOfPeopleLiving = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>同居人數: </Label>
    <Text fontSize="0.9rem" color="black">
      {value}人
    </Text>
  </Cell>
);

ViewNumOfPeopleLiving.defaultProps = {
  value: -1
};

ViewNumOfPeopleLiving.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewNumOfPeopleLiving;