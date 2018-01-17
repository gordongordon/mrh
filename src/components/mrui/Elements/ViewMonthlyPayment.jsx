import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text, Tooltip} from 'rebass';

const ViewMonthlyPayment = ({ value }) => (
          <Cell px={2} py={1} width={1 / 4}>
          <Tooltip text="">
            <Label f={4}> 每月供款: </Label>
            <Text color="black" f="0.8rem">
              ${value}
            </Text>
          </Tooltip>
        </Cell>
);

ViewMonthlyPayment.defaultProps = {
    value: 0
};

ViewMonthlyPayment.propTypes = {
    value: PropTypes.number.isRequired
};

export default  ViewMonthlyPayment;