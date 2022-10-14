import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  const [onHome, setonHome] = useState(true);
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar onHome={onHome} setonHome={setonHome} />
      <Routes>
        <Route path="/" element={<Home setonHome={setonHome} />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
