import React from 'react';
import { Col, Card,} from 'antd';
import styled from 'styled-components';
import { LinkedinOutlined } from '@ant-design/icons';
const { Meta } = Card;

const OurteamCard = ({details}) =>{
        return(
            <Col lg={{span:6}} sm={{span:22}} xs={{span:24}}>
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
       .ant-card-cover img{
            width: 100%;
            height: 190px;
       }
       .ant-card-body {
            height: 121px;
        }
        @media(max-width:576px){
            .ant-card-body {
                height: 70px;
                padding: 10px;
            }
        }
`

export default OurteamCard