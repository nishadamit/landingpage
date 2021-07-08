import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export class TradingViewChart extends Component {




    render() {
        return (
            <div style={{height:'500px',padding:"20px"}}>
                <TradingViewWidget
                    symbol="ALL"
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                />
            </div>
        )
    }
}

export default TradingViewChart


// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div id="tradingview_012ee"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
//   <script type="text/javascript">
//   new TradingView.widget(
//   {
//   "width": 980,
//   "height": 610,
//   "symbol": "NASDAQ:AAPL",
//   "timezone": "Etc/UTC",
//   "theme": "light",
//   "style": "1",
//   "locale": "en",
//   "toolbar_bg": "#f1f3f6",
//   "enable_publishing": false,
//   "range": "YTD",
//   "allow_symbol_change": true,
//   "hotlist": true,
//   "calendar": true,
//   "show_popup_button": true,
//   "popup_width": "1000",
//   "popup_height": "650",
//   "container_id": "tradingview_012ee"
// }
//   );
//   </script>
// </div>
// <!-- TradingView Widget END -->