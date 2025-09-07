import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  FirstLetter,
  TestPage,
  SecondLetter,
  ThirdLetter,
  FourthLetter,
  FifthLetter,
  SixthLetter,
  MainPage,
} from './Pages';
import ScrollTop from './Components/ScrollTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/test" element={<TestPage />}></Route> */}
          <Route path="/first" element={<FirstLetter />}></Route>
          <Route path="/second" element={<SecondLetter />}></Route>
          <Route path="/third" element={<ThirdLetter />}></Route>
          <Route path="/fourth" element={<FourthLetter />}></Route>
          <Route path="/fifth" element={<FifthLetter />}></Route>
          <Route path="/sixth" element={<SixthLetter />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
