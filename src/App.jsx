import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moin_blog_page from "./components/Moin_blog_page";
import TheFutureTechnology from "./components/TheFutureTechnology";
import HowWeHire from "./components/HowWeHire";
import HiringInsights from "./pages/HiringInsights";
import InsightDetail from "./pages/InsightDetail";
import InsightsDashboard from "./pages/InsightsDashboard";
import InsightApproval from "./pages/InsightApproval";

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
        <Route path="/hiring-insights" element={<HiringInsights />} />
        <Route path="/hiring-insights/:id" element={<InsightDetail />} />
        <Route path="/insights-dashboard" element={<InsightsDashboard />} />
        <Route path="/insights-approval" element={<InsightApproval />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
