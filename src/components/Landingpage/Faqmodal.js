import React,{ useState } from 'react';
import ModalComponent from './Modal';
import styled from 'styled-components';

const FaqModal = (props) =>{

       const [ modalvisibility , setmodalVisibility ] = useState(false)
        
       return(
           <ModalComponent
                title="Frequently Asked Questions"
                visibilty={props.modalIsOpen}
                handleModals={props.handleModals}
           >
                  <DivWrapper>
                    <p>As the problems and solutions are multifaceted, our platform collects research and solutions from all industry verticals and scientific fields. AISquare is a research hub that fosters diverse and innovative ideas that arise from both the private and public sector, inclusive of government and nonprofit entities.</p>
                    <p>Our network showcases and promotes researchers and their work, creating a collaborative global platform for dynamic conversation in order to drive societal change. It is a vibrant and thought-provoking host that encourages the exchange of ideas. AISquare serves as a resource for professionals and researchers to find existing solutions and proposals.</p>
                    <p>SStarting with COVID19, our regional correspondents across the world will be able to report via multimedia blog posts on local publications, enriching our platform with global research, sparking engaging conversations and innovation. The curated AISquare blog posts make complex solutions easily accessible and comprehensible, making it quicker to locate and innovate solutions to the pressing issues of our world.</p>
                    <p>AISquare is a solution built in response to the COVID19 pandemic, with a vision to create a ‘source of truth’ platform for all research and a network of experts, to collaborate and respond at scale to the current and future, local and global issues. Too many researchers and people do not have one place to go and constantly have to reinvent the wheel when it comes to starting their own research. AISquare aims to eliminate that inefficiency by being a one-stop place where everyone can get all the research they need from all different sectors to help solve pressing issues in a timely and thorough manner.</p>
                    <p>AISquare is a solution built in response to the COVID19 pandemic, with a vision to create a ‘source of truth’ platform for all research and a network of experts, to collaborate and respond at scale to the current and future, local and global issues. Too many researchers and people do not have one place to go and constantly have to reinvent the wheel when it comes to starting their own research. AISquare aims to eliminate that inefficiency by being a one-stop place where everyone can get all the research they need from all different sectors to help solve pressing issues in a timely and thorough manner.</p>
                  </DivWrapper>
           </ModalComponent>
       )
}

const DivWrapper = styled.div` 
      p{
             color: #ffffff;
      }
`

export default FaqModal