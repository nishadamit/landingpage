import React from 'react';
import styled from 'styled-components';
import { Form,Col,Input} from 'antd';
import { StyledButton } from './Button';
import { InputBox } from './Input';

const LandingForm = () =>{
        return(
            <ColWrapper>
                <FormHeading>Individual Account</FormHeading>
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
            </ColWrapper>
        )
}

const ColWrapper = styled.div`
       background-color: #ffffff;
       padding: 10px 30px;
`

const FormHeading = styled.h1`
        color: #322b2b;
`

export default LandingForm