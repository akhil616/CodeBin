import Navbar from "./components/Navbar";
import { usePasteContext } from "./hooks/usePasteContext";
import Home from "./page/Home";
import Paste from "./page/Paste";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
