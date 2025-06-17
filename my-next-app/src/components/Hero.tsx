import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-20 pb-10 px-4 bg-black">
      <div className="relative flex-shrink-0 mb-8 md:mb-0 md:mr-16 w-full md:w-1/2 flex justify-center">
        <div className="p-2 bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 rounded-2xl shadow-2xl w-full h-auto max-w-[600px] max-h-[80vh] flex items-center justify-center">
          <Image
            src="/profile.jpg" // Place your image in public/profile.jpg
            alt="Profile"
            width={1000}
            height={1400}
            className="rounded-2xl object-cover border-4 border-black"
            style={{width: '100%', height: 'auto', maxHeight: '76vh'}}
          />
        </div>
      </div>
      <div className="max-w-xl w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Hey, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400">Aagnya!</span>
        </h1>
        <h2 className="italic text-lg md:text-xl text-gray-300 mb-2">
          AI/ML Engineer, Web & Mobile App Developer & Aspiring Data Scientist
        </h2>
        <p className="text-gray-400 mb-6">
          I create smart, user-focused solutions by combining development skills with data-driven thinking.
        </p>
        <div className="flex gap-6">
          <div className="bg-purple-200/40 text-black rounded-xl px-8 py-4 text-center shadow-lg border-2 border-purple-400/40">
            <div className="text-2xl font-bold">8.7</div>
            <div className="text-sm">CGPA</div>
          </div>
          <div className="bg-purple-200/40 text-black rounded-xl px-8 py-4 text-center shadow-lg border-2 border-purple-400/40">
            <div className="text-2xl font-bold">2+</div>
            <div className="text-sm">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}