import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Shatcnb } from "./pages/shatcn";
import { FaceChanger } from "./pages/logging";
import { LoginScreen } from "./pages/login";
import { ChooseImageScreen } from "./pages/chooseImageScreen";
import { HomeScreen } from "./pages/homeScreen";
import { Loading } from "./pages/loading";
import { Accsept } from "./pages/acceptImage";
import HairStyleSelection from "./pages/hairStyleSelection";

function App() {

  return (
    //fragment
    <Router>
      <Routes>
        <Route path="/" element={<FaceChanger />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/choose-image" element={<ChooseImageScreen />} />
        <Route path="/home-screen" element={<HomeScreen />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/accsept" element={<Accsept />} />
        <Route path="/shat" element={<Shatcnb />} />
        <Route path="/hair-style" element={<HairStyleSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
