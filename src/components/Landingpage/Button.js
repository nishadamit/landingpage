import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButton =(props) =>{
      return(
         <StyledButtonDesign {...props}>
              {props.children}
         </StyledButtonDesign>
      )
}

const StyledButtonDesign = styled(Button)`
      background-color: ${props => props.backgroundColor ? props.backgroundColor :"#000000"};
      color: ${props => props.COLOR ? props.COLOR :"#000000"};
      border-width: 0px;
      padding: 0px 25px !important;
      height: 34px;
      line-height: 34px !important;
`