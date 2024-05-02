import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar_module/Navbar";
import "./styles/App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AuthProvider, { useAuth } from "./context/AuthProvider";
import UserLogin from "./components/popup_module/UserLogin";
import Channel_Page from "./pages/Channel_Page";
import Create_Post_Page from "./pages/Create_Post_Page";
import Create_Community_Page from "./pages/Create_Coummunity_Page";


function App() {
  if(!sessionStorage.getItem("joinedChannels")){
    sessionStorage.setItem("joinedChannels",JSON.stringify([]));
  }
  const { isLoginContainerOpen } = useAuth();
  return (
    <div className="app-main-container">
      <section className="navbar-section">
        {" "}
        <Navbar />
      </section>
      {isLoginContainerOpen && (
        <div className="user-login-container">
          <div className="dark-background-container"></div>
          <UserLogin />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:channelId" element={<Channel_Page />} />
        <Route path="/create/post" element={<Create_Post_Page />} />
        <Route path="/create/channel" element={<Create_Community_Page />} />
        <Route  element={<div>Page not found</div>} />

      </Routes>
    </div>
  );
}

export default App;
