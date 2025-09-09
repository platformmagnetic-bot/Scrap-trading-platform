import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold">Magnetic</Link>
      <div className="space-x-6">
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/onboarding">Onboarding</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Nav;
