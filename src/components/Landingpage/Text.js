import React from 'react';
import styled from 'styled-components';

export const H3 =styled.h3`
       font-size: 16px;
       font-weight: 700;
       margin: 0px;
` 

export const H2 =styled.h2`
       font-size: 18px;
       font-weight: 700;
       margin: 0px;
       line-height: 20px;
` 

export const Paragraph = styled.p`
           font-size: 14px;
           line-height: 20px;
           color: ${props => props.color ? props.color :'#000000'};
`