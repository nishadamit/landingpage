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
                <ColWrapper1 lg={{span:18}}>
                    <ColWrapper1Inner>
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
`
const ColWrapper1Inner  = styled.div`
         position: relative;
         background-color: #24aa3d9c;
         padding: 70px 25px;
`
const ColWrapper2  = styled(Col)`
         position: relative;
         background-image: url(${TinguBoy});
`

const Heading = styled.h3`
          color: #ffffff;
          margin-bottom: 25px;
          font-weight: 700;
          font-size: 30px;
          margin-left:12%;
`

export default AboutUs