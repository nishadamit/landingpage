import React,{ useState } from 'react';
import ModalComponent from './Modal';
import styled from 'styled-components';
import { Form, Input, Button, Radio } from 'antd';

const SupportModal = (props) =>{
        
       return(
           <ModalComponent
                title="Support"
                visibilty={props.modalIsOpen}
                handleModals={props.handleModals}
           >
                    <FormWrapper layout='vertical' >
                            <Form.Item label="Full Name">
                            <Input placeholder="Enter your fullname" />
                            </Form.Item>
                            <Form.Item label="Contact Email">
                            <Input placeholder="Enter your Contact Email" />
                            </Form.Item>
                            <Form.Item label="Problem Description">
                            <Input.TextArea  placeholder="Promblem Description Here....." />
                            </Form.Item>
                            <Form.Item >
                            <Button type="primary">Submit</Button>
                            </Form.Item>
                        </FormWrapper>
           </ModalComponent>
       )
}

const FormWrapper = styled(Form)` 
    .ant-form-item-label > label {
          color: #ffffff;
    } 
`

export default SupportModal