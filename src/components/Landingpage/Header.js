import React from 'react';
import { Layout,Button} from 'antd';
import styled from 'styled-components';
import {  Link } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../assests/images/kaigen-logo.png'
const { Header,} = Layout;

const LandingHeader = ({setDrawer,visibleDrawer}) =>{
      return(
          <HeaderWrapper>
               <div>
                   <ImageWrapper src={Logo} />
               </div>
               <div>
                        <HeaderMenuWrapper>
                                    <a href="#aboutus"><li>About Us</li></a>
                                    <a href="#contactus"><li>Contact Us</li></a>
                                    <a href="#ourteam"><li>Our Team</li></a>
                                    <Link ><li><Button shape="round">Login</Button></li></Link>
                                    <Link ><li><Button shape="round">Sign Up for free!</Button></li></Link>
                        </HeaderMenuWrapper>
                
               </div>
               <IconContainer onClick={() =>setDrawer(!visibleDrawer)}>
                   <HamburgurIcon />
               </IconContainer>
          </HeaderWrapper>
      )
}

const HeaderWrapper = styled(Header)`
           background-color: #1e2841;
           color: #ffffff;
           display: flex;
           flex-direction: row;
           justify-content: space-between;
           align-items: center;
           padding: 20px 170px;
           height: 100px;
           @media (max-width: 768px) {
                 padding: 20px 40px;
           } 
`;
const ImageWrapper = styled.img`
           width: 120px;
           
`
const HeaderMenuWrapper = styled.ul`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            list-style: none;
            height: 20px;
            line-height: 20px;
            padding: 0px;
            margin: 10px 0px 0px 0px;
            a li{
                margin-right: 25px;
                color: #ffffff;
            }
            @media (max-width: 576px) {
                 display: none;
           } 
`
const IconContainer = styled.div`
    @media (min-width: 576px) {
            display: none;
    } 
`

const HamburgurIcon = styled(MenuOutlined)`
       font-size: 25px;
`

export default LandingHeader