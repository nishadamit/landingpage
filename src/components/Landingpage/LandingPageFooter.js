import React , { useEffect } from 'react';
import { Layout,Row, Col  } from 'antd';
import AOS from 'aos';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaPinterestP, FaLinkedin} from 'react-icons/fa';


const {   Footer, } = Layout;

const LandingPageFooter = ({setFaqModal,setTermModal,setPrivacyModal,setSupportModal}) =>{

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

      return(
          <StyledFooter >
               <Row align="middle">
                    <Col lg={{span:10,offset:2}} sm={{span:24}} xs={{span:24}}>
                       <ListStyle>
                            <a  href={() => false}  onClick={() =>setSupportModal(true)}><li>Support</li></a>
                            <a  href={() => false}  onClick={() =>setTermModal(true)}><li>Terms And Condition</li></a>
                            <a  href={() => false}  onClick={() =>setPrivacyModal(true)}><li>Privacy Policy</li></a>
                            <a  href={() => false}  onClick={() =>setFaqModal(true)} ><li >FAQs</li></a>
                        </ListStyle>
                    </Col>
                    <Col lg={{span:10,offset:2}} sm={{span:24}} xs={{span:24}}> 
                            <Heading>Follow on Social Media</Heading>
                            <ListStyle2>
                                <a href="https://www.facebook.com/"><FaFacebookF size="1.2rem" /></a>
                                <a href="https://twitter.com/?lang=en"><FaTwitter  size="1.2rem" /></a>
                                <a href="https://web.whatsapp.com/"><FaWhatsapp  size="1.2rem" /></a>
                                <a href="https://www.instagram.com/"><FaInstagram  size="1.2rem" /></a>
                                <a href="https://in.pinterest.com/"><FaPinterestP  size="1.2rem" /></a>
                                <a href="https://in.linkedin.com/"><FaLinkedin  size="1.2rem" /></a>
                            </ListStyle2>

                    </Col>
               </Row>
          </StyledFooter>
      )
}

const StyledFooter = styled(Footer)`
        text-align: center;
        background-color: #37435f;
        color: #ffffff;

        @media(max-width:576px){
            padding: 0px;
            padding-top: 15px;
            padding-bottom: 20px;
        }
`
const ListStyle = styled.ul`
      display: flex;
      li{
          list-style: none;
          margin-left: 10px;
      }
      a{
          color: #ffffff;
      }
      @media(max-width:576px){
          padding: 0px;
        li{
          margin-left: 9px;
         }
        }
`
const Heading = styled.h4`
        color: #ffffff;
`
const ListStyle2 = styled.div`
        a{
            color: #ffffff;
            margin-left: 5px;
        }
        @media(max-width:576px){
            a{
            color: #ffffff;
            margin-left: 20px;
            }
        }
`

export default LandingPageFooter