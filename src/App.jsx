import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import OneCrmAllIndex from "./pages/OneCrmAllIndex";
import Dashboard from "./pages/Dashboard";
import OneCrmProduct from "./pages/OneCrmProduct";
import OneCrmInvalidI from "./pages/OneCrmInvalidI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="onecrmproduct" element={<OneCrmProduct />} />
          <Route path="onecrminvalidi" element={<OneCrmInvalidI />} />
          <Route path="onecrmallindex" element={<OneCrmAllIndex />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
