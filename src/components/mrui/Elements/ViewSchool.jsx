import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';  
import { Label, Text } from 'rebass';

const ViewSchool = ({ primary, secondary }) => (
          <Cell px={2} py={1} width={1 / 4}>
          <Label f={4}>學校網: </Label>
          <Text color="black" f="0.5rem">
          小學:{primary}
          </Text>
          <Text color="black" f="0.5rem" p={0}>
          中學:{secondary}
          </Text>
        </Cell>
);

ViewSchool.defaultProps = {
  primary : 95,
  secondary: '馬鞍山區',
};

ViewSchool.propTypes = {
  primary: PropTypes.number.isRequired,
  secondary: PropTypes.string.isRequired
};

export default ViewSchool;