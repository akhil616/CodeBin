import Navbar from "./components/Navbar";
import { usePasteContext } from "./hooks/usePasteContext";
import Home from "./page/Home";
import Paste from "./page/Paste";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./page/Signup";
import Login from "./page/Login";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { pastes } = usePasteContext();
  const { user } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Paste />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
