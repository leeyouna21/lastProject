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
import Exercise from "./components/Main/Exercise/Exercise.jsx";
import ExerciseItem from "./components/Main/Exercise/ExerciseItem.jsx";
import Exercise_btn from "./components/Main/Exercise/Exercise_btn.jsx";




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
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/ExerciseItem" element={<ExerciseItem />} />
          <Route path="/Exercise_btn" element={<Exercise_btn />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
