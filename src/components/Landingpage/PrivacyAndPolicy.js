import React from 'react';
import Modal from 'react-modal';
import { ImCross } from "react-icons/im";

const  PrivacyAndPolicy = ({modalIsOpen,setPrivacyModal}) => {

    const customStyles = {
        content : {
          top        : '50%',
          left       : '50%',
          transform   : 'translate(-50%, -50%)'
        }
      };

    return (
        <div>
        <Modal
            isOpen={modalIsOpen}
            contentLabel="Example Modal"
            style={customStyles}
        >
            <div className="terms-modal-header">
                    <h3>PRIVACY AND POLICY</h3>
                    <ImCross
                        onClick={() =>setPrivacyModal(false)}
                    />
            </div>
            <div className="terms-main-content">
                <h1>Privacy Policy</h1>
                <h4>KaigenX Privacy Policy<br/>Updated 1 October 2019</h4>
                <p className="notice">Notice for Japanese Residents, United States Residents and Malaysian Residents ONLY</p>
                <p>Please note that due to respective local regulations, we do not accept registrations from residents of Japan, United States of America & Malaysia. Further we do not accept registrations if you are using or accessing KaigenXchange Services on behalf of an entity that is incorporated, established, or domiciled in Japan, the United States of America or Malaysia.</p>
                <p className="notice">Notice Re: European Economic Area</p>
                <p>As we are a global company, we may collect Personal Data from individuals and institutions located within the European Economic Area (“EEA”) or the Channel Islands. We are required to protect Personal Data processed in the EEA and the Channel Islands in accordance with the General Data Protection Regulation (“GDPR”) and equivalent local legislation. To understand more about how we protect the data we collect from individuals and institutions located within the EEA or the Channel Islands, please see the ‘Privacy Statement for Data Subjects Whose Personal Data May Be Collected in or from the EEA or the Channel Islands’ section below.</p>
                <h4>PRIVACY POLICY</h4>
                <p>You agree and understand that by accessing or using the K-genxchange Materials, you have affirmed that you are at least 18 years old, have the legal capacity to consent to this Privacy Policy, and agree to be bound by the policies and practices of this Privacy Policy in their entirety.</p>
                <h4>1.INTRODUCTION</h4>
                <p>This Privacy Policy, together with our Terms and Conditions, governs how K-genxchange collects, processes, use, discloses, shares and protects Personal Data we collect from or in relation to you. The terms “we”, “us” and “our” refer to K-genxchange and its Affiliates and related companies. This Privacy Policy constitutes a part of the Terms and Conditions which you have previously agreed to by clicking a checkbox and a button that contains the words “I Agree” when the Terms and Conditions and Privacy Policy were presented to you or, if earlier, by accessing or using the K-genxchange Materials.</p>
                <p>Personal Data as defined by the Personal Data Protection Act 2012 (No. 26 of 2012 of India) (“PDPA”) means data, whether true or not, about an individual who can be identified from that data or from that data and other information to which the organization has or is likely to have access. K-genxchange values your privacy and is PDPA compliant.</p>
                <p>The governing language of this Privacy Policy is English. Any other language translation is provided for convenience only and the case of any difference between the English version and the translated versions of this Privacy Policy, the English version shall prevail.</p>
                <p>If you have queries, comments or concerns regarding our Privacy Policy or wish to: (i) withdraw any consent provided to us in respect of the collection, use and/or disclosure by us of Personal Data about you for any purpose; (ii) receive information about the Personal Data we have in relation to you; or (iii) update Personal Data we have in relation to you, please contact the Data Protection Officer, appointed in compliance with PDPA at compliance@K-genxchange.exchange.</p>
                <p>By accessing or using the K-genxchange Materials, you consent to our data practices as described in this Privacy Policy, including the collection, use and/or disclosure of Personal Data provided by or on behalf of you and/or relating to you by us and our service providers and agents described herein. If you do not agree with, consent to or are not comfortable with any aspect of this Privacy Policy, you should immediately stop accessing and/or using K-genxchange Materials.</p>
                <p>We reserve the right to modify this Privacy Policy at any time and/or when required by law.  We will notify Users of any changes to this Privacy Policy by email (sent to the email address as specified in your Account) and/or by means of a notice published on the Platform. Such modifications will be effective and binding on you upon posting such modifications onto the Platform or such other timing as K-genxchange may specify in writing. You acknowledge that it is your responsibility to check for notifications regularly and the updated Privacy Policy upon such notifications. You further agree that any notification of modifications in the manner as aforesaid shall be sufficient notice to you and your continued access to and/or use of the K-genxchange Materials following the notification of any modifications to this Privacy Policy indicates your acceptance of any such modifications.</p>
                <h4>2.DEFINITIONS</h4>
                <p></p>
                <p></p>
                <h4>2.DEFINITIONS</h4>
                <p>Capitalized terms used in this Privacy Policy have the following meanings, and any capitalized terms not defined in this Privacy Policy shall be as defined in the Terms and Conditions:</p>
                <p>“Personal Data”, in addition to the definition of Personal Data as defined by the PDPA and as set out above, also means any information that directly or indirectly can be used to identify a natural person, such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, economic, cultural or social identity of you as a natural person.</p>
                <h4>COLLECTION OF PERSONAL DATA</h4>
                <p>K-genxchange wants you to understand the types of information K-genxchange collects when you register for an Account and/or access and/or use the K-genxchange Materials. You decide whether or not to provide us with the information, however we may not be able to offer you some or all of our K-genxchange Services if you choose not to share certain information with us.</p>
                <p>Personal Data and information we may collect from or in relation to you include but are not limited to the following:</p>
                <p>(i) Identification Information - full name, home address, email address, date of birth, age, nationality, gender, signature, photographs, tax identification number, passport number, driver license details, national identity card details, immigration visa information;</p>
                <p>(ii) Account Information - username, password, account settings and preferences;</p>
                <p>(iii) Financial Information - bank account numbers, bank statement, virtual currency wallet addresses, trading data;</p>
                <p>(iv) Verification Information - utility bills, phone bills, bank statements, tax returns;</p>
                <p>(v) Information relating to usage of our K-genxchange Services - device identification, operating system, browser type, IP address, domain name, access date and time via server logs; and</p>
                <p>(vi) Transaction Information - trading activity, order activity, deposits, withdrawals and account balances.</p>
                <h4>4.HOW WE USE YOUR PERSONAL INFORMATION</h4>
                <p>We and our service providers and agents may collect, use, process, disclose and/or share Personal Data we collect from or in relation to you for purposes including but not limited to the following: (i) to communicate with you (e.g. responding to queries, sending you newsletters, communicating with you in relation to other products or services offered by us and/or our partners); (ii) to administer, deliver, develop, improve and personalize the K-genxchange Materials; (iii) operate and manage the K-genxchange Materials; (iv) administering events and activities (e.g. extending and processing invitations); (iv) for loss prevention and anti-fraud purposes; (v) to generate data from any Personal Data we collect from you or in relation to you for market analysis, research and survey and/or research and development purposes; (vi) to fulfil, protect and enforce our contractual and legal rights and obligations; and (vii) to comply with applicable laws, regulations and other requirements (e.g. providing assistance to law enforcement agencies, regulatory authorities and other governmental agencies; performing internal audits). Some of the foregoing purposes are further elaborated below:</p>
                <h5>Legal and Compliance Regulations</h5>
                <p>We are required by law to collect and use your Personal Data in connection with K-genxchange Services - E.g. we need to identify and verify customers using K-genxchange Services in order to comply with anti-money laundering and terrorist financing laws across different jurisdictions. In addition, we use third parties to verify your identity by comparing the Personal Data you provided against third-party databases and public records. If you do not provide this Personal Data, you will not be allowed to use K-genxchange Services.</p>
                <h5>Enforcement of our Terms and Conditions</h5>
                <p>Due to the nature of sensitive information we handle, it is important for us and for the benefit of our customers that we are actively monitoring, investigating, preventing and mitigating any potentially prohibited or illegal activities, enforcing our agreements with third parties, and/or violations of our Terms and Conditions or agreements related to the Services. We may use any of your Personal Data collected in connection with K-genxchange Services for these purposes. The consequences of not being able to process your Personal Data for such purposes is the termination of your Account as we cannot perform K-genxchange Services in accordance with the Terms and Conditions.</p>
                <h5>Performance of our Obligations and Provision of our Services</h5>
                <p>We process your Personal Data in order to provide the Services to you. For example, when you want to buy Digital Currency, we require certain information such as your identification, contact information, and payment information. We cannot provide you with Services without such information. The consequences of not being able to process your Personal Data for such purposes is the termination of your Account as we cannot perform K-genxchange Services in accordance with the Terms and Conditions.</p>
                <p>We send administrative or account-related information to you to keep you updated about K-genxchange Services, inform you of relevant security issues or updates, or provide other transaction-related information. Without such communications, you may not be aware of important developments relating to your Account that may affect how you can use K-genxchange Services.</p>
                <p>We process your Personal Data to provide a personalised experience, and implement the preferences you request. Without such processing, we may not be able to ensure your continued enjoyment of part or all of K-genxchange Services.</p>
                <p>We process your Personal Data when you contact us to resolve any questions, disputes, collect fees, or to troubleshoot problems. We may process your information in response to another customer’s request, as relevant. Without processing your Personal Data for such purposes, we cannot respond to your requests and ensure your uninterrupted use of the Services.</p>
                <p>We process your Personal Data for quality control and staff training to make sure we continue to provide you with accurate information. If we do not process Personal Data for quality control purposes, you may experience issues on the Services such as inaccurate transaction records or other interruptions. Our basis for such processing is based on the necessity of performing our contractual obligations with you.</p>
                <h5>Network and Information Security</h5>
                <p>We process your Personal Data in order to enhance security, monitor and verify identity or service access, combat spam or other malware or security risks and to comply with applicable securities laws and regulations. The threat landscape on the internet is constantly evolving, which makes it more important than ever that we have accurate and up-to-date information about your use of K-genxchange Services. Without processing your Personal Data, we may not be able to ensure the security of K-genxchange Services.</p>
                <h5>To further improve our Services</h5>
                <p>We process your Personal Data to better understand the way you use and interact with K-genxchange Services. In addition, we use such information to customise, measure, and improve K-genxchange Services and the content and layout of the Website and other K-genxchange Materials, and to develop new services. Without such processing, we cannot ensure your continued enjoyment of K-genxchange Services.</p>
                <h5>Marketing and Communications</h5>
                <p>Based on your communication preferences, we may send you marketing communications to inform you about our events or our partner events; to deliver targeted marketing; and to provide you with promotional offers based on your communication preferences. We use information about your usage of K-genxchange Services and your contact information to provide marketing communications. We may also share your Personal Data with third parties to help us with our marketing and promotional projects or sending marketing communications.</p>
                <p>You may opt out of our marketing activities by contacting us at <span>support@K-genxchange.exchange</span>.</p>
                <h4>5.THIRD PARTY INFORMATION WE RECEIVE</h4>
                <p>As required and/or permitted by applicable law, we may obtain information about you from third party sources, such as public databases, credit bureaus and identification verification partners for purposes of verifying your identity. E.g. Identification verification partners use a combination of government records and publicly available information about you to verify your identity. Such information includes your name, address, job role, public employment profile, credit history, status on any sanctions lists maintained by public authorities, and other relevant data.</p>
                <h4>6.PERSONAL DATA WE MAY SHARE WITH OTHER PARTIES</h4>
                <p>We take care to allow Personal Data we collect from or in relation to you to be accessed only by those who really need to in order to perform their tasks and duties, and to share with third parties who have a legitimate purpose for accessing it. We will generally only share Personal Data we collect from or in relation to you in the following circumstances:</p>
                <p>(i) We share your Personal Data with third party identity verification services and transaction monitoring services to prevent fraud and other illegal activities. This allows us to confirm your identity by comparing the information you provide us to public records and other third party databases. These service providers may create derivative data based on your Personal Data that can be used solely in connection with the provision of identity verification and fraud prevention services.</p>
                <p>(ii) We share your Personal Data with financial institutions and payment services providers with which we partner to process payments you have authorised.</p>
                <p>(iii) We share your Personal Data with service providers under contract who help with parts of our business operations such as payment, marketing, and technology services. Our contracts provide for binding enforceable requirements on our service providers in compliance with applicable laws.</p>
                <p>(iv) We may share Personal Data we collect from or in relation to you with companies or other entities that purchase our assets pursuant to a court-approved sale under applicable bankruptcy laws and / or where we are required to share we collect from or in relation to you pursuant to applicable insolvency law.</p>
                <p>(v) We may share Personal Data we collect from or in relation to you with law enforcement agencies, regulatory authorised or other governmental authorities, officials, or other third parties when we are compelled to do so by a subpoena, court order, or similar legal procedure, or when we believe in good faith that the disclosure of Personal Data we collect from or in relation to you is necessary to prevent physical harm or financial loss, to report suspected illegal activity or to investigate violations of our Terms and Conditions or any other applicable rules, policies or procedures.</p>
                <p>(vi) We may share Personal Data we collect from or in relation to you with companies or other entities that we plan to merge with or be acquired by. Should such a combination occur, we will require that the new combined entity follow this Privacy Policy with respect to Personal Data we collect from or in relation to you. You will receive prior notice of any change in applicable policies, including in the manner as set out in this Privacy Policy.</p>
                <h4>7.WHERE WE PROCESS AND STORE YOUR PERSONAL DATA</h4>
                <p>K-genxchange Exchange India is headquartered in India. Personal Data will be transmitted to data storage facilities where we keep our central records. Personal Data will also be transferred to our offices and appointed agents, where appropriate, in India and around the world in connection with our performance of K-genxchange Services. This means that Personal Data will be transferred to, and stored at a destination outside of your country. The Personal Data will also be processed by staff operating outside your country who work for us, for our suppliers or our business partners. Such staff are engaged in, among other things, the fulfilment of K-genxchange Services, the processing of your payment details and the provision of support services.</p>
                <p>It should also be noted that where we process and store your Personal Data using blockchain technology and relevant distributed or decentralised storage facilities, we will endeavour to protect your Personal Data in a similarly secured manner as that of a conventional storage facility.</p>
                <h4>8.INFORMATION SECURITY</h4>
                <p>We use our best endeavours to ensure confidentiality and protection of Personal Data we collect from or in relation to you, however, we cannot guarantee absolute security. We work hard to protect Personal Data we collect from or in relation to you from unauthorized access, alteration, modification, collection, use, disclosure, copying, disposal, destruction or similar risks. E.g. we use data encryption and firewalls and we restrict access to your Personal Data on a need to know basis for our employees, contractors and agents who require the information to fulfil their job responsibilities.</p>
                <p>Further, we cannot ensure the security or confidentiality of Personal Data that you transmit to us or receive from us via the internet or wireless connection. </p>
                <p>If you have reason to believe that your data is no longer secure, or if you become aware of any unauthorised access to or use of your account, please contact us at the email address <span>compliance@K-genxchange.exchange</span>.</p>
                <h4>9.RETENTION OF PERSONAL DATA</h4>
                <p>We take steps to ensure that we retain Personal Data no longer than is necessary for the fulfillment of the purpose for which it was collected, unless the further retention of such Personal Data is otherwise permitted or required by applicable laws and regulations.</p>
                <h4>10.UNDER-AGE PERSONAL DATA</h4>
                <p>We do not knowingly request to collect Personal Data from any person under the age of 18. If a User submitting Personal Data is suspected of being younger than 18 years of age, we will require the User to close his or her account and will not allow the User to continue buying or selling digital currencies. We will also take steps to delete the Personal Data we collect from or in relation to such User as soon as possible. Please notify us if you know of any individuals under the age of 18 using K-genxchange Services so we can take action to prevent access to K-genxchange Services.</p>
                <h4>11.EUROPEAN ECONOMIC AREA & CHANNEL ISLANDS PRIVACY STATEMENT</h4>
                <p>While Users who are located in the EEA or the Channel Islands are customers of our India entity, we recognize and, to the extent applicable to us, adhere to relevant EEA or the Channel Islands data protection laws.</p>
                <p>We may collect Personal Data from Users located in the EEA or the Channel Islands. To facilitate the services we provide to Users located in the EEA or the Channel Islands, we request explicit consent for the transfer of Personal Data from the EEA or the Channel Islands to a destination outside of the EEA and the Channel Islands. If you are an individual located in the EEA or the Channel Islands and you decline to consent to such transfer, you will no longer be able to use K-genxchange Materials and our K-genxchange Services. You will have the ability to withdraw Digital Assets and Legal Tender from your Account; however, all other functionality will be disabled.</p>
                <h5>Lawful Grounds to Process and Obtain Consent</h5>
                <p>We process the Personal Data of Users who are located in the EEA or the Channel Islands for one or more of several lawful purposes, including:</p>
                <p>(i) To provide you with K-genxchange Services, including customer service support;</p>
                <p>(ii) To optimize and enhance K-genxchange Services for all customers or for you specifically;</p>
                <p>(iii) To comply with legal obligations, including to conduct anti-fraud and identity verification and authentication checks (you authorize us to share your Personal Data with our third-party service providers, who may also conduct their own searches of publicly available Personal Data about you); and</p>
                <p>(iv) To monitor the usage of K-genxchange Services, conduct automated and manual security checks of our service, to protect our rights and perform our lawful obligations.</p>
                <p>Users in the EEA or the Channel Islands may withdraw consent at any time where consent is the lawful basis for processing their Personal Data. Should a User withdraw consent for processing or otherwise object to processing that impedes our ability to comply with applicable laws and regulations, a User may be unable to avail him or herself of the Services we provide.</p>
                <h4>AUTOMATED DECISION-MAKING</h4>
                <p>We do not engage in automated decision-making.</p>
                <h5>Non-Disclosure of Personal Data</h5>
                <p>Our employees are prohibited, either during or after their employment, from disclosing Personal Data to any person or entity outside of our company, including family members, except under the circumstances described above. An employee is only permitted to disclose the Personal Data of a User to such other employees who need access to such information in order to deliver K-genxchange Services to that User.</p>
                <p>If, as an EEA or Channel Islands Citizen, you believe that we have not adequately resolved any such issues, you have the right to contact your local supervisory authority.</p>
                <h4>12.THIRD PARTY PERSONAL DATA</h4>
                <p>Where you disclose Personal Data of other individuals to us, you warrant that such individuals have consented to us collecting, processing, using, disclosing and/or sharing such Personal Data for: (i) the relevant purpose for which you made the disclosure or as was notified to you at the relevant time; and (ii) the other purposes as described below in this Privacy Policy.</p>
                <h4>13.QUESTIONS</h4>
                <p>The headings and subheadings herein are included for convenience and identification only and are not intended to interpret, define or limit the scope, extent or intent of this Privacy Policy in any manner whatsoever.</p>
                <p>The meaning of general words is not limited by specific examples introduced by expressions such as, “including”, “for example”, “such as”, or such similar expressions, and the word “includes” or “including” as used in this Privacy Policy shall be construed to mean “includes without limitation” or, as the case may be, “including without limitation”.</p>
            </div>
            <div className="terms-modal-footer">
                {/* <div>
                     <input 
                        type="checkbox" 
                        id="termsandcondition" 
                        name="termsandcondition" 
                        value="termsandcondition"
                        onChange={() =>props.handleCheckBox('privacyandpolicy')}
                        checked={props.privacyandpolicy}
                    />
                     <label htmlFor="termsandcondition">I acknowledge that I have read and agree to KaigenX India's Terms and Conditions.</label>
                </div>
                 <button
                    onClick={() =>props.privacyModal(false)}
                 >Done</button> */}
            </div>
        </Modal>
       </div>
    )
}

export default PrivacyAndPolicy
