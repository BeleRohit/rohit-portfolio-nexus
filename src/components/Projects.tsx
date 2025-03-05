
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Fine Tuning LLM Models',
    description: 'Fine Tuning Large language models like Deepseek's R1 and LLama 2',
    tags: ['fine tuning','LLM','large language models'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'NLP Document Summarizer',
    description: 'An advanced NLP system that summarizes lengthy documents while preserving key information and context.',
    tags: ['NLP', 'Transformers', 'BERT'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2030&auto=format&fit=crop',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Predictive Maintenance System',
    description: 'IoT and machine learning solution for industrial equipment failure prediction, reducing downtime by 30%.',
    tags: ['Time Series', 'IoT', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1581092921461-39b11a63ae62?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time social media sentiment analysis tool with interactive visualization dashboard.',
    tags: ['NLP', 'Data Viz', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Reinforcement Learning Game AI',
    description: 'Self-learning AI agent for strategic game playing using deep reinforcement learning.',
    tags: ['Reinforcement Learning', 'Neural Networks', 'Gaming'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Ethical AI Framework',
    description: 'Open-source framework for evaluating bias and fairness in machine learning models.',
    tags: ['Ethical AI', 'Bias Detection', 'MLOps'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2145&auto=format&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Showcasing my work in AI and Machine Learning applications"
    >
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className={cn(
              'transition-all',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
              isVisible && `transition-delay-${index * 100}`
            )}
            style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
