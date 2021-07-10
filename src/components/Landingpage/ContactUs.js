import React,{ useEffect } from 'react';
import { Layout,Row,Col,Form, Input, Button,Checkbox} from 'antd';
import AOS from 'aos';
import styled from 'styled-components';
import Flags from 'country-flag-icons/react/3x2'
import BlurredImage from '../../assests/images/blurred-img.png';
import Map from './Map';
import { StyledButton } from './Button';


const {   Content, } = Layout;


const ContactUs = () =>{

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

      return(
          <Content data-aos="fade-up" >
              <FormRowWrapper2>
                  <FormRowWrapper>
                    <Col lg={{span:10,offset:2}} sm={{span: 24}} xs={{span: 24}} >
                                <Heading3>Keep in touch with us</Heading3>
                        <Form  name="nest-messages">
                            <Row>
                                <Col lg={{span:12,offset:0}} md={{span:11}} sm={{span:22,offset:1}} xs={{span:22,offset:1}} >
                                    <Form.Item 
                                        name="firstname" 
                                        rules={[{ required: true, message: 'Please input your Name!' }]}
                                    >
                                        <InputBox  />
                                    </Form.Item>
                                </Col>
                                <Col lg={{span:11,offset:1}} md={{span:11,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                                    <Form.Item 
                                      name="lastname" 
                                    >
                                        <InputBox  />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{span:12,offset:0}} md={{span:11}} sm={{span:22,offset:1}} xs={{span:22,offset:1}} >
                                    <Form.Item 
                                       name="email"  
                                       rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <InputBox />
                                    </Form.Item>
                                </Col>
                                <Col lg={{span:11,offset:1}} md={{span:11,offset:1}}  sm={{span:22,offset:1}} xs={{span:22,offset:1}} >
                                    <Form.Item name="phonenumber">
                                        <InputBox />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col lg={{span:23,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}  >
                                    <Form.Item 
                                      name="companyname" 
                                    >
                                        <Input
                                            placeholder="Company Name"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col lg={{span:24,offset:0}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}  >
                                    <Form.Item 
                                       name="message"
                                       rules={[{ required: true, message: 'Please type your message!' }]}
                                    >
                                        <InputTextArea  />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col lg={{span:23,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}  >
                                    <Form.Item >
                                        <StyledCheckbox>
                                        I agree to the terms & conditions
                                        </StyledCheckbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{span:23,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}  >
                                    <Form.Item >
                                        <StyledCheckbox>
                                        I want to subscribe to Kaigen newsletter for new offers, launches and industry insights.
                                        </StyledCheckbox>
                                    </Form.Item>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col lg={{span:23,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                                    <Form.Item >
                                        <StyledButton 
                                            shape="round"  
                                            backgroundColor="#41aa3d"
                                            htmlType="submit"
                                            COLOR="#ffffff"
                                        >
                                               Send
                                        </StyledButton>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={{span:8 ,offset:1}}  sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                        <Heading3>Contact Details</Heading3>
                        <Heading4>Corporate Offices:</Heading4>
                        <FlagContainer>
                               <Flags.JP title="United States" style={{width:"20px"}}/>  <Heading5 marginLeft = "16px">JAPAN</Heading5>
                        </FlagContainer>
                        <List>
                            <li> <span>105-0023</span></li>
                            <li> <span>1-2-2 Seavans A Mall, 2F, Mandir,</span></li>
                            <li> <span>Shibaura Minato-ku, Tokyo</span></li>
                            <li> <span>Phone - +81 70-1481-9881</span></li>
                        </List>
                        <FlagContainer>
                               <Flags.IN title="United States" style={{width:"20px"}}/>  <Heading5 marginLeft= "16px">INDIA</Heading5>
                        </FlagContainer>
                        <List>
                            <li> <span>Unit-4, Madhuban Complex, Lane No-5, Above</span></li>
                            <li> <span>Canara Bank, Koregaon Park Pune 411001,</span></li>
                            <li> <span>Maharashtra, India</span></li>
                            <li> <span>Phone - +91 70-3078-6279</span></li>
                            <br />
                            <li> <Heading5>Mail</Heading5></li>
                            <li> <span>info@kaigengroup.com</span></li>
                            <li> <span>sales@kaigengroup.com</span></li>
                            {/* <Map /> */}
                        </List>
                    </Col>
                    </FormRowWrapper>
              </FormRowWrapper2>
          </Content>
          
      )
}
const FormRowWrapper = styled(Row)`
          /* margin-top: 50px; */
          background-color:  #23232387;
          color: #ffffff;
          padding: 100px 0px 50px 0px;
          @media(max-width:576px){
           padding: 40px 0px 25px 0px;
       }
`
const FormRowWrapper2 = styled.div`
          background-image: url(${BlurredImage});
          background-size: cover;
`
const Heading3 = styled.h1`
          color: #ffffff;
          font-size: 30px;
          margin-bottom: 30px;

`
const Heading4 = styled.h1`
          color: #ffffff;
          font-size: 23px;
`

const Heading5 = styled.h1`
          color: #ffffff;
          font-size: 17px;
          margin-bottom: 0px;
          margin-left: ${props =>(props.marginLeft ? props.marginLeft : "0px")};
`
const List = styled.ul`
       li{
           list-style: none;
           display: flex;
           align-items: center;
       }
       @media(max-width:576px){
           padding: 0px;
       }
`

const InputBox = styled(Input)`
         background-color: transparent;
         outline: none;
         height: 40px;
` 
const InputTextArea = styled(Input.TextArea)`
         background-color: transparent;
         outline: none;
         height: 125px !important;
` 

const StyledCheckbox = styled(Checkbox)`
        color: #ffffff;
`

const FlagContainer = styled.div`
     display: flex;
`



export default ContactUs

{/* <Flags.JP title="United States" style={{width:"20px"}}/> */}
{/* <Flags.IN title="United States" style={{width:"20px"}}/> */}