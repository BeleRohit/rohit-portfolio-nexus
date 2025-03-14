
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const skillsData = [
  { name: 'Machine Learning', level: '███████████ 95%', category: 'AI' },
  { name: 'Deep Learning', level: '██████████░ 90%', category: 'AI' },
  { name: 'NLP', level: '█████████░░ 85%', category: 'AI' },
  { name: 'Computer Vision', level: '████████░░░ 80%', category: 'AI' },
  { name: 'Data Analysis', level: '███████████ 95%', category: 'DATA' },
  { name: 'Big Data', level: '█████████░░ 85%', category: 'DATA' },
  { name: 'Python', level: '███████████ 95%', category: 'PROGRAMMING' },
  { name: 'TensorFlow', level: '██████████░ 90%', category: 'TOOLS' },
  { name: 'PyTorch', level: '█████████░░ 85%', category: 'TOOLS' },
  { name: 'Statistics', level: '█████████░░ 85%', category: 'MATH' },
  { name: 'MLOps', level: '████████░░░ 80%', category: 'DEVOPS' },
  { name: 'Software Dev', level: '█████████░░ 85%', category: 'PROGRAMMING' },
];

const TerminalSkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<typeof skillsData>([]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleSkills.length < skillsData.length) {
        setVisibleSkills(prev => [...prev, skillsData[prev.length]]);
      } else {
        clearInterval(intervalId);
      }
    }, 150);
    
    return () => clearInterval(intervalId);
  }, [visibleSkills.length]);

  return (
    <div className="font-mono">
      <div className="mb-4 text-yellow-400">
        $ Running skill_scan.sh...
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        {visibleSkills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-32 text-cyan-400">{skill.name}</div>
            <div className="w-32 text-green-500">{skill.level}</div>
            <div className="text-yellow-400">[{skill.category}]</div>
          </div>
        ))}
      </div>
      
      {visibleSkills.length < skillsData.length && (
        <div className="mt-2 text-green-500">
          <span className="animate-pulse">▌</span> Scanning skills...
        </div>
      )}
      
      {visibleSkills.length === skillsData.length && (
        <div className="mt-4 text-green-500">
          <span className="text-yellow-400">$ scan_complete:</span> 12 skills found
        </div>
      )}
    </div>
  );
};

export default TerminalSkillsSection;
