import React from 'react';
import { Layout,Row,Col,} from 'antd';
import styled from 'styled-components';
import LandingHeader from './Header';
import BackgroundImage from '../../assests/images/mainbackground.jpg';
import kaigen from '../../assests/images/kaigen.png'
import GooglePlay from '../../assests/images/googleplay.png';
import AppStore from '../../assests/images/appstore.png';
import LandingImage1 from '../../assests/images/LandingImage1.png';
import LandingImage2 from '../../assests/images/LandingImage2.png'     ;
import LandingImage3 from '../../assests/images/LandingImage3.jpeg';
import ImageList from './ImageList'
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
                        <ImageList
                              image={LandingImage1}
                              Heading="Many fees are waived"
                              description="We have trading "
                              name="list1"
                        />
                        <ImageList
                              image={LandingImage2}
                              Heading="Start with as little as 100 INR"
                              description="You can buy and sell small amounts of 12 popular Virtual Currencies including Bitcoin, Ripple (XRP), Monacoin, and Ethereum."
                              name="list2"
                        />
                        <ImageList
                              image={LandingImage3}
                              Heading="Easy-to-use trading interfaces"
                              description="We have trading interfaces that are simple enough for beginners. Trading is available any time, anywhere; even on weekends and national holidays."
                              name="list3"
                        />
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
 const ContentRow2 = styled.div`
        padding-top: 70px;
        background-color: #ffffff;
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

`

export default LandingPageContent
