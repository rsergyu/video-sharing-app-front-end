import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import ChannelPhotoImg from '../img/ChannelPhoto.png'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Comments from '../components/Comments';
import axios from 'axios';

const Container = styled.div`
display:flex;
`;

const Content = styled.div`
flex: 5;
`;
const WrapperVideo = styled.div`
margin-bottom: 10px;
`;

const Title = styled.h1`
font-size:20px;
font-weight:600;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const ChannelPhoto = styled.img`
width:40px;
height:40px;
border-radius:50%;
margin-right: 12px;
`;
const InteractionZone = styled.div`
display: flex;
align-items: center;
margin-block: 10px;

`;
const WrapperInfo = styled.div`
flex:1;
`;
const ChannelName = styled.div`
font-size: 16px;
font-weight: 500;
color: #030303;
padding-block: 5px;
`;
const SubscribersNo = styled.div`
font-weight: 400;
font-size: 12px;
color: #606060;
`;
const Subscribe = styled.div`
flex: 1;

`;
const SubscribeBtn = styled.button`
height:36px;
width:70%;
border-radius: 20px;
gap: 7px;
color: white;
background-color: red;
border: none;
/* padding: 5px 15px 5px 10px; */
font-weight: 500px;
font-size:1rem;
/* margin-block:12px; */
cursor: pointer;

`;
const LikeDislikeBtns = styled.div`
display: flex;
flex:2;
justify-content:flex-end;
align-items: center;
`;
const Like = styled.button`
height:36px;
background-color: #f8f8f8;
padding-inline: 15px;
display:flex;
align-items: center;
border-radius: 20px 0px 0px 20px;
border: none;
font-weight: 500px;
font-size:1rem;
gap: 10px;
cursor: pointer;
border-right: 2px solid #c8c8c8;
`;
const Unlike = styled.button`
height:36px;
background-color: #f8f8f8;
padding-inline: 15px;
display:flex;
align-items: center;
border-radius: 0 20px 20px 0;
border: none;
font-weight: 500px;
font-size:1rem;
cursor: pointer;

`;
const Share = styled.div`
flex:1;
display: flex;
/* justify-content:flex-end; */
`;
const ShareBtn = styled.button`
height:36px;
background-color: #f8f8f8;
padding-inline: 15px;
display:flex;
align-items: center;
border-radius: 20px;
border: none;
font-weight: 500px;
font-size:1rem;
gap: 10px;
margin-left:8px;
cursor: pointer;
`;
const DescritionZone = styled.div`
background-color: #f8f8f8;
border-radius: 20px;
height:120px;
padding: 5px 15px;
width:95%;
-webkit-box-sizing: border-box; 
-moz-box-sizing: border-box;    
box-sizing: border-box; 
`;
const Info = styled.span`
font-weight: 500;
font-size: 14px;
color: #0F0F0F;
`;

const Tags = styled.span`
font-weight: 400;
font-size: 14px;
color: #606060;
`;

const VideoDescription = styled.div`
font-weight: 400;
font-size: 14px;
color: #0F0F0F;
margin-top:8px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;

`;


const CommentZone = styled.div`
margin-top: 20px;
`;
const CommentsNo = styled.div`

`;
const AddCommentSection = styled.div`
display: felx;
align-items: center;
margin-top: 25px;
margin-bottom: 45px;
width:95%;
`;

const UserProfilePicture = styled.img`
background-color: #909090;
border-radius: 50%;
width:36px;
height:36px;
`;
const AddComment = styled.div`
width:95%;
margin-left: 15px;
border-bottom: 1px solid #909090;
margin-bottom: 20px;
`;
const AddCommentInput = styled.input`
border: none;
font-size:16px;
outline: none;
cursor: pointer;
background-color: transparent;
width:100%;
`;


const Recommended = styled.div`
flex: 2;
`;

const Video = ({type}) => {

  const [videos, setVideos] = useState([]);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchVideos = async ()=>{
      const res = await axios.get(`https://video-share-app.onrender.com/api/videos/${type}`, {withCredentials: true});
      setVideos(res.data);
      console.log(res.data)
    }
    fetchVideos();
    
  }, [type])


  return (
    <Container>
      <Content>
        <WrapperVideo>

        <iframe 
          width="857"  
          height="482"
          src="https://www.youtube.com/embed/8I3NTE4cn5s" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen >
        </iframe>
        </WrapperVideo>
        <Title>This is the first ever hardcoded video title, that need to be very long for CSS reason.</Title>
        <InteractionZone>
          <ChannelPhoto src={ChannelPhotoImg}/>
          <WrapperInfo>
          <ChannelName>FirstChannel Video</ChannelName>
          <SubscribersNo>186K subscribers</SubscribersNo>
          </WrapperInfo>
          <Subscribe><SubscribeBtn>Subscribe</SubscribeBtn></Subscribe>
          <LikeDislikeBtns><Like><ThumbUpOutlinedIcon/>71.2k</Like><Unlike><ThumbDownOutlinedIcon/></Unlike></LikeDislikeBtns>
          <Share><ShareBtn><ReplyAllIcon/>Share</ShareBtn></Share>
        </InteractionZone>
        <DescritionZone>
        <Info>2,3M views  27 Dec 2022  </Info><Tags>#ai #chatgpt #midjourney</Tags>
          <VideoDescription>
          
Learn how to use AI Art and ChatGPT to Create a Website without writing a single line of code!

⭐ Check out my Design UI / UX Course called Enhance UI ⭐
https://uxenhance.editorx.io/enhance-ui

In this video, I'm going to generate website designs with midjourney, which is an AI art tool for creating images. Then we will jump into chat gpt to create the written content for the website, and finally put it all together in Editor X, which is a no coding tool for creating sites! Nocode and artificial intelligence assisted art will definitely be the future!

MidJourney:
https://www.midjourney.com/

ChatGPT:
https://chat.openai.com/

Editor X:
https://www.editorx.com/editor-x/codex

Want to learn more, say hi, and interact with the Codex Community? You can also find our Community Discord below: This channel also has Editor X's backing!
https://uxenhance.editorx.io/join

#ai #chatgpt #midjourney
          </VideoDescription>
        </DescritionZone>
        <CommentZone>
          <CommentsNo>2,057 Comments</CommentsNo>
          <AddCommentSection>
            <UserProfilePicture />
            <AddComment><AddCommentInput placeholder='Add a comment...'/></AddComment>
          </AddCommentSection>
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        </CommentZone>
        
      </Content>
      <Recommended>
        Recommended
        {videos.map(video => ( 
        <Card key={video._id} video={video}/>
      ))}
      </Recommended>
    </Container>
  )
}

export default Video