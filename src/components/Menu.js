import React from 'react'
import styled from 'styled-components'
import LogoImg from '../img/Logo.png'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Container = styled.div`
flex:1;
background-color: #ffffff;
color: #000;
height: 100dvh;
position: sticky;
top: 0;

`;
const Wrapper = styled.div`
padding: 20px 25px;
`;


const Logo = styled.div`
display:flex;
gap:5px;
font-weight: bold;
align-items: center;
margin-bottom: 20px;
`;

const Img = styled.img`
width:25px;
`;

const Section = styled.div`
border-bottom: 0.5px solid #c8c8c8;
padding-bottom: 12px;
margin-bottom: 12px;

`;

const Item = styled.div`
display:flex;
padding: 12px 0px;
font-weight: 300;
color:#000;
gap: 10px;
cursor: pointer;
`;

const Login = styled.div`
font-weight: 400;
margin-block: 12px;

`;
const BtnLogin = styled.button`
display: flex;
align-items: center;
background-color: transparent;
border-radius: 20px;
gap: 7px;
color: #065fd4;
border: 1px solid #909090;
padding: 5px 15px 5px 10px;
font-weight: 500px;
font-size:1rem;
margin-block:12px;
cursor: pointer;
`;





const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
          <Logo>
          <Img src={LogoImg}/> OpenTube
          </Logo>
        </Link>
        <Section>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="/trends" style={{textDecoration:"none", color:"inherit"}}>
          <Item>
            <WhatshotIcon/>
            Trending
          </Item>
        </Link>
        <Link to="/subscriptions" style={{textDecoration:"none", color:"inherit"}}>
          <Item>
            <SubscriptionsIcon/>
            Subscription
          </Item>
        </Link>
        </Section>
        <Section>
          <Item>
            <VideoLibraryIcon />
            Library
          </Item>
          <Item>
            <HistoryIcon />
            History
          </Item>
        </Section>
        <Section>
          <Login>
          Sign in to like videos, comment, and subscribe.

          </Login>
        <Link to="/signin" style={{textDecoration:"none", color:"inherit"}}>
          <BtnLogin>
            <AccountCircleOutlinedIcon/>
            Sign in</BtnLogin>
        </Link>
        </Section>
        
      
      </Wrapper>
    </Container>
  )
}

export default Menu