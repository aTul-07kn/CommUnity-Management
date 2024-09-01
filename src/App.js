import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import JoinHere from "./components/JoinHere";
import AdminRegisterPage from "./components/AdminRegisterPage";
import UserSignUpPage from "./components/UserSignUpPage";
import LoginPage from "./components/LoginPage";
import Apartment from "./components/Apartment";
import RequestsPage from "./components/RequestsPage";
import Complaints from "./components/Complaints";
import SecurityGPage from "./components/SecurityGPage";
import Parking from "./components/Parking";
import NoticePage from "./components/NoticePage";
import PostsMainPage from "./components/PostsRecPage";
import EmergencyContacts from "./components/EmergencyConPage";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join-here" element={<JoinHere />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-register" element={<AdminRegisterPage />} />
        <Route path="/user-signup" element={<UserSignUpPage />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/request" element={<RequestsPage />} />
        <Route path="/complaint" element={<Complaints />} />
        <Route path="/notice-board" element={<NoticePage />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/posts" element={<PostsMainPage />} />
        <Route path="/security-guards" element={<SecurityGPage />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
