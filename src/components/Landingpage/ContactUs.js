import React from 'react';
import { Layout,Row,Col,Form, Input, InputNumber, Button} from 'antd';
import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail,MdLocationOn } from "react-icons/md";

const {   Content, } = Layout;


const ContactUs = () =>{

      return(
          <Content id="contactus">
              <WrapperRow>
                  <Col span={24}>
                       <Heading>Contact Us</Heading>
                  </Col>
              </WrapperRow>
              <FormRowWrapper>
                        <Col lg={{span:9,offset:3}} sm={{span: 24}} xs={{span: 24}} >
                        <Col lg={{span:11,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}} >
                        <Heading3>Keep in touch with us</Heading3>
                        </Col>
                       
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
                            <Row>
                                <Col lg={{span:23,offset:1}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                        Send Message
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Form>
                    </Col>
                    <Col lg={{span:8 ,offset:1}}  sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                        <Heading3>Contact Details</Heading3>
                        <List>
                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text  Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                            <li><MdLocationOn size="1.7em" /> <span> B-164 , Sector-64 ,Noida UP </span></li>
                            <li><FaPhoneAlt size="1.2em" /> <span> +91 9999999999 </span></li>
                            <li><MdEmail size="1.4em" /> <span> kaigen@gamil.com </span></li>
                            
                        </List>
                    </Col>
              </FormRowWrapper>
          </Content>
          
      )
}

const WrapperRow = styled(Row)`
        background-color:  #1e2841;
`

const Heading = styled.h1`
          color: #ffffff;
          margin-top: 25px;
          text-align: center;
          margin-bottom: 0px;
          font-size: 30px;
`
const FormRowWrapper = styled(Row)`
          /* margin-top: 50px; */
          background-color:  #1e2841;
          color: #ffffff;
`
const Heading3 = styled.h1`
          color: #ffffff;
`
const List = styled.ul`
       li{
           list-style: none;
           display: flex;
           align-items: center;
           margin-bottom: 5px;
       }
       li span{
           margin-left: 10px;
       }
       @media(max-width:576px){
           padding: 0px;
       }
`



export default ContactUs