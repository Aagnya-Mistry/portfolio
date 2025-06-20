'use client';
import { FaHome, FaUser, FaCode, FaBriefcase, FaBrain, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
  { icon: <FaHome />, href: '#home', label: 'Home' },
  { icon: <FaUser />, href: '#about', label: 'About' },
  { icon: <FaCode />, href: '#skills', label: 'Skills' },
  { icon: <FaBriefcase />, href: '#projects', label: 'Projects' },
  { icon: <FaBrain />, href: '#journey', label: 'Journey' },
  { icon: <FaEnvelope />, href: '#contact', label: 'Contact' },
  { icon: <FaGithub />, href: 'https://github.com/Aagnya-Mistry', label: 'GitHub', external: true },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/aagnya-mistry-37b464290/', label: 'LinkedIn', external: true },
];

export default function Navbar() {
  return (
    <>
      <div className="fixed top-6 right-10 z-50 text-white text-3xl font-bold font-code">aAM_</div>
      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 bg-black/80 backdrop-blur rounded-3xl shadow-lg px-6 py-3 flex justify-center items-center w-fit mx-auto border border-white/10">
        <ul className="flex gap-6 group">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="peer flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white text-2xl transition-all duration-200 hover:bg-white/30 hover:text-white focus:bg-white/30 focus:text-white"
                title={item.label}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <style jsx>{`
          ul.group:hover li:not(:hover) a {
            transform: scale(0.85);
            opacity: 0.7;
          }
          ul.group li a:hover, ul.group li a:focus {
            z-index: 10;
            transform: scale(1.5);
            box-shadow: 0 0 0 0.5rem rgba(255,255,255,0.04);
          }
        `}</style>
      </nav>
    </>
  );
}