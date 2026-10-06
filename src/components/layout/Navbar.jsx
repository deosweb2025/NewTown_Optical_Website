import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteData } from "../../data/siteData";
import Logo from "../common/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteData.navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-muted"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href={`tel:${siteData.contact.phone}`}
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Call Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-border md:hidden"
          >
            <div className="flex flex-col py-4">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-8 py-3 font-medium ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/5"
                      : "text-text"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
