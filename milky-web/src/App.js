import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Banner from "./components/HomePage/Banner";
import CollectionsPage from "./pages/CollectionsPage";
import OurStory from "./pages/OurStory";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div style={{ height: "70vh" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
