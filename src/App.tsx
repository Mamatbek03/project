import React from "react";
import { useNavigate } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Navbar /> */}
      <MainRoutes />
      {/* <Footer /> */}
    </>
  );
};

export default App;
