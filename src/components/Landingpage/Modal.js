import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';

const ModalComponent = (props) =>{
      
      return(
            <StyledModal 
              title={props.title} 
              visible={props.visibilty}
              onCancel={() =>props.handleModals(false)}
           >
                   {props.children}
            </StyledModal>
      )
}

const StyledModal = styled(Modal)`
          width: 75% !important;
          height: 75vh;
          top: 50px;

          @media(max-width:576px){
              top: 10px;
            width: 90% !important;
            height: 95vh;
          }
          .ant-modal-mask{
              background-color: #ffffffbf;
          }
          .ant-modal-close{
              color: #ffffff;
          }
          .ant-modal-header{
              background-color: #171b29;
              border-bottom: 0px;
              .ant-modal-title{
                  color: #ffffff;
              }
          }
          .ant-modal-content {
                height: 100%;
            }
            .ant-modal-body {
                height: calc(100% - 110px);
                overflow: auto;
                background-color: #1e2841;
            }
            .ant-modal-body::-webkit-scrollbar {
                width: 0px;
             }
             .ant-modal-footer{
                background-color: #171b29;
                border-top: 0px;
                height: 14%;
                .ant-btn{
                     display: none;
                }
             }
            
             
`

export default ModalComponent

