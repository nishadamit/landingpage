import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const ImageCrousel = () =>{

    const data = [
        {
            id:4,
            url:'https://cdn.pixabay.com/photo/2017/12/29/03/17/image-3046639_960_720.png'
        },
        {
            id:1,
            url:'https://images.unsplash.com/photo-1624872281690-3e8b06cf6b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id:2,
            url:'https://images.unsplash.com/photo-1624609590176-1884cac7aaca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id:3,
            url:'https://images.unsplash.com/photo-1624514841657-9d1ec657d795?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
    ]
      return(
        <StyledCrouselWrapper
           autoPlay
           infiniteLoop
           showThumbs={false}
           showIndicators={false}
           showStatus={false}
           renderArrowNext={() =><div></div>}
           renderArrowPrev={() =><div></div>}
        >
         {
             data.map((image) =><div>
                                    <ImageWrapper src={image.url} />
                                </div>)
         }
        </StyledCrouselWrapper>
      )
}

const StyledCrouselWrapper = styled(Carousel)`
            position: absolute;
            height: 100vh;
            width: 100%;
            background-position: center;
`

const ImageWrapper = styled.img`
        height: 100vh;
        width: 100vw;
        object-fit: cover;
`

export default ImageCrousel
