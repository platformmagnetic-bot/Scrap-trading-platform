import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
