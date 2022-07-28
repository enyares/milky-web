import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import OurStory from "./pages/OurStory";
import DetailPage from "./pages/DetailPage";
import ContactPage from "./pages/ContactPage";
import FAQ from "./pages/FAQ";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collections' element={<CollectionsPage />} />
        <Route path='/aboutus' element={<OurStory />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blogdetail' element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
