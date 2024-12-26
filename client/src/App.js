import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Petcare from "./components/navigation/Petcare";
import Register from "./components/navigation/Register";
import About from "./components/navigation/About";
import Help from "./components/navigation/Help";
import ProductList from "./components/Main/explore/srce/App";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/petcare" element={<Petcare />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/explore" element={<ProductList />} />
    </Routes>
  );
}

export default App;
