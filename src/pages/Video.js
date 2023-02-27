import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import ChannelPhotoImg from '../img/ChannelPhoto.png'

const Container = styled.div`
display:flex;
`;

const Content = styled.div`
flex: 5;
`;
const WrapperVideo = styled.div`

`;

const Title = styled.h1`
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const ChannelPhoto = styled.img`
width:36px;
height:36px;
border-radius:50%;
margin-right: 12px;
`;

const InteractionZone = styled.div`
display: flex;
align-items: center;

`;

const WrapperInfo = styled.div`
flex:1;
`;

const ChannelName = styled.div`
font-size: 12px;
font-weight: 400;
color: #606060;
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
height:36px;
`;
const Like = styled.button`
background-color: #f8f8f8;
padding-inline: 15px;
display:flex;
align-items: center;
border-radius: 20px 0px 0px 20px;
/* border-left: 1px solid #909090; */
`;
const Unlike = styled.button`
background-color: #f8f8f8;
padding-inline: 15px;
display:flex;
align-items: center;
border-radius: 0 20px 20px 0;
/* border-left: 1px solid #909090; */
`;
const Share = styled.div`
flex:1;

`;
const ShareBtn = styled.button`
`;

const DescritionZone = styled.div``;

const Info = styled.div`
font-weight: 400;
font-size: 12px;
color: #606060;
`;
const Tags = styled.div`
font-weight: 400;
font-size: 12px;
color: #606060;
`;
const VideoDescription = styled.div`
font-weight: 400;
font-size: 12px;
color: #606060;
`;


const CommentZone = styled.div``;

const Recommended = styled.div`
flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <WrapperVideo>

        <iframe 
          width="885"  
          height="498"
          src="https://www.youtube.com/embed/yIaXoop8gl4" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
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
          <LikeDislikeBtns><Like>Like</Like><Unlike>Unlike</Unlike></LikeDislikeBtns>
          <Share><ShareBtn>Share</ShareBtn></Share>
        </InteractionZone>
        
      </Content>
      <Recommended>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Recommended>
    </Container>
  )
}

export default Video