'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Journey from '@/components/Journey';
import Contact from "@/components/Contact";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <Hero />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <Projects />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <Skills />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <Journey />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <Contact />
      </motion.div>
      {/* Divider and copyright */}
      <hr className="border-t border-white/20 mt-16 mb-0 w-full" />
      <div className="w-full flex items-end justify-end px-10 pb-4 pt-2">
        <span className="text-base text-white/70 font-mono select-none">© 2025 Aagnya Mistry</span>
      </div>
      {/* Add Contact section if needed */}
    </>
  );
}