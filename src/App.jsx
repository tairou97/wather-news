import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route />
            <Route />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
