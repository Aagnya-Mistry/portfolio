'use client';

import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    console.log('Sending form data:', form);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, form);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Failed to send message.");
      } else {
        setError("Failed to send message.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 bg-black min-h-[80vh] flex items-center overflow-hidden">
      {/* Fireflies Mesh Gradient Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-firefly-1"></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-40 animate-firefly-2"></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-35 animate-firefly-3"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-25 animate-firefly-4"></div>
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-firefly-5"></div>
        <div className="absolute top-2/3 left-1/6 w-22 h-22 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-xl opacity-35 animate-firefly-6"></div>
        <div className="absolute top-1/6 right-1/6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-20 animate-firefly-7"></div>
        <div className="absolute bottom-1/3 right-1/6 w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-25 animate-firefly-8"></div>
        <div className="absolute top-4/5 left-1/3 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-20 animate-firefly-9"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-10 px-4">
        {/* Left: Profile & Info */}
        <div className="flex-1 flex flex-col items-center md:items-start md:ml-16">
          <div className="mb-6">
            <div className="rounded-full p-2 bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 w-fit" style={{width: 260, height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image
                src="/contact-profile.jpg"
                alt="Contact Profile"
                width={240}
                height={240}
                className="rounded-full object-cover border-4 border-black"
                style={{width: 240, height: 240}}
              />
            </div>
          </div>
          <div className="text-white text-lg mb-4 font-body">Feel Free to contact me!</div>
          <ul className="space-y-5 text-white text-base font-body">
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-white text-2xl" />
              <a href="mailto:aagnya.mistry@gmail.com" className="underline hover:text-pink-400">aagnya.mistry@gmail.com</a>
            </li>
            <li className="flex items-center gap-4">
              <FaLinkedin className="text-white text-2xl" />
              <a href="https://www.linkedin.com/in/aagnya-mistry-37b464290/" className="hover:text-blue-400">LinkedIn</a>
            </li>
            <li className="flex items-center gap-4">
              <FaGithub className="text-white text-2xl" />
              <a href="https://github.com/Aagnya-Mistry" className="hover:text-purple-400">GitHub</a>
            </li>
            <li className="flex items-center gap-4">
              <FaPhone className="text-white text-2xl" />
              <span>+91 9769233957</span>
            </li>
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-white text-2xl" />
              <span>Mumbai, India</span>
            </li>
          </ul>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex justify-center">
          <div className="p-1 rounded-3xl bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 w-full max-w-md">
            <form
              className="rounded-3xl bg-white p-8 flex flex-col gap-5 border-0"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-center text-black mb-2 font-heading">SEND A MESSAGE</h2>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 border-2 border-gray-300 bg-white text-black font-medium focus:outline-none focus:border-gray-600 text-base font-body"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 border-2 border-gray-300 bg-white text-black font-medium focus:outline-none focus:border-gray-600 text-base font-body"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone No."
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 border-2 border-gray-300 bg-white text-black font-medium focus:outline-none focus:border-gray-600 text-base font-body"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="rounded-xl px-4 py-2 border-2 border-gray-300 bg-white text-black font-medium focus:outline-none focus:border-gray-600 text-base font-body"
                required
              />
              {success && <div className="text-green-600 text-center font-semibold font-body">{success}</div>}
              {error && <div className="text-red-600 text-center font-semibold font-body">{error}</div>}
              <button
                type="submit"
                className="bg-black text-white rounded-xl py-3 font-semibold text-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-black transition disabled:opacity-60 font-body"
                disabled={loading}
              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes firefly-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(50px, -30px) scale(1.2); opacity: 0.5; }
          50% { transform: translate(100px, 20px) scale(0.8); opacity: 0.3; }
          75% { transform: translate(30px, 50px) scale(1.1); opacity: 0.4; }
        }
        @keyframes firefly-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          33% { transform: translate(-40px, -60px) scale(1.3); opacity: 0.6; }
          66% { transform: translate(-80px, 30px) scale(0.9); opacity: 0.3; }
        }
        @keyframes firefly-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
          20% { transform: translate(-30px, -40px) scale(1.1); opacity: 0.5; }
          40% { transform: translate(-60px, 20px) scale(0.8); opacity: 0.25; }
          60% { transform: translate(-20px, 60px) scale(1.2); opacity: 0.45; }
          80% { transform: translate(40px, -20px) scale(0.9); opacity: 0.3; }
        }
        @keyframes firefly-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          25% { transform: translate(60px, -50px) scale(1.4); opacity: 0.4; }
          50% { transform: translate(120px, 10px) scale(0.7); opacity: 0.2; }
          75% { transform: translate(40px, 70px) scale(1.1); opacity: 0.35; }
        }
        @keyframes firefly-5 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          30% { transform: translate(-50px, -30px) scale(1.2); opacity: 0.5; }
          60% { transform: translate(-100px, 40px) scale(0.8); opacity: 0.2; }
          90% { transform: translate(-20px, -60px) scale(1.1); opacity: 0.4; }
        }
        @keyframes firefly-6 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
          20% { transform: translate(40px, -50px) scale(1.3); opacity: 0.55; }
          40% { transform: translate(80px, 30px) scale(0.9); opacity: 0.25; }
          60% { transform: translate(20px, 70px) scale(1.1); opacity: 0.4; }
          80% { transform: translate(-30px, -20px) scale(0.8); opacity: 0.3; }
        }
        @keyframes firefly-7 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(30px, -40px) scale(1.1); opacity: 0.35; }
        }
        @keyframes firefly-8 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(-25px, 35px) scale(1.2); opacity: 0.4; }
        }
        @keyframes firefly-9 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(20px, -30px) scale(1.1); opacity: 0.3; }
        }
        .animate-firefly-1 {
          animation: firefly-1 8s ease-in-out infinite;
        }
        .animate-firefly-2 {
          animation: firefly-2 12s ease-in-out infinite;
        }
        .animate-firefly-3 {
          animation: firefly-3 10s ease-in-out infinite;
        }
        .animate-firefly-4 {
          animation: firefly-4 15s ease-in-out infinite;
        }
        .animate-firefly-5 {
          animation: firefly-5 9s ease-in-out infinite;
        }
        .animate-firefly-6 {
          animation: firefly-6 11s ease-in-out infinite;
        }
        .animate-firefly-7 {
          animation: firefly-7 6s ease-in-out infinite;
        }
        .animate-firefly-8 {
          animation: firefly-8 7s ease-in-out infinite;
        }
        .animate-firefly-9 {
          animation: firefly-9 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}