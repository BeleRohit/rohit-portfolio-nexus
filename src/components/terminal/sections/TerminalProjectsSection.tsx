
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    title: 'AI-Powered Content Generator',
    description: 'Built an AI system that creates personalized content based on user preferences and behavior patterns.',
    tags: ['Python', 'GPT-3', 'React', 'FastAPI']
  },
  {
    title: 'Computer Vision for Retail Analytics',
    description: 'Developed a CV system to analyze customer movement and engagement in retail environments.',
    tags: ['PyTorch', 'OpenCV', 'TensorFlow', 'Edge Computing']
  },
  {
    title: 'Predictive Maintenance System',
    description: 'Created an ML model to predict equipment failures before they occur, reducing downtime by 37%.',
    tags: ['Python', 'Scikit-learn', 'Time Series', 'IoT']
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Automated document classification and data extraction using NLP techniques.',
    tags: ['NLP', 'OCR', 'Transformers', 'Python']
  }
];

const TerminalProjectsSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showingDetails, setShowingDetails] = useState(false);
  const [text, setText] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowingDetails(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentProjectIndex]);
  
  const nextProject = () => {
    if (currentProjectIndex < projectsData.length - 1) {
      setCurrentProjectIndex(prev => prev + 1);
      setShowingDetails(false);
    }
  };
  
  const prevProject = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(prev => prev - 1);
      setShowingDetails(false);
    }
  };

  return (
    <div className="font-mono">
      <div className="mb-4 text-yellow-400">
        $ projects --list --detailed
      </div>
      
      <div className="border border-green-500/30 p-4 rounded bg-black/50">
        <div className="flex justify-between items-center mb-4">
          <div className="text-cyan-400 text-lg">
            Project [{currentProjectIndex + 1}/{projectsData.length}]
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={prevProject}
              disabled={currentProjectIndex === 0}
              className={cn(
                "px-2 py-1 border border-green-500/30 rounded",
                "hover:bg-green-500/20 transition-colors",
                currentProjectIndex === 0 && "opacity-50 cursor-not-allowed"
              )}
            >
              prev
            </button>
            <button 
              onClick={nextProject}
              disabled={currentProjectIndex === projectsData.length - 1}
              className={cn(
                "px-2 py-1 border border-green-500/30 rounded",
                "hover:bg-green-500/20 transition-colors",
                currentProjectIndex === projectsData.length - 1 && "opacity-50 cursor-not-allowed"
              )}
            >
              next
            </button>
          </div>
        </div>
        
        <div className="mb-2 text-green-300 text-xl">
          {projectsData[currentProjectIndex].title}
        </div>
        
        {showingDetails ? (
          <>
            <div className="mb-4 text-green-500">
              {projectsData[currentProjectIndex].description}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projectsData[currentProjectIndex].tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div className="text-green-500">
            <span className="animate-pulse">▌</span> Loading project details...
          </div>
        )}
      </div>
      
      <div className="mt-4 text-yellow-400">
        $ Type 'next' or 'prev' to navigate projects
      </div>
    </div>
  );
};

export default TerminalProjectsSection;
