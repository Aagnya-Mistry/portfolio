'use client';
import { motion } from 'framer-motion';

const journey = [
    {
      "left": "DJS Aura - Socials Co-Committee Member",
      "leftDesc": "Gained proficiency in new tools such as Canva and CapCut for design and video editing.",
      "right": null,
      "rightDesc": null
    },
    {
      "left": null,
      "leftDesc": null,
      "right": "1st Runner-Up in Ideathon by DJS S4DS",
      "rightDesc": "Developed a startup idea about urban agriculture."
    },
    {
      "left": "DJS Trinity - Events & Creatives Volunteer",
      "leftDesc": "Continuously developing skills in data engineering under expert mentorship.",
      "right": null,
      "rightDesc": null
    },
    {
      "left": null,
      "leftDesc": null,
      "right": "DJS eXpress - Creatives Co-Committee Member",
      "rightDesc": "Developed a startup idea about urban agriculture."
    },
    {
      "left": "DJS Aura - Socials Crew Member",
      "leftDesc": "Managing social media strategies and engagement activities for the college festival.",
      "right": null,
      "rightDesc": null
    },
    {
      "left": null,
      "leftDesc": null,
      "right": "DJS Compute - Data Engineering Mentee",
      "rightDesc": "Continuously developing skills in data engineering under expert mentorship."
    },
    {
      "left": "NPTEL - Discrete Mathematics (IIT Ropar)",
      "leftDesc": null,
      "right": null,
      "rightDesc": null
    },
    {
      "left": null,
      "leftDesc": null,
      "right": "DJS GDG - ML Research Mentee",
      "rightDesc": "Actively contributing to ML initiatives and research-focused activities within the club."
    },
    {
      "left": "SIH Finalist 2024 at IIT Hyderabad",
      "leftDesc": "Developed Shetkari - a Crop Disease Detector Mobile Application using Flutter and OpenCV.",
      "right": null,
      "rightDesc": null
    },
    {
      "left": null,
      "leftDesc": null,
      "right": "DJS Trinity - Events Co-Committee Member",
      "rightDesc": "Actively contributing to ML initiatives and research-focused activities within the club."
    },
    {
      "left": "AWS Academy - Cloud Foundations",
      "leftDesc": null,
      "right": null,
      "rightDesc": null
    },
    {
      "left": null,
      "leftDesc": null,
      "right": "Participated in Data2Knowledge",
      "rightDesc": "Build a Smart Task Management Dashboard in the 9-hour Datathon held by DJS init.AI"
    },
    {
      "left": "DJS SAE Speedsters - Technical Department",
      "leftDesc": "Actively contributing to the development of a website for an electric bike.",
      "right": null,
      "rightDesc": null
    },
    {
      "left": null,
      "leftDesc": null,
      "right": "Flutter Developer Intern at GetFly Technologies",
      "rightDesc": "Developed a mobile application for EdTech platform"
    }
  ];
  
  export default function Journey() {
    return (
      <section id="journey" className="py-16 bg-black">
        <h2 className="text-4xl font-bold text-center mb-10 text-white font-heading">MY JOURNEY</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-white -translate-x-1/2 z-0" />
          <div className="relative z-10">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                className="flex mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className={`w-1/2 pr-8 text-right ${i % 2 === 0 ? '' : 'opacity-60'}`}>
                  <div className="text-white font-bold font-heading">{item.left}</div>
                  <div className="text-gray-300 text-sm font-body">{item.leftDesc}</div>
                </div>
                <div className="w-1/12 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 border-4 border-black" />
                  {i < journey.length - 1 && <div className="flex-1 w-1 bg-white" />}
                </div>
                <div className={`w-1/2 pl-8 text-left ${i % 2 === 1 ? '' : 'opacity-60'}`}>
                  <div className="text-white font-bold font-heading">{item.right}</div>
                  <div className="text-gray-300 text-sm font-body">{item.rightDesc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }