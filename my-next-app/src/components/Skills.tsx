const skills = [
    {
      "title": "LANGUAGES",
      "items": [
        "C Programming Language",
        "Python",
        "Java",
        "Data Structures in C",
        "MySQL",
        "Dart"
      ]
    },
    {
      "title": "WEB DEVELOPMENT",
      "items": [
        "HTML/CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "Flask",
        "MERN Stack"
      ]
    },
    {
      "title": "APP DEVELOPMENT",
      "items": [
        "Flutter",
        "Dart",
        "Firebase",
        "Cloudinary",
        "Android Studio"
      ]
    },
    {
      "title": "MACHINE LEARNING",
      "items": [
        "Supervised ML",
        "Unsupervised ML",
        "Deep Learning (Scikit-Learn)",
        "Natural Language Processing (NLTK, Hugging Face)",
        "Computer Vision",
        "Explainable AI"
      ]
    },
    {
      "title": "OTHERS",
      "items": [
        "Git/GitHub",
        "API Integration",
        "Render Deployment",
        "Figma",
        "Canva",
        "Capcut",
        "Microsoft PowerPoint",
        "Microsoft Word"
      ]
    },
    {
      "title": "SOFT SKILLS",
      "items": [
        "Logical Thinking",
        "Problem Solving",
        "Decision Making",
        "Time Management",
        "Communication",
        "Leadership"
      ]
    }
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="py-16 bg-black">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">SKILLS</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((cat, i) => (
            <div
              key={i}
              className="rounded-xl p-6 border-2 border-transparent bg-gradient-to-br from-pink-500/10 via-blue-500/10 to-purple-500/10"
              style={{ borderImage: 'linear-gradient(90deg, #ec4899, #3b82f6, #a78bfa) 1' }}
            >
              <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
              <ul className="list-disc list-inside text-gray-200">
                {cat.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }