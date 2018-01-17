import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text } from 'rebass';

const ViewPartition = ({ room, livingRoom, bathRoom }) => (
    <Cell px={2} py={1} width={1 / 4}>
        <Label f={4}>單位間隔:</Label>
        <Text fontSize="0.7rem" color="black">
            {room}房{livingRoom}廳{bathRoom}廁
  </Text>
    </Cell>
);

ViewPartition.defaultProps = {
    room: 0,
    livingRoom: 0,
    bathRoom: 0
};

ViewPartition.propTypes = {
    room: PropTypes.number.isRequired,
    livingRoom: PropTypes.number.isRequired,
    bathRoom: PropTypes.number.isRequired
};

export default ViewPartition;