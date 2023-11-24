import Navbar from "./components/Navbar";
import { usePasteContext } from "./hooks/usePasteContext";
import Home from "./page/Home";
import Paste from "./page/Paste";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./page/Signup";
import Login from "./page/Login";

function App() {
  const { pastes } = usePasteContext();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Paste />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
