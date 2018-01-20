import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text, Tooltip } from 'rebass';

const ViewEarlyTimeToView = ({ value }) => (
         <Cell px={2} py={1} width={1 / 4}>
         <Label f={4}>最快可睇樓:</Label>
         <Text color="black" f="0.8rem">
           {value}
         </Text>
       </Cell>
);

ViewEarlyTimeToView.defaultProps = {
    value: "none"
};

ViewEarlyTimeToView.propTypes = {
    value: PropTypes.string.isRequired
};

export default ViewEarlyTimeToView;