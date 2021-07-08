import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingViewChart = (props) => {

        return (
                <div style={{height:'500px',padding:"0px 20px 20px 20px"}}>
                    <TradingViewWidget
                        symbol={props.chart}
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
        )
}

export default TradingViewChart
