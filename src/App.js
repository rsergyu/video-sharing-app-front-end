import './App.css';
import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Signin from './pages/SignIn';
import Signup from './pages/SignUp';

const Container = styled.div`
display: flex;
`;

const Wrapper = styled.div`
padding:22px 46px;
`;

const Main = styled.div`
flex:7;
`;


function App() {
  return (
    <Container>
      <BrowserRouter>  
        <Menu/>
        <Main>
          <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/' >
                <Route index element={<Home type="random" />} />
                <Route path='trends' element={<Home type="trend" />} />
                <Route path='subscriptions' element={<Home type="sub" />} />
                <Route path='signin' element={<Signin/>} />
                <Route path='signup' element={<Signup/>} />
                <Route path='video/:id' element={<Video type="random" />} />
                  {/* <Route path=':id' element={<Video  />} /> */}
                </Route>
              </Routes>
            </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
