import React from 'react';
import { Col, Card,} from 'antd';
import styled from 'styled-components';
import { ImageBox } from './Image';
import { H2,H5 } from './Text';
import { CardParagraph } from './Checklistparagraph';
import { AiFillLinkedin } from 'react-icons/ai'

const OurteamCard = ({details}) =>{
        return(
            <Col lg={{span:24}} md={{span:24}} sm={{span:22}} xs={{span:22}}>
                <StyledCard>
                      <ImageContainer>
                            <ImageBox 
                                    alt={details.name}
                                    source={details.image}
                                    WIDTH="100%"
                                    HEIGHT="100% !important"
                                    borderRadius="50%"
                            />
                       </ImageContainer>
                       <CardContainer>
                            <Title>{details.name}</Title>
                            <CardParagraph>{details.desiganation}</CardParagraph>
                            <AiFillLinkedin size="1.3rem" color="#1686B0" />
                       </CardContainer>
                </StyledCard>
            </Col>
        )
}

const StyledCard = styled.div`
           display: flex;
           align-items: center;
           margin-top: 30px;
`
const Title =styled.h2`
       font-size: 24px;
       margin: 0px;
       line-height: 24px;
       color: #4F5056;
` 

const CardContainer = styled.div`
          margin-left: 10px;
          flex-basis: 53%;
`

const ImageContainer = styled.div`
         border-radius: 50%;
         height: 136px;
         width:  136px;
`

export default OurteamCard