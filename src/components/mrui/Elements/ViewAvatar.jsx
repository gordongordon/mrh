import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';  
import { Avatar } from 'rebass';

const ViewAvatar = ({ value }) => (
<Cell px={2} py={1} width={1 / 4}>
<Avatar
  size={100}
  src={value}
/>
</Cell>
);

export default ViewAvatar;