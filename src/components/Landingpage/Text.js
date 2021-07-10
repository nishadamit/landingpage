import React from 'react';
import styled from 'styled-components';



export const H2 =styled.h2`
       font-size: 19px;
       font-weight: 500;
       margin: 0px;
       line-height: 24px;
` 

export const H3 =styled.h3`
       font-size: 20px;
       line-height: 16px;
       margin: 0px;
       color: #313337;
` 
export const H5 =styled.h5`
       font-size: 14px;
       font-weight: 300;
       margin: 0px;
       line-height: 20px;
` 

export const Paragraph = styled.p`
           font-size: 16px;
           line-height: 20px;
           color: ${props => props.color ? props.color :'#000000'};
`