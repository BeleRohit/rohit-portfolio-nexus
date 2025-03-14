
import { useState, useEffect } from 'react';

const TerminalAboutSection = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  const aboutData = [
    "> USER PROFILE: Rohit Bele",
    "> ROLE: AI Engineer & Data Scientist",
    "> STATUS: Active",
    "",
    "> DESCRIPTION:",
    "Results-driven Data Scientist and AI Engineer with expertise in Natural Language Processing (NLP), Generative AI, and Large Language Models (LLMs).",
    "",
    "Proficient in Python, SQL, PL/SQL, ETL Pipelines, and Reporting Tools.",
    "",
    "Strong analytical mindset with hands-on experience in AI model development, cloud computing (AWS), and data-driven decision-making.",
    "",
    "> EDUCATION:",
    "Bachelor's in Computer Science (Specializing in Data Science)",
    "Lovely Professional University, 2024",
    "",
    "> EXPERIENCE:",
    "Data Scientist: 1 Year",
    "",
    "> EXECUTING: mission.pursue_ai_excellence.sh"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (lines.length < aboutData.length) {
        setLines(prevLines => [...prevLines, aboutData[prevLines.length]]);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [lines.length]);

  return (
    <div className="font-mono">
      {lines.map((line, index) => (
        <div key={index} className={line.startsWith(">") ? "text-cyan-400" : "text-green-500"}>
          {line}
        </div>
      ))}
      {lines.length < aboutData.length && (
        <span className="animate-pulse">▌</span>
      )}
    </div>
  );
};

export default TerminalAboutSection;
