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
      {/* Mesh Gradients Bottom Left: Pink, Blue, Purple */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-pink-400 rounded-full opacity-40 blur-3xl pointer-events-none" style={{zIndex: 0}} />
      <div className="absolute bottom-10 left-24 w-[300px] h-[300px] bg-blue-400 rounded-full opacity-40 blur-3xl pointer-events-none" style={{zIndex: 0}} />
      <div className="absolute bottom-24 left-40 w-[250px] h-[250px] bg-purple-400 rounded-full opacity-40 blur-3xl pointer-events-none" style={{zIndex: 0}} />
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-10 px-4">
        {/* Left: Profile & Info */}
        <div className="flex-1 flex flex-col items-center md:items-start">
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
          <div className="text-white text-lg mb-4">Feel Free to contact me!</div>
          <ul className="space-y-5 text-white text-base">
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-white text-2xl" />
              <a href="mailto:aagnya.mistry@gmail.com" className="underline hover:text-pink-400">aagnya.mistry@gmail.com</a>
            </li>
            <li className="flex items-center gap-4">
              <FaLinkedin className="text-white text-2xl" />
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </li>
            <li className="flex items-center gap-4">
              <FaGithub className="text-white text-2xl" />
              <a href="#" className="hover:text-purple-400">GitHub</a>
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
              className="rounded-3xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 flex flex-col gap-5 border-0"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-center text-black mb-2">SEND A MESSAGE</h2>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 border-2 border-pink-400 bg-white text-black font-medium focus:outline-none focus:border-blue-500 text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 border-2 border-pink-400 bg-white text-black font-medium focus:outline-none focus:border-blue-500 text-base"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone No."
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 border-2 border-pink-400 bg-white text-black font-medium focus:outline-none focus:border-blue-500 text-base"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="rounded-xl px-4 py-2 border-2 border-pink-400 bg-white text-black font-medium focus:outline-none focus:border-blue-500 text-base"
                required
              />
              {success && <div className="text-green-600 text-center font-semibold">{success}</div>}
              {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
              <button
                type="submit"
                className="bg-black text-white rounded-xl py-3 font-semibold text-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-black transition disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}