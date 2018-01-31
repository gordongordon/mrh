import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewSalePrice = ({ value, f }) => (
  <Cell px={2} py={1} width={1 / 4}>
    <Label f={3}>出售價(萬元):</Label>
    <Text fontSize="0.9rem" color="black">
      ${value}
    </Text>
  </Cell>
);

ViewSalePrice.defaultProps = {
  value : 0
};

ViewSalePrice.propTypes = {
  value: PropTypes.number.isRequired
};

export default ViewSalePrice;