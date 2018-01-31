import styled from 'styled-components';
// import theme from './theme';
import {Card as RebassCard } from 'rebass';

const Card = RebassCard.extend`
    border-radius: 15px;
    background-color: white;   
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.125);
`

export default Card;