
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const achievementsData = [
  {
    title: 'Amazon ML Summer School 2023',
    description: 'Short-listed participant exploring advanced AI domains.',
    year: '2023',
    status: 'COMPLETED',
  },
  {
    title: 'Kaggle ML Olympiad 2024',
    description: '3rd position in earthquake damage prediction challenge.',
    year: '2024',
    status: 'SUCCESS',
  },
  {
    title: 'TechPulse Newsletter',
    description: 'Founded technical newsletter with 500+ subscribers.',
    year: '2023',
    status: 'ACTIVE',
    link: 'https://www.linkedin.com/newsletters/7068196779149733888/',
  },
];

const TerminalAchievementsSection = () => {
  const [visibleAchievements, setVisibleAchievements] = useState<typeof achievementsData>([]);
  
  useEffect(() => {
    if (visibleAchievements.length < achievementsData.length) {
      const timer = setTimeout(() => {
        setVisibleAchievements(prev => [
          ...prev, 
          achievementsData[prev.length]
        ]);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [visibleAchievements.length]);

  return (
    <div className="font-mono">
      <div className="mb-4 text-yellow-400">
        $ achievements --scan --sort-by-date
      </div>
      
      <div className="space-y-4">
        {visibleAchievements.map((achievement, index) => (
          <div 
            key={index}
            className={cn(
              "border border-green-500/30 p-3 rounded",
              "bg-black/50"
            )}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="text-cyan-400">
                {achievement.title}
              </div>
              <div className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400">
                {achievement.status}
              </div>
            </div>
            
            <div className="text-green-500 text-sm mb-2">
              {achievement.description}
            </div>
            
            <div className="text-xs text-yellow-400">
              Year: {achievement.year}
              {achievement.link && (
                <a 
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-cyan-400 hover:underline"
                >
                  [ACCESS_LINK]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {visibleAchievements.length < achievementsData.length && (
        <div className="mt-4 text-green-500">
          <span className="animate-pulse">▌</span> Loading achievements...
        </div>
      )}
      
      {visibleAchievements.length === achievementsData.length && (
        <div className="mt-4 text-green-500">
          <span className="text-yellow-400">$ scan_complete:</span> {achievementsData.length} achievements found
        </div>
      )}
    </div>
  );
};

export default TerminalAchievementsSection;
