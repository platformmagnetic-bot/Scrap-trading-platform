import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        Magnetic Platform
      </Link>
      <div className="space-x-4">
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="bg-green-500 px-3 py-1 rounded">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
