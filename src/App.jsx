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
import MyPosts from "./pages/MyPosts.jsx";
import Favourites from "./pages/Favourites.jsx";
import Chat from "./pages/Chat.jsx";
import MyChats from "./pages/MyChats.jsx";
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
          path="/profile"
          element={<ProtectedRoute><Profile/></ProtectedRoute>}
        />
        <Route
          path="/myposts"
          element={<ProtectedRoute><MyPosts/></ProtectedRoute>}
        />
        <Route
          path="/favourites"
          element={<ProtectedRoute><Favourites/></ProtectedRoute>}
        />
        <Route
          path="/chat/:itemId/:buyerId"
          element={<ProtectedRoute><Chat/></ProtectedRoute>}
        />
        <Route
          path="/mychats/:itemId"
          element={<ProtectedRoute><MyChats/></ProtectedRoute>}
        />
      </Routes>
    </>
  );
}

export default App
