import React from "react";
import './App.scss';
import Container from "@mui/material/Container";
import Customize from './components/Customize';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import { Login } from './page/Login';
import { Registration } from './page/Registration';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slice/auth';
import { AddPost } from "./page/AddPost";
import { FullPost } from "./page/FullPost";
import MyPage from "./page/MyPege";



function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  },[])
  return (
    <div className="App">
     {/*  <Header /> */}
     <Header />
     <Container maxWidth="lx">
      <Routes>
            <Route path='/'element={<Main />}  />
            <Route path='/customize' element={<Customize />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/new' element={<AddPost />} />
            <Route path='posts/:id' element={<FullPost />}x />
            <Route path='/posts/:id/edit' element={<AddPost />}x />
            <Route path='user' element={<MyPage />} />
      </Routes>
     </Container>
     
     
    </div>
  );
}

export default App;
