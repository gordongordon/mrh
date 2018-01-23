import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Checkbox, Text} from 'rebass';

const ViewLeaseTaxInclusive = ({ value }) => (
  <Cell px={2} py={1} width={1 / 4}>
  <Label f={4}>租金包含: </Label>
  <Label>
	<Checkbox defaultChecked f={28}/>
	差餉/管理費
</Label>
<Label>
	<Checkbox defaultChecked f={28}/>
	地租/地稅
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