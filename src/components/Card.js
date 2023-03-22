import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {format} from 'timeago.js'

const Container = styled.div`
width: 292px;
cursor: pointer;
/* background-color:green; */
padding-top: 35px;
`;

const Video = styled.div`
display: flex;
position: relative;
`;

const VideoImg = styled.img`
width: 100%;
background-color: #909090;
height: 164px;     
border-radius:20px;
`;


const VideoLength = styled.div`
background-color: #000;
color:white;
font-size:12px;
border-radius:20px;
padding:2px 5px;
position:absolute;
bottom:0;
right:0;
margin:5px;
`;

const ChannelPhoto = styled.img`
width:36px;
height:36px;
border-radius:50%;
margin-right: 12px;
background-color: #909090;
`;

const WrapperDetails = styled.div`
display: flex;
align-items: flex-start;
margin-top: 12px;
`;
const Details = styled.div`
`;

const Title = styled.h3`
font-size:14px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;
const ChannelName = styled.div`
font-size: 12px;
font-weight: 400;
padding:5px 0px;
margin-top: 7px;
color: #606060;
`;

const Info = styled.div`
font-weight: 400;
font-size: 12px;
color: #606060;
`;




const Card = ({type, video}) => {

  const [channel, setChannel] = useState({})

  useEffect(() => {
    const fetchChannel = async ()=>{
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    }
    fetchChannel();
    
  }, [video.userId])

  return (
    <Link to="/videos/123" style={{textDecoration: "none", color:"inherit"}}>
      <Container>
        <Video>
            <VideoImg src={video.imgUrl}/>    
            <VideoLength>8:43</VideoLength>
        </Video>
        <WrapperDetails>
                <ChannelPhoto src={channel.img}/>
            <Details>        
                <Title>{video.title}</Title>
                <ChannelName>{channel.name}</ChannelName>
                <Info>{video.views} views • {format(video.createdAt)}</Info>        
            </Details>
        </WrapperDetails>        
      </Container>
    </Link>
  )
}

export default Card