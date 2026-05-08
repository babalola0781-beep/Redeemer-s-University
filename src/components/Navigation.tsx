import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About RUN', 
    href: '/about',
    dropdown: [
      { name: 'Vision & Mission', href: '/about#vision' },
      { name: 'Our History', href: '/history' },
      { name: 'Motto, Logo & Anthem', href: '/motto-logo-anthem' },
      { name: 'Governance', href: '/governance' },
      { name: 'Directorates & Centres', href: '/directorates-centres' },
    ]
  },
  { 
    name: 'Academics', 
    href: '/academics',
    dropdown: [
      { name: 'Undergraduate', href: '/academics#undergraduate' },
      { name: 'Postgraduate', href: '/academics#postgraduate' },
      { name: 'Part-Time', href: '/academics#parttime' },
    ]
  },
  { name: 'Admissions', href: '/admissions' },
  { 
    name: 'Campus Life', 
    href: '/campus-life',
    dropdown: [
      { name: 'Overview', href: '/campus-life' },
      { name: 'Student Leadership', href: '/student-leadership' },
      { name: 'Accommodation', href: '/accommodation' },
      { name: 'Library', href: '/library' },
      { name: 'Sports', href: '/sports' },
      { name: 'Dining', href: '/dining' },
    ]
  },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-12 md:h-14 py-1 transition-all duration-300">
                <img 
                  src={isScrolled ? "/images/cropped-colored-logo.png" : "/images/White-logo-1.png"} 
                  alt="Redeemer's University" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                      isScrolled
                        ? isActive(link.href)
                          ? 'text-[#c9a227]'
                          : 'text-gray-700 hover:text-[#1a365d]'
                        : isActive(link.href)
                        ? 'text-[#c9a227]'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Active page gold dot */}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden min-w-[220px] border border-gray-100">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#1a365d] hover:text-white transition-all duration-200 border-l-2 border-l-transparent hover:border-l-[#c9a227]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/admissions"
              className="hidden lg:inline-flex btn-secondary"
            >
              Apply Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-[#1a365d]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1a365d]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-4 text-lg font-medium border-b border-gray-100 ${
                        isActive(link.href)
                          ? 'text-[#1a365d] border-b-2 border-b-[#c9a227]'
                          : 'text-gray-800'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2 text-sm text-gray-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link to="/admissions" className="btn-secondary w-full justify-center">
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
