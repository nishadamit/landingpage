import React from 'react';
import styled from 'styled-components';
import { ImageBox } from './Image';
import { H3,H5 } from './Text';
import Checklistparagraph from './Checklistparagraph';
import { CardParagraph } from './Checklistparagraph';

export const Card =(props) =>{
      return(
         <CardContainer>
                  <ImageBox 
                        source={props.source}
                        WIDTH="100%"
                  />
                  <ContentWrapper>
                    <Heading>{props.Heading}</Heading>
                    {props.name === "card1" ? <Checklistparagraph /> :<CardParagraph>{props.Description}</CardParagraph>}
                  </ContentWrapper>
         </CardContainer>
      )
}

const CardContainer = styled.div`
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      @media(max-width:576px){
            margin-top: 20px;
        }
`

const Heading =styled.h3`
       font-size: 20px;
       line-height: 16px;
       margin: 0px;
       color: #313337;
       margin-bottom: 10px;
` 

const ContentWrapper = styled.div`
      padding: 25px 15px;
`