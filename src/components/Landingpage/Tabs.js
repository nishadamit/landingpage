import React from 'react';
import { Tabs} from 'antd';
import LandingForm from './Form';
import styled from 'styled-components';
const { TabPane } = Tabs;

const LandingTabs = () =>{
       return(
            <StyledTabs
               type="card" 
               centered
            >
                <TabPane tab=" Individual Account " key="1">
                    <LandingForm/>
                </TabPane>
                {/* <TabPane tab=" Carporate Account " key="2">
                    <LandingForm />
                </TabPane> */}
            </StyledTabs>
       )
}

const StyledTabs = styled(Tabs)`
        background-color: #ffffff;

        .ant-tabs-nav-list{
            width: 100%;
        }
        .ant-tabs-tab{
            width: 50%;
            background-color: #DCDCDC !important;
            height: 50px;
            margin-left: 0px !important;
            font-size: 18px;
            @media(max-width:576px){
                font-size: 15px;
            }
        }
        .ant-tabs-tab-active{
            background-color: #ffffff !important;
            color: #000000 !important;
        }
        .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
            color: #000000 !important;
            opacity: 0.6;
        }
        .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab, .ant-tabs-card.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab, .ant-tabs-card.ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
            margin-left: 0px !important;
        }
`

export default LandingTabs