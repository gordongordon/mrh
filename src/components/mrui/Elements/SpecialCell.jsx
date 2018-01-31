import styled from 'styled-components';
// import theme from './theme';
import {Box} from 'rebass';

const SpecialCell = Box.extend`
    position: absolute;
    right : 0;
    border-radius: 5px;
    color:  #808080;
    padding-left: 6px;
    padding-right: 0px;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: gray;  
    width: auto;
`
// border-style : solid;

export default SpecialCell;



