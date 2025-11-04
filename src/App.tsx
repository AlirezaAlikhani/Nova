import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FaceChanger } from "./pages/logging";
import { LoginScreen } from "./pages/login";
import { ChooseImageScreen } from "./pages/chooseImageScreen";

function App() {

  return (
    //fragment
    <Router>
      <Routes>
        <Route path="/" element={<FaceChanger />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/choose-image" element={<ChooseImageScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
