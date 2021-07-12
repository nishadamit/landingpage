import React,{ useEffect } from 'react';
import { Layout,Row,Col,} from 'antd';
import styled from 'styled-components';
import AOS from 'aos';
import greemImage from '../../assests/images/green-img.png';
import TinguBoy from '../../assests/images/tingu-boy.png'
const {   Content, } = Layout;

const AboutUs = () =>{

     const Details = [
         {id:1,name:'NAME',value:'KaigenX'},
         {id:2,name:'ESTABLISHED',value:'September 2017'},
         {id:4,name:'OFFICE',value:'Unit-4, Madhuban Complex, Lane No-5, Above Canara Bank, Koregaon Park Pune 411001, Maharashtra, India'},
         {id:5,name:'TELEPHONE',value:'+91 70-3078-6279'},
        //  {id:6,name:'FAX',value:'03-3455-2994'},
         {id:7,name:'OFFICERS',value:'SAHIL SOI - President RAJ KUNDAN - Managing Director'},
         {id:8,name:'BUSINESS',value:'Automation, IT Consulting, System Operations and Maintenance Onsite-Offshore System Development, Staff Augmentation Artificial Intelligence, Machine Learning and Blockchain based development'},
         {id:9,name:'AFFILIATION',value:'Computer Software Association of Japan (CSAJ) Microsoft Partner Network'},
         {id:10,name:'CHANNEL PARTNERS',value:'Infinity Labs Pvt. Ltd. KLOUDYNET Technologies'},
         {id:11,name:'TRADING BANK',value:'RAKUTEN Bank Ltd. Head Office Branch'},
     ]

     useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return(
        <AboutUsWrapper id="aboutus"  data-aos="fade-up" >
            <Row>
                <ColWrapper1 lg={{span:18}} sm={{span:24}} xs={{span:24}}>
                    <ColWrapper1Inner>
                        <Heading>Company Details</Heading>
                        {
                            Details.map((data) =>{
                                  return(
                                    <ListRowWrapper justify="center" key={data.name} >
                                        <Col lg={{span:4,offset:1}} md={{span:4,offset:1}} sm={{span:6}} xs={{span:6}} ><Title>{data.name}</Title></Col>
                                        <Col lg={{span:1,offset:1}} md={{span:1,offset:1}}  sm={{span:1,offset:3}} xs={{span:1,offset:3}} >:</Col>
                                        <Col  lg={{span:14 ,offset:1}} md={{span:4,offset:1}}  sm={{span:13,offset:1}} xs={{span:13,offset:1}}><Description>{data.value}</Description></Col>
                                   </ListRowWrapper>
                                  )
                            })
                        }
                    </ColWrapper1Inner>
                </ColWrapper1>
                <ColWrapper2 lg={{span:6}}>
                </ColWrapper2>
            </Row>
             
        </AboutUsWrapper>
    )
}

const ListRowWrapper = styled(Row)`
       padding-bottom: 10px;
`


const AboutUsWrapper = styled(Content)`
       color: #ffffff;
`
const ColWrapper1  = styled(Col)`
         position: relative;
         background-image: url(${greemImage});
         background-size: cover;
`
const ColWrapper1Inner  = styled.div`
         position: relative;
         /* background-color: #24aa3d9c; */
         background-color: #1e2842bf;
         padding: 70px 25px;
         @media(max-width:576px){
            padding: 20px 10px;
        }
`
const ColWrapper2  = styled(Col)`
         position: relative;
         background-image: url(${TinguBoy});
         @media(max-width:576px){
             display: none;
        }
`

const Title = styled.span`
       font-size: 17px;
`

const Description = styled.span`
      font-size: 18px;
`

const Heading = styled.h3`
          color: #ffffff;
          margin-bottom: 25px;
          font-weight: 700;
          font-size: 45px;
          margin-left:8%;
          @media(max-width:576px){
            font-size: 25px;
            margin-left:3%;
        }
`

export default AboutUs