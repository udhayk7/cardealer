import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Car className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              AutoElite India
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === '/'} isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink to="/cars" active={location.pathname === '/cars'} isScrolled={isScrolled}>
              Cars
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'} isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'} isScrolled={isScrolled}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" active={location.pathname === '/'}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/cars" active={location.pathname === '/cars'}>
                Cars
              </MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === '/about'}>
                About
              </MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === '/contact'}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children, active, isScrolled }: { to: string; children: React.ReactNode; active: boolean; isScrolled: boolean }) {
  return (
    <Link
      to={to}
      className={`
        ${active ? 'font-bold' : 'font-medium'}
        ${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-400'}
        transition-colors duration-300
      `}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`
        block px-3 py-2 rounded-md text-base font-medium
        ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}
      `}
    >
      {children}
    </Link>
  );
}