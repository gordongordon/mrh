import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text} from 'rebass';
//import MrCheckbox from './MrCheckbox';

const ViewLeaseTaxInclusive = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
  <Label f={4}>租金包含: </Label>
  <Label f={4} color="black">
  { value ? '✔' : '❌'}差餉 { value ? '✔' : '❌'}管理費
  </Label>
<Label f={4} color="black">
{ value ? '✔' : '❌'}地租 { value ? '✔' : '❌'}地稅
</Label>
</Cell>
);

ViewLeaseTaxInclusive.defaultProps = {
  value: false
};

ViewLeaseTaxInclusive.propTypes = {
  value: PropTypes.bool.isRequired
};

export default ViewLeaseTaxInclusive;