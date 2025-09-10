import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">
                    Magnetic Platform 
                          </h1>
                                <nav className="mt-4 space-x-4">
                                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                                                <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                                                      </nav>
                                                            <Routes>
                                                                    <Route path="/" element={<p>Welcome to the Magnetic B2B platform!</p>} />
                                                                            <Route path="/about" element={<p>This is the about page.</p>} />
                                                                                  </Routes>
                                                                                      </div>
                                                                                        );
                                                                                        }

                                                                                        export default App;
