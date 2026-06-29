import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import Onboard from './pages/Onboard.jsx'
import Item from './pages/Item.jsx'
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import './App.css'

function App() {
  

  return (
    <>
      <ScrollToTop />
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/home"
          element={<ProtectedRoute><Home/></ProtectedRoute>}
        />
        <Route
          path="/post"
          element={<ProtectedRoute><Post/></ProtectedRoute>}
        />
        <Route
          path="/"
          element={<Onboard/>}
        />
        <Route
          path="/item/:id"
          element={<ProtectedRoute><Item/></ProtectedRoute>}
        />
        <Route
          path="/signup"
          element={<SignUp/>}
        />
        <Route
          path="/profile/:username"
          element={<ProtectedRoute><Profile/></ProtectedRoute>}
        />
      </Routes>
    </>
  );
}

export default App
