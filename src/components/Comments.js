import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-top:25px;
display:felx;
align-items: flex-start;
width:95%;

`;

const Wrapper = styled.div`
margin-left:15px;
flex-grow: 1;
`;

const ProfilePhoto = styled.img`
width:36px;
height: 36px;
background-color:palegreen;
border-radius:50%;
`;
const ProfileName = styled.span`
font-size:14px;
font-weight:500;
color: #0f0f0f;

`;

const CommentTime = styled.span`
font-weight: 400;
font-size: 12px;
color: #606060;
margin-left: 7px;
`;
const Comment = styled.div`
font-size:14px;
margin-top: 10px;

`;



const Comments = () => {
  return (
    <Container>
        <ProfilePhoto/>
        <Wrapper>

        <ProfileName>First User</ProfileName><CommentTime> 1 month</CommentTime>

        <Comment>Honestly as a graphic designer this gets me so excited because it means that I will be able to prototype for clients much quicker and will be able to give them tangible prototypes and mockups without spending hours and hours on something only for them to switch up and change ideas last minute. AI isn't going to ever be a replacement. Its going to be a tool just like everything else we already use as </Comment>
        </Wrapper>

    </Container>
  )
}

export default Comments