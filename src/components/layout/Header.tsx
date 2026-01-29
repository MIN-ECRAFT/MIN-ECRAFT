import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Pickaxe } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/guides', label: 'Guides' },
  { to: '/news', label: 'News' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-minecraft-bedrock bg-card/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 grass-block rounded flex items-center justify-center pixel-shadow group-hover:animate-float">
              <Pickaxe className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-pixel text-xs sm:text-sm text-primary">
              MINECRAFT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 font-minecraft text-lg transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden minecraft-btn !px-3 !py-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-minecraft text-lg transition-colors hover:bg-secondary ${
                  location.pathname === link.to
                    ? 'text-primary bg-secondary/50'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
