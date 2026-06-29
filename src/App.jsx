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
import MyPosts from "./pages/myposts.jsx";
import Favourites from "./pages/favourites.jsx";
import './App.css'


function App() {
  

  return (
    <>
      <ScrollToTop />
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/"
          element={<Onboard/>}
        />
        <Route
          path="/signup"
          element={<SignUp/>}
        />
        <Route
          path="/home"
          element={<ProtectedRoute><Home/></ProtectedRoute>}
        />
        <Route
          path="/post"
          element={<ProtectedRoute><Post/></ProtectedRoute>}
        />
        <Route
          path="/item/:id"
          element={<ProtectedRoute><Item/></ProtectedRoute>}
        />
        <Route
          path="/profile/:username"
          element={<ProtectedRoute><Profile/></ProtectedRoute>}
        />
        <Route
          path="/myposts/:id"
          element={<ProtectedRoute><MyPosts/></ProtectedRoute>}
        />
        <Route
          path="/favourites/:id"
          element={<ProtectedRoute><Favourites/></ProtectedRoute>}
        />
      </Routes>
    </>
  );
}

export default App
