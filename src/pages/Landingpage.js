import React,{ useState } from 'react';
import { Layout} from 'antd';
import LandingHeader from '../components/Landingpage/Header';
import LandingPageContent from '../components/Landingpage/Content';
import LandingFooter from '../components/Landingpage/LandingPageFooter';
import Drawer from '../components/Landingpage/Drawer';
import AboutUs from '../components/Landingpage/AboutUs';
import OurTeam from '../components/Landingpage/Ourteam';
import ContactUs from '../components/Landingpage/ContactUs';
import TermsAndCondition from '../components/Landingpage/TermsAndCondition';
import PrivacyPolicy from '../components/Landingpage/PrivacyAndPolicy';

const Landingpage = () =>{

       const [ values ,setValues ] = useState({
                drawer:false,
                terms:false,
                privacy:false
       })


     const setTermModal = (value) =>{
               setValues({...values,terms:value})
       }

       const setPrivacyModal = (value) =>{
          setValues({...values,privacy:value})
  }

       return(
           <Layout className="layout">
                <LandingHeader
                      setDrawer={setValues}
                      visibleDrawer={values.drawer} 
                />
                <LandingPageContent />
                
                <Drawer
                     setDrawer={setValues}
                     visibleDrawer={values.drawer} 
                />
                <AboutUs />
                <OurTeam/>
                <ContactUs />
                <LandingFooter
                      setTermModal={setTermModal}
                      setPrivacyModal={setPrivacyModal}
                />
                <TermsAndCondition
                      modalIsOpen={values.terms}
                      setTermModal={setTermModal}
                />
                <PrivacyPolicy
                         modalIsOpen={values.privacy}
                         setPrivacyModal={setPrivacyModal}
                />
           </Layout>
       )
}

export default Landingpage