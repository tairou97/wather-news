import { Link, Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Wather from "./pages/Wather";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route to="/" element={<Wather />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
