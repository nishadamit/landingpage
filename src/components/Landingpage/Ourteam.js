import React from 'react';
import { Layout,Row,Col }  from 'antd';
import styled from 'styled-components';
import OurTeamCard from './OurTeamCard';
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
    {
        id:4,
        name:"Sachin Kharat",
        desiganation:"Head of Technical Services",
        image:"https://static.wixstatic.com/media/551b23_d295df512b33430ca8f0f1ec39a15ea6~mv2.jpg/v1/crop/x_12,y_13,w_186,h_192/fill/w_210,h_217,al_c,lg_1,q_80/download_edited.webp"
    },
]

const OurTeam = () =>{
    return(
        <OurTeamWrapper id="ourteam">
            <Row>
                <ColWrapper lg={{offset:3,span:18}}>
                        <OurTeamHeading>Our Team</OurTeamHeading>
                        <Row>
                            {TeamData.map((data) => <OurTeamCard details={data} key={data.name}/>)}
                        </Row>
                        <RowWrapper gutter={[0,64]}>
                             <Col className="gutter-row" span={24}><Heading>Message from CEO</Heading></Col>
                             <MainRowWrapper >
                                 <ColWrapper2 lg={{span:24}}  sm={{span:24}} xs={{span:24}} >
                                 {/* <Heading>Message from CEO</Heading> */}
                                        <ImageWrapper src={TeamData[0].image} />
                                        <Heading3>Raj Kundan <br /> Chief Executive Officer / Co-Founder</Heading3>
                                 </ColWrapper2>
                                 <ColWrapper3 lg={{span:24}} sm={{span:24}} xs={{span:24}}>
                                        <p>Kaigen – Kaizen:改善 Generation:世代 is our way of starting a Technical Community that believes Kaizen philosophy from heart. Change is the only Constant. And by following Kaizen, working towards making smaller changes for good, we want to achieve our bigger goal of “Winning the Hearts” of our customers and eventually everyone in this world through our support, innovation, and passion.</p>
                                        <p>Kaizen provides world class Technical services along with carefully chosen bouquet of Products from its Partner Network in the field of Automation, Network, Cloud, AI and Blockchain.  We have developed a close knitted multinational network of collaborators across Japan, India, Singapore, Europe and Malaysia with a wide range of skillset of more than 350+ Engineers operating from different geographies.</p>
                                        <p>With an emphasis on Diversity, we encourage all our employees  to create new values while shining toward their dreams, goals and lead a happy life. We will continue to strive to provide our services that will aim to create a new future which can be useful to all of you and to be loved.</p>
                                        <Heading2>We will continue to "challenge" for a new Change.</Heading2>
                                 </ColWrapper3>
                             </MainRowWrapper>
                        </RowWrapper>
                </ColWrapper>
                
            </Row>
             
        </OurTeamWrapper>
    )
}

const MainRowWrapper = styled(Row)`
       border: 2px solid #00000040;
`

const OurTeamWrapper = styled(Content)`
       background-color: #ffffff;
       color: #1e2841;
`
const ColWrapper  = styled(Col)`
         border: 2px solid #1e2841;
         position: relative;
         margin-top: 40px;
         margin-bottom: 40px;
         padding: 25px;
`
const ColWrapper2  = styled(Col)`
         text-align: center;
`
const ColWrapper3  = styled(Col)`
         padding: 0px 12px;
`
const OurTeamHeading = styled.h1`
         color: #1e2841;
         position: absolute;
         top: -17px;
         text-align: center;
         left: 10%;
         background-color: #ffffff;
         padding: 0px 10px;
`
const Heading = styled.h1`
         text-align: center;
         position: absolute;
         margin-top: 25px;

         @media(max-width:576px){
            text-align: center;
            margin-top: 0px;
            position: relative;
        }
`
const Heading2 = styled.h1`
         font-size: 20px;
         line-height: 25px;
         font-weight: 400;
         text-align: center;
`
const Heading3 = styled.p`
         color: #1e2841;
         font-size: 18px;
         font-weight: 500;
         @media(max-width:576px){
            font-size: 16px;
        }
`
const RowWrapper = styled(Row)`
      margin-top: 35px;
`
const ImageWrapper = styled.img`
      border-radius: 50%;
      margin-bottom: 10px;
      width: 130px;
      height: 130px;
      margin-top: -65px;
`
export default OurTeam