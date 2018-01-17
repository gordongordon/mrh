import styled from 'styled-components';
import {Cell} from './Cell';
import { Label , Text } from 'rebass';

const ViewSalePrice = ({price}) => (
    <Cell px={2} py={1} width={1 / 4}>
    <Label f={4}>出售價(萬元):</Label>
    <Text fontSize="0.9rem" color="black">
    {`$ ${price}`}
    </Text>
  </Cell>
   );


export default ViewSalePrice;
