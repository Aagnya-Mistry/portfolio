'use client';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
    {
      "title": "Shetkari",
      "subtitle": "A Crop Disease Detector Mobile App",
      "desc": "Shetkari is a real-time crop disease detection app developed for the Smart India Hackathon 2024, capable of identifying plant diseases from images and providing preventive measures.",
      "tech": "Flutter, TensorFlow & OpenCV, Flask (API), Firebase.",
      "link": "https://github.com/Aagnya-Mistry/SIH_Shetkari"
    },
    {
      "title": "Bias Mitigation in ML Models using XAI for Recidivism",
      "subtitle": "An Ongoing Research Paper",
      "desc": "Research on mitigating bias in ML models for recidivism prediction using Explainable AI tools like SHAP and Fairlearn.",
      "tech": "Scikit-learn, SHAP, FairLearn",
      "link": "https://github.com/Aagnya-Mistry/Bias-Mitigation-in-ML-Models-for-Recidivism"
    },
    {
      "title": "Real-Estate Price Prediction",
      "subtitle": "Deployed Machine Learning Project",
      "desc": "A web app for predicting real estate prices using Linear Regression, achieving 84% accuracy with complete backend integration and dynamic frontend interaction.",
      "tech": "Flask, Python, HTML, CSS, Pandas, Scikit-learn.",
      "link": "https://github.com/Aagnya-Mistry/Real_Estate_Price_Prediction"
    },
    {
      "title": "Smart Task Facility Dashboard",
      "subtitle": "Scikit-learn, SHAP, Lime, FairLearn",
      "desc": "Developed a Smart Task Facility Management Dashboard during a 9-Hour Datathon, featuring real-time analytics and ML-driven task prioritization and workload prediction using XGBoost.",
      "tech": "Python, XGBoost, Streamlit, Pandas, Matplotlib.",
      "link": "https://github.com/OjasGeet/Kasukabe_Coders_D2k"
    },
    {
      "title": "NLP Text Summarizer",
      "subtitle": "",
      "desc": "Built an NLP-based text summarization system using Seq2Seq architecture with attention, capable of generating concise summaries of long-form text, and evaluated using ROUGE metrics.",
      "tech": "TensorFlow, Keras, AWS EC2, GloVe, NLTK, ROUGE.",
      "link": ""
    }
  ];
  
  export default function Projects() {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const getProjectsForPage = (pageIndex: number) => {
      const startIndex = pageIndex * projectsPerPage;
      const endIndex = startIndex + projectsPerPage;
      return projects.slice(startIndex, endIndex);
    };

    const currentProjects = getProjectsForPage(currentPage);

    return (
      <section id="projects" className="py-16 bg-black">
        <h2 className="text-4xl font-bold text-center mb-10 text-white font-heading">PROJECTS</h2>
        <div className="relative max-w-6xl mx-auto flex items-center">
          <button
            className="absolute left-0 z-10 bg-black/60 hover:bg-white/20 text-white p-3 rounded-full shadow transition disabled:opacity-30"
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>
          
          <div className="flex-1 flex justify-center">
            <div className="flex gap-4 w-full max-w-5xl">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-0"
                >
                  <div
                    className="rounded-xl p-5 border-2 border-transparent bg-gradient-to-br from-pink-500/20 via-blue-500/10 to-purple-500/20 shadow-lg h-full"
                    style={{ borderImage: 'linear-gradient(90deg, #ec4899, #3b82f6, #a78bfa) 1' }}
                  >
                    <h3 className="text-xl font-bold text-white mb-1 font-heading">{project.title}</h3>
                    <div className="italic text-gray-300 mb-1 font-body">{project.subtitle}</div>
                    <div className="text-gray-400 mb-2 font-body">{project.desc}</div>
                    <div className="text-sm text-white mb-2 font-body">
                      <span className="font-semibold">Tech Stack:</span> {project.tech}
                    </div>
                    <a href={project.link} className="text-pink-400 font-bold font-body" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 z-10 bg-black/60 hover:bg-white/20 text-white p-3 rounded-full shadow transition disabled:opacity-30"
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage >= totalPages - 1}
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        
        {/* Page indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === currentPage ? 'bg-white' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentPage(i)}
            />
          ))}
        </div>
      </section>
    );
  }