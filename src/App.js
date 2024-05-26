import React from "react";
import Medicine from "./components/Main/Medicine/Medicine.jsx"
import Food from "./components/Main/Food/Food.jsx"
import Medi from "./components/Main/Medicine/Medi.jsx"
import MedicineItem from "./components/Main/Medicine/MedicineItem.jsx"
import FoodItem from "./components/Main/Food/FoodItem.jsx"
import Book from "./components/Main/Book/Book.jsx"
import BookItem from "./components/Main/Book/BookItem.jsx"
import Book_button from "./components/Main/Book/Book_button.jsx"




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


        </Routes>
      </Router>      
    </div>
  );
}

export default App;
