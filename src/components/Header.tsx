import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { RouteId, routeMeta } from '../routes';
import logo from 'figma:asset/a10936deabada1af6a86f7d2a82f4cdf4fc46f09.png';

interface HeaderProps {
  currentPage: RouteId;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = routeMeta.slice(0, 4).map((meta) => ({
    label: meta.label,
    page: meta.page,
    href: meta.path,
  }));

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Postaroo" className="w-[200px]" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={link.href}
                onClick={() => handleNavigate(link.page)}
                className={`text-sm transition-colors ${
                  currentPage === link.page
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-current={currentPage === link.page ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavigate('signin')}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign in
            </button>
            <button
              onClick={() => handleNavigate('signin')}
              className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md"
            >
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={link.href}
                onClick={() => handleNavigate(link.page)}
                className={`text-left py-2 text-sm transition-colors ${
                  currentPage === link.page ? 'text-gray-900' : 'text-gray-600'
                }`}
                aria-current={currentPage === link.page ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
              <button
                onClick={() => handleNavigate('signin')}
                className="py-2 text-sm text-gray-600"
              >
                Sign in
              </button>
              <button
                onClick={() => handleNavigate('signin')}
                className="py-2 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-sm"
              >
                Get started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
