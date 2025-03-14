
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const publicationsData = [
  {
    title: 'Speech Emotion Recognition Using Deep Learning Techniques and Traditional Classifiers',
    conference: '3ICT\'24 Conference',
    date: 'July 2024',
    description: 'Achieved 96% accuracy in emotion classification using a novel CNN architecture.',
  },
  {
    title: 'Explainable AI for Finance',
    conference: 'Finance AI Symposium',
    date: 'June 2024',
    description: 'Presented research on Explainable AI (XAI) methodologies for financial decision models.',
  },
];

const TerminalPublicationsSection = () => {
  const [visiblePublications, setVisiblePublications] = useState<typeof publicationsData>([]);
  
  useEffect(() => {
    if (visiblePublications.length < publicationsData.length) {
      const timer = setTimeout(() => {
        setVisiblePublications(prev => [
          ...prev, 
          publicationsData[prev.length]
        ]);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [visiblePublications.length]);

  return (
    <div className="font-mono">
      <div className="mb-4 text-yellow-400">
        $ publications --fetch --academic
      </div>
      
      <div className="space-y-6">
        {visiblePublications.map((pub, index) => (
          <div key={index} className="border border-green-500/30 p-4 rounded bg-black/50">
            <div className="text-cyan-400 text-lg mb-2">
              {pub.title}
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
              <div className="text-yellow-400">{pub.conference}</div>
              <div className="text-green-300">{pub.date}</div>
            </div>
            
            <div className="text-green-500 text-sm">
              {pub.description}
            </div>
            
            <div className="mt-3">
              <span className="text-cyan-400 underline cursor-pointer">
                View Publication [Access: RESTRICTED]
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {visiblePublications.length < publicationsData.length && (
        <div className="mt-4 text-green-500">
          <span className="animate-pulse">▌</span> Fetching publications from academic database...
        </div>
      )}
      
      {visiblePublications.length === publicationsData.length && (
        <div className="mt-4 text-green-500">
          <span className="text-yellow-400">$ fetch_complete:</span> {publicationsData.length} publications found
        </div>
      )}
    </div>
  );
};

export default TerminalPublicationsSection;
