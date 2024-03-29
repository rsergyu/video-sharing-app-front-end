import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import axios from 'axios'

const Container = styled.div`
display: flex;
justify-content:flex-start;
flex-wrap: wrap;
gap: 10px;
`;



const Home = ({type}) => {

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
      {videos.map(video => ( 
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Home