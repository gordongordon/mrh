import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text, Tooltip } from 'rebass';

const ViewDayListed = ({ value }) => (
         <Cell px={2} py={1} width={1 / 4}>
         <Label f={4}>上載時間:</Label>
         <Text color="black" f="0.8rem">
           {value}
         </Text>
       </Cell>
);

ViewDayListed.defaultProps = {
    value: "none"
};

ViewDayListed.propTypes = {
    value: PropTypes.string.isRequired
};

export default ViewDayListed;