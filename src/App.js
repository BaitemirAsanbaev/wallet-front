import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Balances from "./pages/Balances";
import Layout from "./components/Layout/Layout";
import Statistics from "./pages/Statistics";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/balances" element={<Balances />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
