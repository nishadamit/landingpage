import React,{ useState } from 'react';
import { Layout} from 'antd';
import styled from 'styled-components';
import { MenuOutlined , ArrowRightOutlined ,UserOutlined} from '@ant-design/icons';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaPinterestP, FaLinkedin} from 'react-icons/fa';
import { StyledButton } from './Button';
import Logo from '../../assests/images/kaigen-logo.png'
const { Header,} = Layout;
const LandingHeader = () =>{
      
      const [ sideBarValue ,setSideBar ] =  useState(false)


      const SetLink = (pathname) =>{
            setSideBar(false)
           window.location.href=`#${pathname}`;        
      }

      return(
          <HeaderWrapper>
               <div>
                   <ImageWrapper src={Logo} />
               </div>
               <div>
                    <HeaderMenuWrapper visible={sideBarValue}>
                                <a href={() => false} onClick={() =>SetLink('aboutus')}><li>About Us</li></a>
                                <a  href={() => false}  onClick={() =>SetLink('contactus')}><li>Contact Us</li></a>
                                <a  href={() => false}  onClick={() =>SetLink('ourteam')}><li>Our Team</li></a>
                                <MobileLink href="https://www.pilot-genxchange.tk/signin"><li>Log In</li></MobileLink>
                                <MobileLink href="https://www.pilot-genxchange.tk/signup"><li>Sign Up</li></MobileLink>
                                <ButtonLink  >
                                    <li>
                                        <StyledButton 
                                            shape="round" 
                                            backgroundColor= "#F76943" 
                                            COLOR="#ffffff" 
                                            href="https://www.pilot-genxchange.tk/signin"
                                        >
                                            Login
                                            <ArrowRightOutlined color="#ffffff" />
                                        </StyledButton>
                                    </li>
                                </ButtonLink>
                                <ButtonLink >
                                    <li>
                                        <StyledButton 
                                            shape="round" 
                                            backgroundColor="#24AA3D"  
                                            COLOR="#ffffff" 
                                            href="https://www.pilot-genxchange.tk/signup"
                                        >
                                            SIGN UP
                                            <UserOutlined color="#ffffff" />
                                        </StyledButton>
                                    </li>
                                </ButtonLink>
                    </HeaderMenuWrapper>
                    <Overlay visible={sideBarValue} onClick={() =>setSideBar(false)} />
               </div>
               <IconContainer onClick={() =>setSideBar(true)}>
                   <HamburgurIcon />
               </IconContainer>
        </HeaderWrapper>
      )
}

const HeaderWrapper = styled(Header)`
           background: none;
           color: #ffffff;
           display: flex;
           flex-direction: row;
           justify-content: space-between;
           align-items: center;
           padding: 20px 50px;
           height: 100px;
           width: 100%;
           @media (max-width: 768px) {
                 padding: 20px 14px;
           }

        @media (min-width: 768px) {
              margin-bottom: 55px;
           } 
           @media (max-width: 576px) {
           } 
`;
const ImageWrapper = styled.img`
           width: 120px;
           @media (max-width: 768px) {
                width: 106px;
                height: 33px;
           } 
           
`
const HeaderMenuWrapper = styled.ul`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            list-style: none;
            padding: 0px;
            margin: 10px 0px 0px 0px;
            a li{
                margin-right: 25px;
                color: #ffffff;
                font-size: 15px;
                line-height: 15px;
            }
            @media(max-width:576px){
                display: flex;
                flex-direction: column;
                position: fixed;
                top: -9px;
                height: 100vh;
                background-color: #1e2841;
                z-index: 5;
                justify-content: center;
                right: 0;
                padding: 23px;
                display: block;
                transform: ${props =>(props.visible ? 'translateX(0)' :'translateX(100%)')};
                opacity: ${props =>(props.visible ? '1' :'0')};
                transition: all ease 0.5s;
                a li{
                    color: #ffffff;
                    margin-bottom: 10px;
                    font-size: 19px;
                    line-height: 32px;
                }
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
const ButtonLink = styled.a`
         @media (max-width: 576px) {
            display: none;
    }
    background-color: ${props =>(props.backgroundColor)};
`
const MobileLink= styled.a`
      @media (min-width: 576px) {
            display: none;
      }  
`
const Overlay = styled.div`
         @media (max-width: 576px) {
            height: 100vh;
            width: 100vw;
            background-color: #00000096;
            z-index: 3;
            position: fixed;
            left: 0;
            top: 0;
            opacity: ${props =>(props.visible ? '1' :'0')};
            pointer-events: ${props =>(props.visible ? 'all' :'none')};
            transition: all ease 0.5s;
         } 
`
export default LandingHeader