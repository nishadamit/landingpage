import React from 'react';
import { Col, Card,} from 'antd';
import styled from 'styled-components';
import { LinkedinOutlined } from '@ant-design/icons';
import { ImageBox } from './Image';
import { H2 } from './Text';
import { Paragraph } from './Text';
const { Meta } = Card;

const OurteamCard = ({details}) =>{
        return(
            <Col lg={{span:24}} md={{span:24}} sm={{span:22}} xs={{span:22}}>
                <StyledCard>
                      <ImageContainer>
                            <ImageBox 
                                    alt={details.name}
                                    source={details.image}
                                    WIDTH="100px"
                                    HEIGHT="100px"
                                    borderRadius="50%"
                            />
                       </ImageContainer>
                       <CardContainer>
                            <H2>{details.name}</H2>
                            <Paragraph>{details.desiganation}</Paragraph>
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

const CardContainer = styled.div`
          margin-left: 20px;
`

const ImageContainer = styled.div`
         border-radius: 50%;
         height: 100px;
         width: 100px;
`

export default OurteamCard