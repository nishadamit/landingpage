import React,{ useState } from 'react';
import { Layout} from 'antd';
import LandingHeader from '../components/Landingpage/Header';
import LandingPageContent from '../components/Landingpage/Content';
import LandingFooter from '../components/Landingpage/LandingPageFooter';
import AboutUs from '../components/Landingpage/AboutUs';
import OurTeam from '../components/Landingpage/Ourteam';
import ContactUs from '../components/Landingpage/ContactUs';
import TermsAndCondition from '../components/Landingpage/TermsAndCondition';
import PrivacyPolicy from '../components/Landingpage/PrivacyAndPolicy';
import Chart from '../components/Landingpage/Chart'

const Landingpage = () =>{

       const [ values ,setValues ] = useState({
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
                <LandingHeader/>
                <LandingPageContent />
                <Chart />
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