import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewIsFreeForSevenDay = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
  <Label f={4}> 七日免租期: </Label>
  <Text fontSize="0.9rem" color="black">
    { value ? '✔' : '❌'}
  </Text>
</Cell>
);

ViewIsFreeForSevenDay.defaultProps = {
  value: false
};

ViewIsFreeForSevenDay.propTypes = {
  value: PropTypes.bool.isRequired
};

export default ViewIsFreeForSevenDay;