import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FaceChanger } from "./pages/logging";
import { LoginScreen } from "./pages/login";

function App() {

  return (
    //fragment
    <Router>
      <Routes>
        <Route path="/" element={<FaceChanger />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
