import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import CheckIcon from '@mui/icons-material/Check';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Comments from '../components/Comments';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { format } from 'timeago.js'
import { fetchFailure, fetchStart, fetchSuccess, like, dislike } from '../redux/videoSlice';
import { subscribe, unsubscribe } from '../redux/userSlice';


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
background-color: #909090;
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
const UnsubscribeBtn = styled.button`
height:36px;
background-color: #f8f8f8;
padding-inline: 15px;
display:flex;
align-items: center;
border-radius: 20px;
border: none;
font-weight: 500px;
font-size:1rem;
gap: 5px;
margin-left:8px;
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
const Dislike = styled.button`
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

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  console.log(path);

  const [channel, setChannel] = useState({});
  const [comments, setComments] = useState([])
  console.log(channel.subscribers) 

  useEffect(() => {
    const fetchData = async () => {
      // dispatch(fetchStart());        

      try {

        const videoRes = await axios.get(`https://video-share-app.onrender.com/api/videos/find/${path}`);
        const channelRes = await axios.get(`https://video-share-app.onrender.com/api/users/find/${videoRes.data.userId}`);
        const commentsRes = await axios.get(`https://video-share-app.onrender.com/api/comments/${path}`)
        setChannel(channelRes.data);
        setComments(commentsRes.data);
        dispatch(fetchSuccess(videoRes.data));

      } catch (err) {
      }      
    }
    fetchData();    
  }, [ path,dispatch])

  const handleLike = async () => {
    try {
      await axios.put(`https://video-share-app.onrender.com/api/users/like/${path}`, {withCredentials: true})
      dispatch(like(currentUser._id))
    } catch (err) {
      
    }
  }
  const handleDislike = async () => {
    try {      
      await axios.put(`https://video-share-app.onrender.com/api/users/dislike/${path}`, {withCredentials: true})
      dispatch(dislike(currentUser._id))
    } catch (err) {
      
    }
  }
  const handleSub = async () => {
    try {      
      await axios.put(`https://video-share-app.onrender.com/api/users/sub/${channel._id}`, {withCredentials: true})
      dispatch(subscribe(channel._id))
    } catch (err) {
      
    }
  }
  const handleUnsub = async () => {
    try {      
      await axios.put(`https://video-share-app.onrender.com/api/users/unsub/${channel._id}`, {withCredentials: true})
      dispatch(unsubscribe(channel._id))
    } catch (err) {
      
    }
  }






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
        <Title>{currentVideo.title}</Title>
        <InteractionZone>
          <ChannelPhoto src={channel.img}/>
          <WrapperInfo>
          <ChannelName>{channel.name}</ChannelName>
          <SubscribersNo>{channel.subscribers?.length}</SubscribersNo>
          </WrapperInfo>
          <Subscribe>
            {currentUser.subscribedUsers?.includes(currentVideo.userId) 
            ?
            <UnsubscribeBtn onClick={handleUnsub}>Subscribed<CheckIcon /></UnsubscribeBtn>
            :
            <SubscribeBtn onClick={handleSub}>Subscribe</SubscribeBtn>
            }
          </Subscribe>
          <LikeDislikeBtns>
            { currentVideo.likes?.includes(currentUser._id) 
            ? 
              <Like ><ThumbUpIcon/>{currentVideo.likes?.length} likes</Like>
            :
              <Like onClick={handleLike}><ThumbUpOutlinedIcon/>{currentVideo.likes?.length} likes</Like>
            }
            { currentVideo.dislikes?.includes(currentUser._id) 
            ?
              <Dislike ><ThumbDownIcon/></Dislike>
            :
              <Dislike onClick={handleDislike}><ThumbDownOutlinedIcon/></Dislike>
            }
          </LikeDislikeBtns>
          <Share><ShareBtn><ReplyAllIcon/>Share</ShareBtn></Share>
        </InteractionZone>
        <DescritionZone>
        <Info>{currentVideo.views} views {format(currentVideo.createdAt)}   </Info><Tags>{currentVideo.tags}</Tags>
          <VideoDescription>
          {currentVideo.desc}
          </VideoDescription>
        </DescritionZone>
        <CommentZone>
          <CommentsNo>{comments.length} Comments</CommentsNo>
            <AddCommentSection>
              {currentUser 
              ?  
                <UserProfilePicture src={currentUser.img}/> 
              :
                <UserProfilePicture /> 
              }
              <AddComment><AddCommentInput placeholder='Add a comment...'/></AddComment>
            </AddCommentSection>
         {comments.map(comment => (
          <Comments key={comment._id} comment={comment} />
         ))}
        </CommentZone>
        
      </Content>
      <Recommended>
        Recommended
        
      </Recommended>
    </Container>
  )
}

export default Video