import React from 'react';
import styled from 'styled-components';
import { ImageBox } from './Image';
import { H3,Paragraph } from './Text';

export const Card =(props) =>{
      return(
         <CardContainer>
                  <ImageBox 
                        source={props.source}
                        WIDTH="100%"
                        HEIGHT="150px"
                  />
                  <ContentWrapper>
                    <H3>{props.Heading}</H3>
                    <Paragraph>{props.Description}</Paragraph>
                  </ContentWrapper>
         </CardContainer>
      )
}

const CardContainer = styled.div`
      width: 300px;
      background-color: #ffffff;
`
const ContentWrapper = styled.div`
      padding: 20px 10px;
`