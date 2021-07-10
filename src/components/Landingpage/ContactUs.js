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
                    <Col lg={{span:9,offset:3}} sm={{span: 24}} xs={{span: 24}} >
                                <Heading3>Keep in touch with us</Heading3>
                        <Form  name="nest-messages">
                            <Row>
                                <Col lg={{span:11,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}} >
                                    <Form.Item 
                                        name="firstname" 
                                        rules={[{ required: true, message: 'Please input your Name!' }]}
                                    >
                                        <Input
                                            placeholder="First Name"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={{span:11,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                                    <Form.Item 
                                      name="lastname" 
                                    >
                                        <Input
                                            placeholder="Last Name"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{span:11,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}} >
                                    <Form.Item 
                                       name="email"  
                                       rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <Input
                                            placeholder="Email"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={{span:11,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}} >
                                    <Form.Item name="phonenumber">
                                        <Input
                                            placeholder="Phone Number"
                                        />
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
                                <Col lg={{span:23,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}  >
                                    <Form.Item 
                                       name="message"
                                       rules={[{ required: true, message: 'Please type your message!' }]}
                                    >
                                        <Input.TextArea
                                            placeholder="Message"
                                        />
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
                        <List>
                            <li><Heading4>Corporate Offices:</Heading4></li>
                            <li><Flags.JP title="United States" style={{width:"20px"}}/> <Heading5>JAPAN</Heading5></li>
                            <li> <span>105-0023</span></li>
                            <li> <span>1-2-2 Seavans A Mall, 2F, Mandir,</span></li>
                            <li> <span>Shibaura Minato-ku, Tokyo</span></li>
                            <li> <span>Phone - +81 70-1481-9881</span></li>
                            <br />
                            <li><Flags.IN title="United States" style={{width:"20px"}}/>  <Heading5>INDIA</Heading5></li>
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
          background-color:  #0000003d;
          color: #ffffff;
          padding: 100px 0px 50px 0px;
          @media(max-width:576px){
           padding: 40px 0px 25px 0px;
       }
`
const FormRowWrapper2 = styled.div`
          background-color:  #1e2841;
          background-image: url(${BlurredImage});
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
          margin-left: 5px;
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

const StyledCheckbox = styled(Checkbox)`
        color: #ffffff;
`



export default ContactUs