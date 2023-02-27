import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ChannelPhotoImg from '../img/ChannelPhoto.png'

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
/* width: 100%; */
background-color: #999;
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




const Card = () => {
  return (
    <Link to="/video/123" style={{textDecoration: "none", color:"inherit"}}>
      <Container>
        <Video>
            <VideoImg src="https://i.ytimg.com/vi/8I3NTE4cn5s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDobmOkf5Plpv-2sThX0SlbWETZJg"/>    
            <VideoLength>8:43</VideoLength>
        </Video>
        <WrapperDetails>
                <ChannelPhoto src={ChannelPhotoImg}/>
            <Details>        
                <Title>This is the first ever hardcoded video title, that need to be very long for CSS reason.</Title>
                <ChannelName>FirstChannel Video</ChannelName>
                <Info>2.3M views • 1 month ago</Info>        
            </Details>
        </WrapperDetails>        
      </Container>
    </Link>
  )
}

export default Card