import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always on top */}
      <Navbar />

      {/* Main layout below navbar: sidebar + content */}
      <div className="flex flex-1">
        {/* Sidebar only on desktop */}
        <Sidebar />

        {/* Page content */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;