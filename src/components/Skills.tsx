
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import SkillCard from './SkillCard';
import {
  Brain,
  Code,
  BarChart3,
  Database,
  Bot,
  LineChart,
  Cpu,
  Cloud,
  Terminal,
  Beaker,
  LayoutGrid,
  ImagePlus,
} from 'lucide-react';

interface SkillData {
  name: string;
  icon: React.ReactNode;
  level: string;
  joke: string;
}

const skillsData: SkillData[] = [
  { 
    name: 'Machine Learning', 
    icon: <Brain className="h-10 w-10" />, 
    level: 'Expert',
    joke: "I told my computer I needed a machine learning algorithm. It said, 'Make me a sandwich first, then I'll learn.'"
  },
  { 
    name: 'Deep Learning', 
    icon: <Cpu className="h-10 w-10" />, 
    level: 'Expert',
    joke: "Deep learning is like a teenager: requires tons of supervision and still makes unpredictable decisions."
  },
  { 
    name: 'NLP', 
    icon: <Bot className="h-10 w-10" />, 
    level: 'Advanced',
    joke: "Why don't natural language processors ever get jokes? They take everything literally!"
  },
  { 
    name: 'Computer Vision', 
    icon: <ImagePlus className="h-10 w-10" />, 
    level: 'Advanced',
    joke: "My computer vision algorithm walks into a bar. It recognized everyone but somehow thought the barstool was a giraffe."
  },
  { 
    name: 'Data Analysis', 
    icon: <BarChart3 className="h-10 w-10" />, 
    level: 'Expert',
    joke: "A data analyst walks into a bar. The bartender asks 'Why the long face?' The analyst replies, 'Correlation does not imply causation.'"
  },
  { 
    name: 'Big Data', 
    icon: <Database className="h-10 w-10" />, 
    level: 'Intermediate',
    joke: "Big Data is like teenage sex: everyone talks about it, nobody really knows how to do it, everyone thinks everyone else is doing it."
  },
  { 
    name: 'Python', 
    icon: <Code className="h-10 w-10" />, 
    level: 'Expert',
    joke: "Why was the Python developer late to work? He couldn't find his keys because they were hidden in a dictionary!"
  },
  { 
    name: 'TensorFlow', 
    icon: <LayoutGrid className="h-10 w-10" />, 
    level: 'Advanced',
    joke: "TensorFlow and I have a tense relationship. It keeps telling me my dimensions don't match."
  },
  { 
    name: 'PyTorch', 
    icon: <Beaker className="h-10 w-10" />, 
    level: 'Advanced',
    joke: "What's PyTorch's favorite song? 'Light My Tensors'!"
  },
  { 
    name: 'Statistics', 
    icon: <LineChart className="h-10 w-10" />, 
    level: 'Advanced',
    joke: "Statistics are like bikinis. What they reveal is suggestive, but what they conceal is vital."
  },
  { 
    name: 'MLOps', 
    icon: <Cloud className="h-10 w-10" />, 
    level: 'Intermediate',
    joke: "DevOps asks: 'How can we build it faster?' MLOps asks: 'How can we build it faster AND break it in more interesting ways?'"
  },
  { 
    name: 'Software Dev', 
    icon: <Terminal className="h-10 w-10" />, 
    level: 'Advanced',
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  
  useEffect(() => {
    // Randomly pick a skill to highlight after page load
    const timer = setTimeout(() => {
      setRandomIndex(Math.floor(Math.random() * skillsData.length));
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="My technical toolbox and areas of expertise in AI and Data Science"
      className="bg-secondary/30"
    >
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6',
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        {skillsData.map((skill, index) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            level={skill.level}
            joke={skill.joke}
            className={cn(
              'transition-all',
              isVisible && `delay-[${index * 100}ms]`,
              randomIndex === index && 'ring-2 ring-primary ring-offset-2 ring-offset-background'
            )}
          />
        ))}
      </div>
      <p className="mt-6 text-center text-muted-foreground italic text-sm">Click on any skill to discover a tech joke!</p>
    </Section>
  );
};

export default Skills;
