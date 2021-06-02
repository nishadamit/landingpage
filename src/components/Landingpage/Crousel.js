import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const ImageCrousel = () =>{

    const data = [
        {
            id:1,
            url:'https://images.unsplash.com/photo-1620548055714-c8daec71d708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
        },
        {
            id:2,
            url:'https://images.unsplash.com/photo-1620502339816-1b6742e59c4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },
        {
            id:3,
            url:'https://images.unsplash.com/photo-1620449269075-8400a1928fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:4,
            url:'https://images.unsplash.com/photo-1620447875063-19be4e4604bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
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
`

const ImageWrapper = styled.img`
        height: 100vh;
        width: 100vw;
        object-fit: cover;
`

export default ImageCrousel
