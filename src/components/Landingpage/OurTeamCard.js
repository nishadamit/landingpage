import React from 'react';
import { Col, Card,} from 'antd';
import styled from 'styled-components';
import { LinkedinOutlined } from '@ant-design/icons';
const { Meta } = Card;

const OurteamCard = ({details}) =>{
        return(
            <Col lg={{span:6}} md={{span:8}} sm={{span:22}} xs={{span:22}}>
                <StyledCard
                    cover={
                    <img
                        alt={details.name}
                        src={details.image}
                    />
                    }
                    actions={[
                        <LinkedinOutlined />
                    ]}
                >
                    <Meta
                        title={details.name}
                        description={details.desiganation}
                    />
                </StyledCard>
            </Col>
        )
}

const StyledCard = styled(Card)`
       margin-left: 10px;
       margin-top: 10px;
       .ant-card-cover{
             padding:9px 5px 0px 5px;;
       }
       
       .ant-card-cover img{
            width: 100%;
            height: 190px;
            border-radius: 50%;
            padding: 0px 17px;

       }
       .ant-card-body {
            height: 121px;
        }
        @media(min-width:576px){
            .ant-card-cover img{
              padding: 0px 5px;
        }
        }
        @media(max-width:576px){
            .ant-card-body {
                height: 70px;
                padding: 10px;
            }
        }
`

export default OurteamCard