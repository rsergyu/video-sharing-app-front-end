import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'



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
const More = styled.div`
`;
const Links = styled.div`
`;
const LinkDiv = styled.span`
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to OpenTube</SubTitle>
        <Input placeholder='Email'/>
        <Input type='password' placeholder='Password'/>
        <Button>Sign In</Button>
        <LinkDiv>Forgot password?</LinkDiv>
        <Title>or</Title>
        <Button>Signin with Google</Button>
        <Link>
        <LinkDiv>Create account</LinkDiv>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Signin