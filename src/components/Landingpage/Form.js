import React from 'react';
import { Form,Col,Input} from 'antd';
import { StyledButton } from './Button';
import { InputBox } from './Input';

const LandingForm = () =>{
        return(
            <Col span={22} offset={1}>
                    <Form
                            name="normal_login"
                            className="login-form"
                    >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input Email Address!' }]}
                            >
                                <InputBox
                                   placeholder="Email Address" 
                                   HEIGHT="50px"
                                />
                            </Form.Item>
                            <Form.Item>
                                <StyledButton                                             
                                    shape="round" 
                                    backgroundColor= "#24AA3D"
                                    COLOR="#ffffff"  
                                    htmlType="submit" 
                                >
                                    Sign Up
                                </StyledButton>
                            </Form.Item>
                    </Form>
            </Col>
        )
}

export default LandingForm