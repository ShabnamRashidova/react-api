import React from "react";
import YaziListesi from "./components/YaziListesi";
import YaziDetayi from "./components/YaziDetayi";
import YaziEkle from "./components/YaziEkle";
import YaziDuzenle from "./components/YaziDuzenle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route exact path="/" element={<YaziListesi />} />
            <Route path="/posts/:id" element={<YaziDetayi />} />
            <Route path="/yaziekle" element={<YaziEkle />} />
            <Route path="/posts/:id/edit" element={<YaziDuzenle />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
