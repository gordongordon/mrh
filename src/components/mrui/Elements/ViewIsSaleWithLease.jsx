import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text, Tooltip } from 'rebass';

const ViewIsSaleWithLease = ({ value }) => (
    <Cell px={2} py={1} width={1 / 4}>
        <Tooltip text="買賣連租賃- 樓盤已經簽咗一份租約俾人">
            <Label f={4}>出售形式:</Label>
            <Text color="black" fontSize="0.9rem">
                {value ? '連租約' : '交吉賣'}
            </Text>
        </Tooltip>
    </Cell>
);

ViewIsSaleWithLease.defaultProps = {
    value: false
};

ViewIsSaleWithLease.propTypes = {
    value: PropTypes.bool.isRequired
};

export default ViewIsSaleWithLease;