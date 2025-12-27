import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moin_blog_page from "./components/Moin_blog_page";
import TheFutureTechnology from "./components/TheFutureTechnology";
import HowWeHire from "./components/HowWeHire";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Moin_blog_page />} />
        <Route
          path="/TheFutureTechnology"
          element={<TheFutureTechnology />}
        />
        <Route
          path="/HowWeHire"
          element={<HowWeHire />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
