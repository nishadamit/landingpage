import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';


import TradingViewChart from './TradingViewChart';
const { TabPane } = Tabs;


const TradingViewContainer = () =>{
    return(
            <TabContainer type="card">
                <TabPane tab="BTC/INR" key="1">
                     <TradingViewChart chart="BTCINR" />
                </TabPane>
                <TabPane tab="ETH/INR" key="2">
                     <TradingViewChart chart="ETHINR" /> 
                </TabPane>
            </TabContainer>
    )
}

const TabContainer = styled(Tabs)`
      background-color: #ffffff;
      .ant-tabs-nav{
          padding: 10px 20px 0px 20px;
      }
`

export default TradingViewContainer
