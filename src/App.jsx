import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
      <Router>
            <div className="flex flex-col min-h-screen">
                    <Navbar />
                            <main className="flex-grow p-4">
                                      <Routes>
                                                  <Route path="/" element={<Home />} />
                                                              <Route path="/dashboard" element={<Dashboard />} />
                                                                          <Route path="/marketplace" element={<Marketplace />} />
                                                                                      <Route path="/profile" element={<Profile />} />
                                                                                                  <Route path="/login" element={<Login />} />
                                                                                                              <Route path="/signup" element={<Signup />} />
                                                                                                                        </Routes>
                                                                                                                                </main>
                                                                                                                                        <Footer />
                                                                                                                                              </div>
                                                                                                                                                  </Router>
                                                                                                                                                    );
                                                                                                                                                    }

                                                                                                                                                    export default App;