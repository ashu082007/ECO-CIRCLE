import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Navbar - Main navigation bar for EcoCircle
 * Shows different links based on whether user is on admin or user side
 */
const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdmin = location.pathname.startsWith("/admin");

  const userLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/activities", label: "Activities" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/leaderboard", label: "Leaderboard" },
    { to: "/profile", label: "Profile" },
  ];

  const adminLinks = [
    { to: "/admin", label: "Overview" },
    { to: "/admin/review", label: "Review Activities" },
    { to: "/admin/rewards", label: "Manage Rewards" },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Leaf className="w-5 h-5" />
          EcoCircle
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Toggle between admin/user */}
          <Link to={isAdmin ? "/dashboard" : "/admin"}>
            <Button variant="outline" size="sm" className="ml-2">
              {isAdmin ? "User View" : "Admin"}
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link to={isAdmin ? "/dashboard" : "/admin"} onClick={() => setMobileOpen(false)}>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              {isAdmin ? "User View" : "Admin"}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
