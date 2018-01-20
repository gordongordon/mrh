import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewHasHomeHardware = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
  <Label f={4}> 傢俬:  </Label>
  <Text fontSize="0.9rem" color="black">
    { value ? '✔' : '❌'}
  </Text>
</Cell>
);

ViewHasHomeHardware.defaultProps = {
  value: false
};

ViewHasHomeHardware.propTypes = {
  value: PropTypes.bool.isRequired
};

export default ViewHasHomeHardware;