import React, { useState } from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';



const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height: calc(100vh-56px);
`;
const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:10px;
`;
const Title = styled.h1`
font-size:24px;
`;
const SubTitle = styled.h2`
font-style: 20px;
font-weight: 300;
`;
const Input = styled.input`
border-radius:3px;
background-color: transparent;
width:100%;
border: 1px solid #909090;
font-size:1.4rem;
padding:10px;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;

`;
const Button = styled.button`
border-radius:3px;
border: none;
font-weight:500;
cursor: pointer;
background-color: #065fd4;
color:#fff;
font-size:1rem;
padding: 5px 15px 5px 15px;
margin-block:12px;

`;

const LinkDiv = styled.span`
`;

const Signin = () => {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://video-share-app.onrender.com/api/auth/signup", {name,email,password})
      console.log(res.data)
      dispatch(loginSuccess());
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
      
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to OpenTube</SubTitle>
        <Input placeholder='username' onChange={e=>setName(e.target.value)}/>
        <Input type='email' placeholder='email'onChange={e=>setEmail(e.target.value)}/>
        <Input type='password' placeholder='password'onChange={e=>setPassword(e.target.value)}/>
        <Button onClick={handleSignUp}>Create account</Button>        
        <Link to="/signin" style={{textDecoration:"none", color:"inherit"}}>
        <LinkDiv>Sign In</LinkDiv>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Signin