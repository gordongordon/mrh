import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'rebass';
import styled from 'styled-components';

const MrCheckbox = styled(Checkbox).attrs({
    type: 'checkbox',
    readonly : 'readonly',
    check: 'true',
    disabled: 'false'
  })`
  -ms-transform: scale(2); 
  -moz-transform: scale(2); 
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  cursor: not-allowed;
  :disabled {
    background:#dddddd;
  }`;


export default MrCheckbox;