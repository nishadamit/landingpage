import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

export const InputBox = (props) =>{
        return(
            <StyledInputBox
                {...props}
            />
        )
}

const StyledInputBox = styled(Input)`
       height: ${props => (props.HEIGHT ? props.HEIGHT : "30px")};
       border-radius: 5px;
`