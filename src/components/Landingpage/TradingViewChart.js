import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import styled from 'styled-components';

const TradingViewChart = (props) => {

        return (
                <TradingViewWidgetContainer>
                    <TradingViewWidget
                        symbol={props.chart}
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </TradingViewWidgetContainer>
        )

        // return(
        //     <div class="tradingview-widget-container">
        //         <div id="tradingview_f5785"></div>
        //         <div class="tradingview-widget-copyright">
        //             <a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank">
        //                 <span class="blue-text">AAPL Chart</span>
        //             </a> 
        //             by TradingView
        //         </div>
        //        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
        //         <script type="text/javascript">
        //         new TradingView.widget(
        //                 {
        //                     "width": 980,
        //                     "height": 300,
        //                     "symbol": "NASDAQ:AAPL",
        //                     "timezone": "Etc/UTC",
        //                     "theme": "light",
        //                     "style": "1",
        //                     "locale": "en",
        //                     "toolbar_bg": "#f1f3f6",
        //                     "enable_publishing": false,
        //                     "hide_legend": true,
        //                     "range": "YTD",
        //                     "hide_side_toolbar": false,
        //                     "allow_symbol_change": true,
        //                     "details": true,
        //                     "hotlist": true,
        //                     "calendar": true,
        //                     "show_popup_button": true,
        //                     "popup_width": "1000",
        //                     "popup_height": "650",
        //                     "container_id": "tradingview_f5785"
        //                 },
        //         );
        //         </script>
        // </div>
        // )
}

const TradingViewWidgetContainer = styled.div`
       height: 350px;
       padding:0px 20px 20px 20px;
`

export default TradingViewChart


