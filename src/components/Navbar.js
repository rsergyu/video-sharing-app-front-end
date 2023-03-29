import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Container = styled.div`
display: flex;
justify-content: space-between;
height: 55px;
padding:0px 16px;
position: sticky;
top:0;
background-color: #fff;
z-index:10;
`;

const Search = styled.div`
display:flex;
justify-content: space-between;
width:40%;
margin-block:7px;
margin-left:20%;
border-radius: 20px;
border: 1px solid #909090;
cursor: pointer;
`;

const SearchIconButton = styled.div`
background-color: #f8f8f8;
padding-inline: 15px;
display:flex;
align-items: center;
border-radius: 0 20px 20px 0;
border-left: 1px solid #909090;
`;

const Input = styled.input`
background-color: transparent;
border: none;
padding-left: 15px;
font-size:16px;
outline: none;
cursor: pointer;
width:100%
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

const User = styled.div`
display: flex;
align-items: center;
gap:10px;
font-weight:500;
`;

const Avatar = styled.img`
width: 32px;
height: 32px;
border-radius:50px;
background-color:#999;
`;

const Navbar = () => {

  const {currentUser} = useSelector(state=>state.user)

  return (
    <Container>
      <Search>
      <Input placeholder='Search'></Input>
      <SearchIconButton>   <SearchOutlinedIcon/> </SearchIconButton>
      </Search>
      {currentUser 
        ? 
        (<User>
          <VideoCallOutlinedIcon/>
          <Avatar src={currentUser.img}/>
          {currentUser.name}
        
        </User>) 
        : 
        <Link to="/signin" style={{textDecoration:"none", color:"inherit"}}>
        <BtnLogin>
            <AccountCircleOutlinedIcon/>
            Sign in
        </BtnLogin>
      </Link>}

    </Container>
  )
}

export default Navbar