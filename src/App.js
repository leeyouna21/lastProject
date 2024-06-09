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
import Medicine from "./components/Medicine/Medicine.jsx";
import Food from "./components/Food/Food.jsx";
import Medi from "./components/Medicine/Medi.jsx";
import MedicineItem from "./components/Medicine/MedicineItem.jsx";
import FoodItem from "./components/Food/FoodItem.jsx";
import Book from "./components/Book/Book.jsx";
import BookItem from "./components/Book/BookItem.jsx";
import Bookbutton from "./components/Book/Bookbutton.jsx";
import Edu from "./components/Edu/Edu.jsx";
import Edubtn from "./components/Edu/Edubtn.jsx";
import EduItem from "./components/Edu/EduItem.jsx";
import Hobby from "./components/Hobby/Hobby.jsx";
import HobbyItem from "./components/Hobby/HobbyItem.jsx";
import Hobbybtn from "./components/Hobby/Hobbybtn.jsx";
import Exercise from "./components/Exercise/Exercise.jsx";
import Exercisebtn from "./components/Exercise/Exercisebtn.jsx";
import ExerciseItem from "./components/Exercise/ExerciseItem.jsx";

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
            {/* <Route path = "/" element = {<Navigate to = "/Medicine" />} /> */}
            <Route path="/Medicine" element={<Medicine />} />
            <Route path="/Food" element={<Food />} />
            <Route path="/Medi" element={<Medi />} />
            <Route path="/MedicineItem" element={<MedicineItem />} />
            <Route path="/FoodItem" element={<FoodItem />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/BookItem" element={<BookItem />} />
            <Route path="/Bookbutton" element={<Bookbutton />} />
            <Route path="/Edu" element={<Edu />} />
            <Route path="/EduItem" element={<EduItem />} />
            <Route path="/Edubtn" element={<Edubtn />} />
            <Route path="/Hobby" element={<Hobby />} />
            <Route path="/HobbyItem" element={<HobbyItem />} />
            <Route path="/Hobbybtn" element={<Hobbybtn />} />
            <Route path="/Exercise" element={<Exercise />} />
            <Route path="/Exercisebtn" element={<Exercisebtn />} />
            <Route path="/ExerciseItem" element={<ExerciseItem />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;   