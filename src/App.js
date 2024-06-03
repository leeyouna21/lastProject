<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPG from "./components/MainPG/MainPg";
import Weather from "./components/MainPG/Weather";
import Login from "./components/Login/Login";
import { UserProvider } from "./UserContext";
import Travel from "./components/Travel/Travel";
import Domestic from "./components/Travel/Domestic";
import TravelItem from "./components/Travel/TravelItem";
import International from "./components/Travel/International";
import Banner from "./components/Banner/Banner";
import With from "./components/With/With";
import Board from "./components/Board/Board";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <UserProvider>
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
            <Route path="/News" element={<News />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
=======
import React from "react";
import Medicine from "./components/Main/Medicine/Medicine.jsx";
import Food from "./components/Main/Food/Food.jsx";
import Medi from "./components/Main/Medicine/Medi.jsx";
import MedicineItem from "./components/Main/Medicine/MedicineItem.jsx";
import FoodItem from "./components/Main/Food/FoodItem.jsx";
import Book from "./components/Main/Book/Book.jsx";
import BookItem from "./components/Main/Book/BookItem.jsx";
import Book_button from "./components/Main/Book/Book_button.jsx";
import Edu from "./components/Main/Edu/Edu.jsx";
import Edu_btn from "./components/Main/Edu/Edu_btn.jsx";
import EduItem from "./components/Main/Edu/EduItem.jsx";
import Hobby from "./components/Main/Hobby/Hobby.jsx";
import Hobby_Item from "./components/Main/Hobby/HobbyItem.jsx";
import Hobby_btn from "./components/Main/Hobby/Hobby_btn.jsx";




import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Navigate to = "/Medicine" />} />
          <Route path="/Medicine" element={<Medicine />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Medi" element={<Medi />} />
          <Route path="/MedicineItem" element={<MedicineItem />} />
          <Route path="/FoodItem" element={<FoodItem />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/BookItem" element={<BookItem />} />
          <Route path="/Book_button" element={<Book_button />} />
          <Route path="/Edu" element={<Edu />} />
          <Route path="/EduItem" element={<EduItem />} />
          <Route path="/Edu_btn" element={<Edu_btn />} />
          <Route path="/Hobby" element={<Hobby />} />
          <Route path="/Hobby_Item" element={<Hobby_Item />} />
          <Route path="/Hobby_btn" element={<Hobby_btn />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
>>>>>>> moowon
