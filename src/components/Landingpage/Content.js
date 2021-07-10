import React from 'react';
import { Layout,Row,Col,} from 'antd';
import styled from 'styled-components';
import LandingHeader from './Header';
import { Card } from './Card';
import BackgroundImage from '../../assests/images/mainbackground.jpg';
import kaigen from '../../assests/images/kaigen.png'
import GooglePlay from '../../assests/images/googleplay.png';
import AppStore from '../../assests/images/appstore.png';
import CardImg1 from '../../assests/images/card-img1.png';
import CardImg2 from '../../assests/images/card-img2.png';
import CardImg3 from '../../assests/images/card-img3.png';
import LandingTabs from './Tabs';
import ImageCrousel from './Crousel';
const {   Content, } = Layout;


const LandingPageContent = () =>{
      return(
          <Content>
                <ContentRow color="#1e2841" padding="55px">
                   <ImageCrousel />
                   <BackgroundOverlay>
                              <LandingHeader />
                              <Col lg={{span:7,offset:3}} md={{span:9,offset:2}} sm={{span:22}} xs={{span:22,offset:1}}>
                                    <LandingTabs/>
                              </Col>
                              <Col lg={{offset:6,span:8}}  md={{span:12,offset:1}} sm={{span:20,offset:2}} xs={{span:20,offset:2}}>
                                    <Header2right >
                                    <div>
                                          <Heading>Virtual Currency on</Heading>
                                          <div>
                                                <ImageStyle src={kaigen} width='200px' />
                                          </div>
                                          <div>
                                                <a  href={() => false} ><ImageStyle src={GooglePlay} width='160px' /></a>
                                                <a  href={() => false} ><ImageStyle src={AppStore} width='120px' /></a>
                                          </div>
                                    </div>
                                    </Header2right>
                              </Col>
                     </BackgroundOverlay>
                </ContentRow>
                <ContentRow2>
                        <Col lg={{span:6,offset:2}} md={{span:8}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                              <Card 
                                    name="card1"
                                    source={CardImg1}
                                    Heading = "MANY FEES ARE WAIVED"
                                    Description="You can buy and sell small amounts of 12 popular Virtual Currencies including Bitcoin, Ripple (XRP), Monacoin, and Ethereum."
                              />
                        </Col>
                        <Col lg={{span:6,offset:1}} md={{span:8}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                              <Card 
                                    name="card2"
                                    source={CardImg2}
                                    Heading = "Start with as little as 100 INR"
                                    Description="You can buy and sell small amounts of 12 popular Virtual Currencies including Bitcoin, Ripple (XRP), Monacoin, and Ethereum."
                              />
                              </Col>
                        <Col lg={{span:6,offset:1}} md={{span:8}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                              <Card 
                                    name="card3"
                                    source={CardImg3}
                                    Heading = "Easy-to-use trading interfaces"
                                    Description="We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays."
                              />
                        </Col>
                </ContentRow2>
          </Content>
      )
}


const ContentRow = styled(Row)`
        /* background-image:url(${BackgroundImage});
        background-repeat: no-repeat; */
        height: 100vh;
        /* background-position: center;
        background-size: cover;
        background-color: #000000; */
 `
 const ContentRow2 = styled(Row)`
        padding: 70px 0px;
        background-color: #F3F2F5;
        @media(max-width:576px){
            padding: 0px 0px 20px 0px;
        }
`
const Header2right = styled.div`
            height: 350px;
            background-position: 62%;
            
`
const ImageStyle = styled.img`
         width: ${props => props.width};
`
const Heading = styled.h1`
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
`
const BackgroundOverlay = styled(Row)`
        width: 100%;
        background-color: #000000b0;
        z-index: 2;
        height: 100%;

`

export default LandingPageContent
