import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FaceChanger } from "./pages/logging";
import { LoginScreen } from "./pages/login";
import { ChooseImageScreen } from "./pages/chooseImageScreen";
import { HomeScreen } from "./pages/homeScreen";
import { Loading } from "./pages/loading";
import { LoadingResult } from "./pages/loadinResult";
import { Accsept } from "./pages/acceptImage";
import HairStyleSelection from "./pages/hairStyleSelection";
import HairStyleCategories from "./pages/hairCategories";
import HairStyleDetails from "./pages/hairStyleDetails";
import FinalizePage from "./pages/finalize";
import ResultPage from "./pages/result";
import Dashboard from "./pages/dashboard";

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
        <Route path="/loading-result" element={<LoadingResult />} />
        <Route path="/accsept" element={<Accsept />} />
        <Route path="/hair-style" element={<HairStyleSelection />} />
        <Route path="/categories" element={<HairStyleCategories />} />
        <Route path="/hair-style-details" element={<HairStyleDetails />} />
        <Route path="/finalize" element={<FinalizePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
