import React from 'react';
import styled from 'styled-components';
import CheckList from '../../assests/images/checklist.svg'

const Checklistparagraph = ({description}) =>{
       return(
           <ParagraphWrapper>
               <ImageWrapper src={CheckList} />
               <Paragraph2>{description}</Paragraph2>
           </ParagraphWrapper>
       )
}
const ParagraphWrapper = styled.div`
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
        align-items: flex-start;
`
const ImageWrapper = styled.img`
       width: 20px;
`
const Paragraph2 = styled.span`
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
        margin-left: 5px;
`

export default Checklistparagraph