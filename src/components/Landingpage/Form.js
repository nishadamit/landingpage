import React from 'react';
import { Form,Col,Input,Button} from 'antd';

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
                                <Input placeholder="Email Address" />
                            </Form.Item>
                            <Form.Item>
                                <Button block type="danger" htmlType="submit" className="login-form-button">
                                    Sign Up For Free!
                                </Button>
                            </Form.Item>
                    </Form>
            </Col>
        )
}

export default LandingForm