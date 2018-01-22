import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text } from 'rebass';

const ViewNetSquareLeasePrice = ({ value }) => (
    <Cell px={2} py={1} width={1 / 4}>
        <Label f={4}>實用呎租:</Label>
        <Text fontSize="0.9rem" color="black">
            ${value}
    </Text>
    </Cell>
);

ViewNetSquareLeasePrice.defaultProps = {
    value: 0
};

ViewNetSquareLeasePrice.propTypes = {
    value: PropTypes.number.isRequired
};

export default ViewNetSquareLeasePrice;