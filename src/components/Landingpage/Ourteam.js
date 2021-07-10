import React,{ useEffect } from 'react';
import { Layout,Row,Col }  from 'antd';
import AOS from 'aos';
import styled from 'styled-components';
import OurTeamCard from './OurTeamCard';
import { Paragraph } from './Text';
import { ImageBox } from './Image';
const {   Content, } = Layout;


const TeamData = [
    {
        id:1,name:"Raj Kundan",
        desiganation:"Chief Executive Officer Co-Founder",
        image:"https://static.wixstatic.com/media/551b23_73ae5ca7c0cc4e23b031b3fd898ca145~mv2.jpg/v1/crop/x_0,y_0,w_156,h_157/fill/w_216,h_217,al_c,lg_1,q_80/Untitled_edited_edited.webp"
    },
    {
        id:2,
        name:"Sahil Soi",
        desiganation:"President \n Co-Founder",
        image:"https://static.wixstatic.com/media/551b23_88b6ccca5d8e4d19a01e7325fb9fb836~mv2.jpg/v1/crop/x_9,y_8,w_189,h_189/fill/w_216,h_217,al_c,lg_1,q_80/Untitled1_edited_edited_edited_edited_jp.webp"
    },
    {
        id:3,
        name:"Vikas Sharma",
        desiganation:"Head of Development Services",
        image:"https://static.wixstatic.com/media/551b23_84c616c1e62d45fd8cb7d67df4b95bdd~mv2.jpg/v1/fill/w_210,h_217,al_c,lg_1,q_80/Untitled21_edited_edited.webp"
    },
    // {
    //     id:4,
    //     name:"Sachin Kharat",
    //     desiganation:"Head of Technical Services",
    //     image:"https://static.wixstatic.com/media/551b23_d295df512b33430ca8f0f1ec39a15ea6~mv2.jpg/v1/crop/x_12,y_13,w_186,h_192/fill/w_210,h_217,al_c,lg_1,q_80/download_edited.webp"
    // },
]

const OurTeam = () =>{

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return(
            <MainRowWrapper  data-aos="fade-up">
                <Col lg={{offset:2,span:7}}>
                        <OurTeamHeading>Our Team</OurTeamHeading>
                        <Row justify="space-around">
                            {TeamData.map((data) => <OurTeamCard details={data} key={data.name}/>)}
                        </Row>
                </Col>
                <Col2 lg={{offset:2,span:13}}>
                             <Row>
                                 <ColWrapper2 lg={{span:24}}  sm={{span:24}} xs={{span:24}} >
                                 {/* <Heading>Message from CEO</Heading> */}
                                       <ImageContainer>
                                            <ImageBox 
                                                source={TeamData[0].image}
                                                alt="Raj Kundan"            
                                                WIDTH="130px"
                                                HEIGHT="130px"
                                                borderRadius="50%"
                                                border="5px solid #ffffff"
                                            />
                                        </ImageContainer>
                                        <Heading3>Raj Kundan</Heading3>
                                        <Heading4>Chief Executive Officer / Co-Founder</Heading4>
                                 </ColWrapper2>
                                 <ColWrapper3 lg={{span:20,offset:2}} sm={{span:24}} xs={{span:24}}>
                                        <Paragraph color="#ffffff">Kaigen – Kaizen:改善 Generation:世代 is our way of starting a Technical Community that believes Kaizen philosophy from heart. Change is the only Constant. And by following Kaizen, working towards making smaller changes for good, we want to achieve our bigger goal of “Winning the Hearts” of our customers and eventually everyone in this world through our support, innovation, and passion.</Paragraph>
                                        <Paragraph color="#ffffff">Kaizen provides world class Technical services along with carefully chosen bouquet of Products from its Partner Network in the field of Automation, Network, Cloud, AI and Blockchain.  We have developed a close knitted multinational network of collaborators across Japan, India, Singapore, Europe and Malaysia with a wide range of skillset of more than 350+ Engineers operating from different geographies.</Paragraph>
                                        <Paragraph color="#ffffff">With an emphasis on Diversity, we encourage all our employees  to create new values while shining toward their dreams, goals and lead a happy life. We will continue to strive to provide our services that will aim to create a new future which can be useful to all of you and to be loved.</Paragraph>
                                        <Heading2>We will continue to "challenge" for a new Change.</Heading2>
                                 </ColWrapper3>
                             </Row>
                </Col2>
            </MainRowWrapper>
    )
}

const MainRowWrapper = styled(Row)`
       background-color: #ffffff;
       padding-top: 75px;
       @media(max-width:576px){
             padding-top: 35px;
       }
`
const Col2  = styled(Col)`
       background-color: #F76943;
       margin-top: 81px;
       padding-bottom: 40px;
`
const ColWrapper2  = styled(Col)`
         text-align: center;
`
const ColWrapper3  = styled(Col)`
         padding: 0px 12px;
`
const OurTeamHeading = styled.h1`
         color: #1e2841;
         background-color: #ffffff;
         padding: 0px 10px;
         margin: 0px;
         font-size: 45px;
         line-height: 34px;
         color: #322B2B;
         @media(max-width:576px){
            font-size: 30px;
        }
`

const Heading2 = styled.span`
         font-size: 23px;
         text-align: center;
         color: #ffffff;
`
const Heading3 = styled.p`
         color: #ffffff;
         font-size: 26px;
         margin-bottom: 0px;
         @media(max-width:576px){
            font-size: 16px;
        }
`
const Heading4 = styled.p`
         color: #ffffff;
         font-size: 16px;
         @media(max-width:576px){
            font-size: 16px;
        }
`
const ImageContainer = styled.div`
      margin-top: -65px;
`
export default OurTeam