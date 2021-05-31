import React from 'react';
import { Layout,Row,Col,} from 'antd';
import styled from 'styled-components';
const {   Content, } = Layout;




const AboutUs = () =>{

     const Details = [
         {id:1,name:'NAME',value:'改元株式会社 / Kaigen K.K.'},
         {id:2,name:'ESTABLISHED',value:'September 2017'},
         {id:3,name:'CAPITAL',value:'7,500,000 YEN'},
         {id:4,name:'HEAD OFFICE',value:'105-0023 1-2-2 Seavans A Mall, 2F, Mandir, Shibaura Minato-ku, Tokyo'},
         {id:5,name:'TELEPHONE',value:'070-1481-9881'},
         {id:6,name:'FAX',value:'03-3455-2994'},
         {id:7,name:'OFFICERS',value:'SAHIL SOI - President RAJ KUNDAN - Managing Director'},
         {id:8,name:'BUSINESS',value:'Automation, IT Consulting, System Operations and Maintenance Onsite-Offshore System Development, Staff Augmentation Artificial Intelligence, Machine Learning and Blockchain based development'},
         {id:9,name:'AFFILIATION',value:'Computer Software Association of Japan (CSAJ) Microsoft Partner Network'},
         {id:10,name:'CHANNEL PARTNERS',value:'Infinity Labs Pvt. Ltd. KLOUDYNET Technologies'},
         {id:11,name:'TRADING BANK',value:'RAKUTEN Bank Ltd. Head Office Branch'},
     ]

    return(
        <AboutUsWrapper id="aboutus">
            <Row>
                <ColWrapper lg={{offset:3,span:18}}>
                        <AboutUsHeading>About Us</AboutUsHeading>
                        <Heading>Company Details</Heading>
                        {
                            Details.map((data) =>{
                                  return(
                                    <ListRowWrapper justify="center" key={data.name} >
                                        <Col lg={{span:4,offset:2}} sm={{span:8}} xs={{span:8}} >{data.name}</Col>
                                        <Col  lg={{span:14 ,offset:2}} sm={{span:16}} xs={{span:16}}>{data.value}</Col>
                                   </ListRowWrapper>
                                  )
                            })
                        }

                </ColWrapper>
            </Row>
             
        </AboutUsWrapper>
    )
}

const ListRowWrapper = styled(Row)`
       padding-bottom: 10px;
`

const AboutUsWrapper = styled(Content)`
       background-color: #1e2841;
       color: #ffffff;
`
const ColWrapper  = styled(Col)`
         border: 2px solid #ffffff;
         position: relative;
         margin-top: 40px;
         margin-bottom: 25px;
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
const Heading = styled.h3`
          color: #ffffff;
          text-align: center;
          margin-bottom: 10px;
          font-weight: 700;
          font-size: 25px;
`

export default AboutUs