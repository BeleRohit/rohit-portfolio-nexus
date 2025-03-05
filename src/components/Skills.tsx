
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

const skillsData = [
  { name: 'Machine Learning', icon: <Brain className="h-10 w-10" />, level: 'Expert' },
  { name: 'Deep Learning', icon: <Cpu className="h-10 w-10" />, level: 'Expert' },
  { name: 'NLP', icon: <Bot className="h-10 w-10" />, level: 'Advanced' },
  { name: 'Computer Vision', icon: <ImagePlus className="h-10 w-10" />, level: 'Advanced' },
  { name: 'Data Analysis', icon: <BarChart3 className="h-10 w-10" />, level: 'Expert' },
  { name: 'Big Data', icon: <Database className="h-10 w-10" />, level: 'Intermediate' },
  { name: 'Python', icon: <Code className="h-10 w-10" />, level: 'Expert' },
  { name: 'TensorFlow', icon: <LayoutGrid className="h-10 w-10" />, level: 'Advanced' },
  { name: 'PyTorch', icon: <Beaker className="h-10 w-10" />, level: 'Advanced' },
  { name: 'Statistics', icon: <LineChart className="h-10 w-10" />, level: 'Advanced' },
  { name: 'MLOps', icon: <Cloud className="h-10 w-10" />, level: 'Intermediate' },
  { name: 'Software Dev', icon: <Terminal className="h-10 w-10" />, level: 'Advanced' },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
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
            className={cn(
              'transition-all',
              isVisible && `delay-[${index * 100}ms]`
            )}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
