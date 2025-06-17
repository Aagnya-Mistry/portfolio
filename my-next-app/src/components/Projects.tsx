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
      "tech": "",
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
      "subtitle": "",
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
    return (
      <section id="projects" className="py-16 bg-black">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-xl p-5 border-2 border-transparent bg-gradient-to-br from-pink-500/20 via-blue-500/10 to-purple-500/20 shadow-lg"
              style={{ borderImage: 'linear-gradient(90deg, #ec4899, #3b82f6, #a78bfa) 1' }}
            >
              <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
              <div className="italic text-gray-300 mb-1">{p.subtitle}</div>
              <div className="text-gray-400 mb-2">{p.desc}</div>
              <div className="text-sm text-white mb-2">
                <span className="font-semibold">Tech Stack:</span> {p.tech}
              </div>
              <a href={p.link} className="text-pink-400 font-bold" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  }