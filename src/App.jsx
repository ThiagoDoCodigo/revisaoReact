import React from "react";
import "./App.css";
import SiderBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Componentes from "./components/Componentes";
import Comentarios from "./components/Comentarios";
import Render from "./components/Render";
import Styledd from "./components/Styledd";

const Sections = () => {
  return (
    <Routes>
      <Route path="/" element={<Componentes />} />
      <Route path="/mensagens" element={<Comentarios />} />
      <Route path="/styled" element={<Styledd />} />
      <Route path="/render" element={<Render />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <Router>
        <SiderBar />
        <main className="w-[calc(100vw-250px)] h-[100vh] ml-[250px] p-4">
          <Sections />
        </main>
      </Router>
    </>
  );
}

export default App;
