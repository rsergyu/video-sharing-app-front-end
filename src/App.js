import './App.css';
import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';

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
                <Route index element={<Home  />} />
                <Route path='video/:id' element={<Video />} />
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
