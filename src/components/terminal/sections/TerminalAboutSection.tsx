
import { useState, useEffect } from 'react';

const TerminalAboutSection = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  const aboutData = [
    "> USER PROFILE: Rohit Bele",
    "> ROLE: Data Engineer Intern @ Eversana",
    "> STATUS: Active",
    "",
    "> DESCRIPTION:",
    "Emerging Data Engineer Intern with a strong foundation in data science and AI technologies.",
    "",
    "Skilled in Python, SQL, data transformation, and cloud computing technologies.",
    "",
    "Passionate about creating data-driven solutions and delivering actionable insights.",
    "",
    "> EDUCATION:",
    "Bachelor's in Computer Science (Specializing in Data Science)",
    "Lovely Professional University, 2024",
    "",
    "> CURRENT EXPERIENCE:",
    "Data Engineer Intern: Eversana",
    "",
    "> EXECUTING: mission.innovate_data_solutions.sh"
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
