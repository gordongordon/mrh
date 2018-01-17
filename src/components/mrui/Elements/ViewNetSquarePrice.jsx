import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text } from 'rebass';

const ViewNetSquarePrice = ({ value }) => (
    <Cell px={2} py={1} width={1 / 4}>
        <Label f={4}>實用呎價:</Label>
        <Text fontSize="0.9rem" color="black">
            ${value}k
    </Text>
    </Cell>
);

ViewNetSquarePrice.defaultProps = {
    value: 0
};

ViewNetSquarePrice.propTypes = {
    value: PropTypes.number.isRequired
};

export default ViewNetSquarePrice;