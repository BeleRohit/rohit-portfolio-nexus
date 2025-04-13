
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkillData {
  name: string;
  level: string;
  category: string;
  joke: string;
}

const skillsData: SkillData[] = [
  { name: 'Machine Learning', level: '███████████ 95%', category: 'AI', joke: "I told my computer I needed a machine learning algorithm. It said, 'Make me a sandwich first, then I'll learn.'" },
  { name: 'Deep Learning', level: '██████████░ 90%', category: 'AI', joke: "Deep learning is like a teenager: requires tons of supervision and still makes unpredictable decisions." },
  { name: 'NLP', level: '█████████░░ 85%', category: 'AI', joke: "Why don't natural language processors ever get jokes? They take everything literally!" },
  { name: 'Computer Vision', level: '████████░░░ 80%', category: 'AI', joke: "My computer vision algorithm walks into a bar. It recognized everyone but somehow thought the barstool was a giraffe." },
  { name: 'Data Analysis', level: '███████████ 95%', category: 'DATA', joke: "A data analyst walks into a bar. The bartender asks 'Why the long face?' The analyst replies, 'Correlation does not imply causation.'" },
  { name: 'Big Data', level: '█████████░░ 85%', category: 'DATA', joke: "Big Data is like teenage sex: everyone talks about it, nobody really knows how to do it, everyone thinks everyone else is doing it." },
  { name: 'Python', level: '███████████ 95%', category: 'PROGRAMMING', joke: "Why was the Python developer late to work? He couldn't find his keys because they were hidden in a dictionary!" },
  { name: 'TensorFlow', level: '██████████░ 90%', category: 'TOOLS', joke: "TensorFlow and I have a tense relationship. It keeps telling me my dimensions don't match." },
  { name: 'PyTorch', level: '█████████░░ 85%', category: 'TOOLS', joke: "What's PyTorch's favorite song? 'Light My Tensors'!" },
  { name: 'Statistics', level: '█████████░░ 85%', category: 'MATH', joke: "Statistics are like bikinis. What they reveal is suggestive, but what they conceal is vital." },
  { name: 'MLOps', level: '████████░░░ 80%', category: 'DEVOPS', joke: "DevOps asks: 'How can we build it faster?' MLOps asks: 'How can we build it faster AND break it in more interesting ways?'" },
  { name: 'Software Dev', level: '█████████░░ 85%', category: 'PROGRAMMING', joke: "Why do programmers prefer dark mode? Because light attracts bugs!" },
];

const TerminalSkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<typeof skillsData>([]);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  
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
          <div 
            key={index} 
            className={cn(
              "flex items-center space-x-2 cursor-pointer p-1 rounded",
              selectedSkill === index && "bg-green-900/20"
            )}
            onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
          >
            <div className="w-32 text-cyan-400">{skill.name}</div>
            <div className="w-32 text-green-500">{skill.level}</div>
            <div className="text-yellow-400">[{skill.category}]</div>
          </div>
        ))}
      </div>
      
      {selectedSkill !== null && visibleSkills[selectedSkill] && (
        <div className="mt-4 p-2 border border-green-500/30 rounded bg-black/30">
          <span className="text-yellow-400">$ joke --topic={visibleSkills[selectedSkill].name}</span>
          <p className="text-green-300 mt-1">{visibleSkills[selectedSkill].joke}</p>
        </div>
      )}
      
      {visibleSkills.length < skillsData.length && (
        <div className="mt-2 text-green-500">
          <span className="animate-pulse">▌</span> Scanning skills...
        </div>
      )}
      
      {visibleSkills.length === skillsData.length && (
        <>
          <div className="mt-4 text-green-500">
            <span className="text-yellow-400">$ scan_complete:</span> 12 skills found
          </div>
          <div className="mt-2 text-yellow-400">
            $ tip: Click on any skill to see a related joke
          </div>
        </>
      )}
    </div>
  );
};

export default TerminalSkillsSection;
