import { Link } from 'react-router-dom';
import { Page } from '../App';
import { routeMeta } from '../routes';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  }; 

  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Copyright & Contact */}
            <div className="flex flex-col gap-1 text-gray-600 text-sm">
              <p>© {new Date().getFullYear()} Postaroo</p>
              <a
                href="mailto:info@postaroo.io"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                info@postaroo.io
              </a>
            </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {routeMeta.map((meta) => (
              <Link
                key={meta.page}
                to={meta.path}
                onClick={() => handleNavigate(meta.page)}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                {meta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
