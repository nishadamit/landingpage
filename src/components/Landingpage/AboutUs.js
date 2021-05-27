import React from 'react';
import { Layout,Row,Col,} from 'antd';
import styled from 'styled-components';
const {   Content, } = Layout;

const AboutUs = () =>{
    return(
        <AboutUsWrapper id="aboutus">
            <Row>
                <ColWrapper lg={{offset:3,span:18}}>
                        <AboutUsHeading>About Us</AboutUsHeading>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                        <p>We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays.</p>
                </ColWrapper>
            </Row>
             
        </AboutUsWrapper>
    )
}

const AboutUsWrapper = styled(Content)`
       background-color: #1e2841;
       color: #ffffff;
`
const ColWrapper  = styled(Col)`
         border: 2px solid #ffffff;
         position: relative;
         margin-top: 40px;
         margin-bottom: 40px;
         padding: 25px;
`
const AboutUsHeading = styled.h1`
         color: #ffffff;
         position: absolute;
         top: -17px;
         text-align: center;
         left: 10%;
         background-color: #1e2841;
         padding: 0px 10px;
`

export default AboutUs