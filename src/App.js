import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Components/Index/Index';
import Navbar from './Components/Navbar/Navbar';
import Video from './Components/Video/Video';
import Info from './Components/Information/Info';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (data) => {
    setSearchValue(data);
  };
  console.log(searchValue)

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Index searchValue={searchValue} />} />
        <Route path='/stream/:id' element={<Video />} />
        <Route path='/video/:id' element={<Info />} />
      </Routes>
    </>
  );
}

export default App;