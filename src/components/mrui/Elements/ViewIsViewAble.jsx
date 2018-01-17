import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text, Tooltip } from 'rebass';

const ViewIsViewAble = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
  <Label f={4}> 睇樓: </Label>
  <Text fontSize="0.9rem" color="black">
    { value ? '✔' : '❌'}
  </Text>
</Cell>
);

ViewIsViewAble.defaultProps = {
    value: false
};

ViewIsViewAble.propTypes = {
    value: PropTypes.bool.isRequired
};

export default ViewIsViewAble;