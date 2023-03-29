import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'

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



const Comments = ({comment}) => {


  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async ()=>{
      const res = await axios.get(`https://video-share-app.onrender.com/api/users/find/${comment.userId}` , );
      setUser(res.data);
    }
    fetchUser();
    
  }, [comment.userId])

  return (
    <Container>
        <ProfilePhoto src={user.img}/>
          <Wrapper>
            <ProfileName>{user.name}</ProfileName><CommentTime> {format(comment.createdAt)}</CommentTime>
            <Comment>{comment.comment}</Comment>
          </Wrapper>
    </Container>
  )
}

export default Comments