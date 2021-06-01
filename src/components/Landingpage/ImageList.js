import React,{ useEffect } from 'react';
import { Row, Col,} from 'antd';
import styled from 'styled-components';
import Checklistparagraph from './Checklistparagraph';
import AOS from 'aos';


const ImageList = (props) =>{

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
        
       return(
              <ImageListWrapper data-aos="fade-up">
                    <ImageWrapperCol1 lg={{span:6,offset:5}} md={{span:6,offset:1}} sm={{span:18,offset:5}} xs={{span:18,offset:5}}>
                          <StyledImage 
                              src={props.image}
                              width="70%"
                              height="70%"
                          />
                    </ImageWrapperCol1>
                    {
                      props.name === 'list1' ?  
                        <Col lg={{offset:1 ,span:6}}   md={{  offset:2,span:15}} sm={{span:20,offset:4}} xs={{span:20,offset:3}} >
                            <Heading>{props.Heading}</Heading>
                                <ImageWrapperCol2 lg={{span:6,offset:5}} md={{span:6,offset:1}} sm={{span:18,offset:3}} xs={{span:18,offset:3}}>
                                    <StyledImage 
                                        src={props.image}
                                        width="70%"
                                        height="70%"
                                    />
                                </ImageWrapperCol2>
                            <Checklistparagraph
                                description="No fees for account creation"
                            />
                                <Checklistparagraph
                                description="No fees for account maintenance"
                            />
                                <Checklistparagraph
                                description="No fees on Buy/Sell"
                            />
                                <Checklistparagraph
                                description="No fees on Bitcoin-FX trades"
                            />
                                <Checklistparagraph
                                 description="No fees on INR deposits through SBI Sumishin Net Bank to HDFC Bank"
                            />
                        </Col>
                        :
                        <Col lg={{offset:1 ,span:6}} md={{  offset:2,span:15}}  sm={{span:20,offset:4}}  xs={{span:20,offset:3}} >
                                <Heading>{props.Heading}</Heading>
                                    <ImageWrapperCol2 lg={{span:6,offset:5}} md={{span:6,offset:1}} sm={{span:18,offset:3}} xs={{span:18,offset:3}}>
                                            <StyledImage 
                                                src={props.image}
                                                width="70%"
                                                height="70%"
                                            />
                                    </ImageWrapperCol2>
                                <Paragraph>{props.description}</Paragraph>
                        </Col>
                    }
              </ImageListWrapper>
       )
}

const ImageListWrapper = styled(Row)`
       padding-bottom: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
`
const StyledImage = styled.img`
       width: ${props =>props.width};
       height: ${props =>props.height};
`
const Heading = styled.h1`
        font-size: 30px;
        line-height: 36px;
        font-weight: 700;
`
const Paragraph = styled.span`
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
`
const ImageWrapperCol1 = styled(Col)`
           @media (max-width: 768px) {
                display: none;
           } 
`
const ImageWrapperCol2 = styled(Col)`
           @media (min-width: 768px) {
                display: none;
           } 
`




export default ImageList