import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import Onboard from './pages/Onboard.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route
            path="/home"
            element={<Home/>}
          />
          <Route
            path="/post"
            element={<Post/>}
          />
          <Route
            path="/"
            element={<Onboard/>}
          />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App
