import React from 'react';
import styled from 'styled-components';

export const ImageBox = (props) =>{
        return(
            <ImageWrapper 
                 src={props.source}
                 alt={props.alt}
                 {...props}
            />
        )
}

const ImageWrapper = styled.img`
    width: ${props =>(props.WIDTH)};
    height: ${props =>(props.HEIGHT)};
    height: ${props =>(props.HEIGHT)};
    border-radius: ${props =>(props.borderRadius ? props.borderRadius :"0px")};
    border: ${props =>(props.border ? props.border :"0px")};
`
