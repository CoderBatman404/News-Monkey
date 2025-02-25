import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress,setprogress] = useState(0)
  const Apikey=process.env.REACT_APP_NEWS_API
  const pagesize = 9
 
    return (
      <BrowserRouter>
          <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
        <Navbar />
        <Routes>
          <Route path='/' element={<News apikey={Apikey} setProgress = {setprogress} key='technology' pageSize={pagesize} country='us' category='technology' />} />
          <Route path='/business' element={<News apikey={Apikey} setProgress = {setprogress} key='business' pageSize={pagesize} country='us' category='business' />} />
          <Route path='/health' element={<News apikey={Apikey} setProgress = {setprogress} key='health' pageSize={pagesize} country='us' category='health' />} />
          <Route path='/entertainment' element={<News apikey={Apikey} setProgress = {setprogress} key='entertainment' pageSize={pagesize} country='us' category='entertainment' />} />
          <Route path='/general' element={<News apikey={Apikey} setProgress = {setprogress} key='general' pageSize={pagesize} country='us' category='general' />} />
          <Route path='/science' element={<News apikey={Apikey} setProgress = {setprogress} key='science' pageSize={pagesize} country='us' category='science' />} />
          <Route path='/sports' element={<News apikey={Apikey} setProgress = {setprogress} key='sports' pageSize={pagesize} country='us' category='sports' />} />
          <Route path='/technology' element={<News apikey={Apikey} setProgress = {setprogress} key='technology' pageSize={pagesize} country='us' category='technology' />} />
        </Routes>
      </BrowserRouter>
    );
  
}

export default App