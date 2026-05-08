import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Campus Life', href: '/campus-life' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

const resources = [
  { name: 'Student Portal', href: '#' },
  { name: 'Staff Portal', href: '#' },
  { name: 'Library', href: '/library' },
  { name: 'Research', href: '#' },
  { name: 'Alumni', href: '#' },
  { name: 'Careers', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#1a365d] text-white">
      {/* Clean top edge */}
      
      {/* Decorative Gold Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="h-16 py-1">
                <img 
                  src="/images/White-logo-1.png" 
                  alt="Redeemer's University" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              A Christian mission university dedicated to academic excellence and character development, 
              preparing leaders for a changing world.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a227] hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-[#c9a227] hover:pl-1 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-[#c9a227] hover:pl-1 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#c9a227] hover:pl-1 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-white/70 text-sm">
                  Redeemer's University, Ede, Osun State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#c9a227] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/70 text-sm">+234 704 448 2305</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#c9a227] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/70 text-sm">info@run.edu.ng</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Redeemer's University. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-[#c9a227] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#c9a227] text-sm transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-white/60 hover:text-[#c9a227] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
