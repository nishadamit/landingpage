import React from 'react';
import { Drawer, Button } from 'antd';
import styled from 'styled-components';
import {  Link } from "react-router-dom";

const LandingDrawer = ({visibleDrawer,setDrawer}) =>{
      return(
            <CustomDrawer
                placement="right"
                closable={false}
                onClose={() =>setDrawer(false)}
                visible={visibleDrawer}
            >
                    <Link>About Us</Link>
                    <Link>Contact Us </Link>
                    <Link>Login </Link>
                    <Link>SignUp </Link>
           </CustomDrawer>
      )
}

const CustomDrawer = styled(Drawer)`
          .ant-drawer-content-wrapper{
               width: 130px !important;
               
          }
          .ant-drawer-body{
              display: flex;
              flex-direction: column;
          }
          .ant-drawer-body a{
              color: #ffffff;
              margin-bottom: 12px;
          }
          .ant-drawer-wrapper-body{
            background-color: #1e2841;
          }
`

export default LandingDrawer