
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import AchievementCard from './AchievementCard';
import { Trophy, Award, Medal, Star, Heart } from 'lucide-react';

const achievementsData = [
  {
    title: 'Top AI Researcher Award',
    year: '2023',
    description: 'Recognized as one of the top AI researchers for contributions to few-shot learning techniques.',
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    title: 'Excellence in Innovation',
    year: '2022',
    description: 'Award for developing a novel approach to explainable AI in medical diagnostics.',
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: 'Best Paper Award - NeurIPS',
    year: '2022',
    description: 'Received best paper award for research on efficient transformer architectures.',
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: 'Google Research Grant',
    year: '2021',
    description: 'Received $150,000 research grant for work on ethical AI frameworks.',
    icon: <Medal className="h-5 w-5" />,
  },
  {
    title: 'Community Contribution Award',
    year: '2021',
    description: 'Recognized for contributions to open-source AI tools and educational resources.',
    icon: <Heart className="h-5 w-5" />,
  },
];

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Recognition and accomplishments throughout my career"
    >
      <div
        ref={ref}
        className={cn(
          'max-w-3xl mx-auto space-y-6',
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        {achievementsData.map((achievement, index) => (
          <div
            key={achievement.title}
            className={cn(
              'transition-all',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
          >
            <AchievementCard {...achievement} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
