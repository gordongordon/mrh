import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Label, Text, Flex, Star } from 'rebass';


const ViewAgentStar = ({ value }) => (
    <Cell px={2} py={1} width={1 / 4}>
        <Label f={4}>經驗評級 </Label>
        <Flex>
            {(() => {
                let row = [];
                let i;
                for (i = 0; i <= value; i++) {
                    row.push(<Star checked bg="blue" />);
                }
                return row;
            })()}

        </Flex>
    </Cell>
);

ViewAgentStar.defaultProps = {
    value: 0
};

ViewAgentStar.propTypes = {
    value: PropTypes.number.isRequired
};

export default ViewAgentStar;