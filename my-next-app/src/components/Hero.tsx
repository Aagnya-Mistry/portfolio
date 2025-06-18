'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Aagnya!';
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen pt-20 pb-10 px-4 overflow-hidden bg-black">
      {/* Circular Firefly Mesh Gradient Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Firefly 1 */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-firefly-1"></div>
        
        {/* Firefly 2 */}
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-40 animate-firefly-2"></div>
        
        {/* Firefly 3 */}
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-35 animate-firefly-3"></div>
        
        {/* Firefly 4 */}
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-25 animate-firefly-4"></div>
        
        {/* Firefly 5 */}
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-firefly-5"></div>
        
        {/* Firefly 6 */}
        <div className="absolute top-2/3 left-1/6 w-22 h-22 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-xl opacity-35 animate-firefly-6"></div>
        
        {/* Additional smaller fireflies */}
        <div className="absolute top-1/6 right-1/6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-20 animate-firefly-7"></div>
        <div className="absolute bottom-1/3 right-1/6 w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-25 animate-firefly-8"></div>
        <div className="absolute top-4/5 left-1/3 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-20 animate-firefly-9"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full">
        <div className="relative flex-shrink-0 mb-8 md:mb-0 md:mr-2 w-full md:w-1/2 flex justify-center">
          <div 
            className="p-2 bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 rounded-2xl shadow-2xl w-full h-auto max-w-[400px] max-h-[60vh] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              src={isHovering ? "/profile2.png" : "/profile1.jpg"} // Replace with your actual image names
              alt="Profile"
              width={1000}
              height={1400}
              className="rounded-2xl object-cover border-4 border-black transition-all duration-300"
              style={{width: '100%', height: 'auto', maxHeight: '56vh'}}
              onError={(e) => {
                // Fallback to profile.jpg if the specific images don't exist
                const target = e.target as HTMLImageElement;
                target.src = "/profile.jpg";
              }}
            />
          </div>
        </div>
        <div className="max-w-xl w-full md:w-1/2 md:-ml-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-heading">
            Hey, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <h2 className="italic text-lg md:text-xl text-gray-300 mb-2 font-body">
            AI/ML Engineer, Web & Mobile App Developer & Aspiring Data Scientist
          </h2>
          <p className="text-gray-400 mb-6 font-body">
            I create smart, user-focused solutions by combining development skills with data-driven thinking.
          </p>
          <div className="flex gap-6">
            <div className="bg-purple-200/40 text-black rounded-xl px-8 py-4 text-center shadow-lg border-2 border-purple-400/40 backdrop-blur-sm">
              <div className="text-2xl font-bold font-heading">8.7</div>
              <div className="text-sm font-body">CGPA</div>
            </div>
            <div className="bg-purple-200/40 text-black rounded-xl px-8 py-4 text-center shadow-lg border-2 border-purple-400/40 backdrop-blur-sm">
              <div className="text-2xl font-bold font-heading">2+</div>
              <div className="text-sm font-body">Years of Experience</div>
            </div>
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