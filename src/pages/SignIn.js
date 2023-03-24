import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import {loginStart, loginSuccess, loginFailure } from '../redux/userSlice'
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';



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
  const [password,setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("https://video-share-app.onrender.com/api/auth/signin", {name,password} )
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
      
    }
    
    
    
  }
  const signInWithGoogle = async () => {
    dispatch(loginStart());

    signInWithPopup(auth,provider)
      .then((result) => {
         axios.post("https://video-share-app.onrender.com/api/auth/auth",{
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
          password: result.user.uid,
        }).then((res) => {
          dispatch(loginSuccess(res.data));
          console.log(res.data);
        })     
    }).catch((error)=>{
      console.log(error)
      dispatch(loginFailure());
    })
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to OpenTube</SubTitle>
        <Input placeholder='email/username' onChange={e=>setName(e.target.value)}/>
        <Input type='password' placeholder='password' onChange={e=>setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Sign In</Button>
        <LinkDiv>Forgot password?</LinkDiv>
        <Title>or</Title>
        <Button onClick={ signInWithGoogle} >Signin with Google</Button>
        <Link to="/signup" style={{textDecoration:"none", color:"inherit"}}>
        <LinkDiv>Create account</LinkDiv>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Signin