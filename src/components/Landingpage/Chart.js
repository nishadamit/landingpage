import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Layout,Row,Col, Card,Avatar} from 'antd';
import { chartData } from './ChartData';


const data = {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'BTC/INR'
    },
    subtitle: {
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: 'Exchange rate'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'USD to EUR',
        data: chartData
    }]
}

const Chart = () =>{
       return(
           <>
              <hr />
              <Row>
                  <Col lg={{span:19,offset:2}} sm={{span:22,offset:1}} xs={{span:22,offset:1}}>
                       <HighchartsReact highcharts={Highcharts} options={data} />
                  </Col>
              </Row>
                 
           </>        
       )
}

export default Chart