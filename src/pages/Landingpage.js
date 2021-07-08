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
import Chart from '../components/Landingpage/Chart';
import FaqModal from '../components/Landingpage/Faqmodal';
import SupportModal from '../components/Landingpage/SupportModal';
import TradingViewChart from '../components/Landingpage/TradingViewChart';

const Landingpage = () =>{

       const [ values ,setValues ] = useState({
                terms:false,
                privacy:false,
                faq:false,
                support:false
       })


      const setTermModal = (value) =>{
               setValues({...values,terms:value})
       }

       const setPrivacyModal = (value) =>{
          setValues({...values,privacy:value})
       }

       const setFaqModal = (value) =>{
            setValues({...values,faq:value})
         }

         const setSupportModal = (value) =>{
            setValues({...values,support:value})
         }

       return(
           <Layout className="layout">
                {/* <LandingHeader/> */}
                <LandingPageContent />
                <Chart />
                <AboutUs />
                <TradingViewChart />

                <OurTeam/>
                <ContactUs />
                <LandingFooter
                      setTermModal={setTermModal}
                      setPrivacyModal={setPrivacyModal}
                      setFaqModal={setFaqModal}
                      setSupportModal={setSupportModal}
                />
                <TermsAndCondition
                        modalIsOpen={values.terms}
                        handleModals={setTermModal}
                />
                <PrivacyPolicy
                         modalIsOpen={values.privacy}
                         handleModals={setPrivacyModal}
                />
                <FaqModal
                        modalIsOpen={values.faq}
                        handleModals={setFaqModal}
                />
                <SupportModal 
                        modalIsOpen={values.support}
                        handleModals={setSupportModal}
                />
           </Layout>
       )
}



export default Landingpage