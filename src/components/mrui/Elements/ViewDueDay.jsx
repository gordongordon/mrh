import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text, Tooltip } from 'rebass';

const ViewDueDay = ({ value }) => (
         <Cell px={2} py={1} width={1 / 4}>
         <Label f={4}>交吉/入住日期:</Label>
         <Text color="black" f="0.8rem">
           {value}
         </Text>
       </Cell>
);

ViewDueDay.defaultProps = {
    value: "none"
};

ViewDueDay.propTypes = {
    value: PropTypes.string.isRequired
};

export default ViewDueDay;