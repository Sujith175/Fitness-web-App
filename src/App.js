import React from "react";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
