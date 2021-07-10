import React from 'react';
import styled from 'styled-components';
import { TiTick } from 'react-icons/ti';
import { H5 } from './Text';

const DATA = [
    {id:1,title:"No fees for account creation"},
    {id:2,title:"No fees for account maintenance"},
    {id:3,title:"No fees on Buy/Sell"},
    {id:4,title:"No fees on Bitcoin-FX trades"},
    {id:5,title:"No fees on INR deposits through SBI Sumishin Net Bank to HDFC Bank"},
]

const Checklistparagraph = () =>{
       return(
           <div>
               {DATA.map((data) =>{
                   return(
                       <DivWrapper>
                           <TiTick size="1.2rem" color="#41aa3d" style={{marginRight:"10px"}} />
                           <Paragraph>{data.title}</Paragraph>
                       </DivWrapper>
                   )
               })}
               
               
           </div>
       )
}
const DivWrapper = styled.div`
      display: flex;
`
const Paragraph =styled.h5`
       font-size: 14px;
       font-weight: 300;
       margin: 0px;
       line-height: 20px;
       flex-basis: 90%;
` 

export default Checklistparagraph




