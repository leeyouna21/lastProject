import React, { useEffect } from "react";
import MainPG from "./components/MainPG/MainPg";
import Weather from "./components/MainPG/Weather";
import Login from "./components/Login/Login";
import Travel from "./components/Travel/Travel";
import Domestic from "./components/Travel/Domestic";
import TravelItem from "./components/Travel/TravelItem";
import International from "./components/Travel/International";
import Banner from "./components/Banner/Banner";
import With from "./components/With/With";
import Board from "./components/Board/Board";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  


function App() {

  return (
    
      
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/MainPG" />} />
          <Route path="/MainPG" element={<MainPG />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Travel" element={<Travel />} />
          <Route path="/TravelItem" element={<TravelItem />} />
          <Route path="/Domestic" element={<Domestic />} />
          <Route path="/International" element={<International />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/With" element={<With />} />
          <Route path="/Board" element={<Board />} />
        </Routes>
      </Router>
    </div>

    
  );
}

export default App;



