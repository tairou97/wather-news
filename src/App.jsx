import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoreWather from "./pages/MoreWather";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="container-app">
      {" "}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more-wather" element={<MoreWather />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
