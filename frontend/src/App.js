import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Sidebar,
  HeroSection,
  FeatureCards,
  NewsSection,
  UpcomingCompetitions,
  Top3Ranking,
  Statistics,
  Footer
} from "./components";

const Home = () => {
  const [activeItem, setActiveItem] = useState('users');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <main className="flex-1">
          <div className="container mx-auto px-6 py-6">
            <HeroSection />
            <FeatureCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <NewsSection />
                <UpcomingCompetitions />
              </div>
              
              <div className="lg:col-span-1">
                <Top3Ranking />
                <Statistics />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;