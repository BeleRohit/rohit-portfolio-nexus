
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import AchievementCard from './AchievementCard';
import { Trophy, Award, Medal, Star, Heart } from 'lucide-react';

const achievementsData = [
  {
    title: 'Amazon ML Summer School 2023: Shortlisted Participant',
    year: '2023',
    description: 'Selected as a top candidate to explore advanced AI domains, including deep learning architectures and cutting-edge generative models.',
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    title: 'Kaggle ML Olympiad 2024: 3rd Position',
    year: '2024',
    description: 'Secured 3rd place by developing a state-of-the-art model for earthquake damage prediction, achieving one of the highest F1 scores.',
    icon: <Medal className="h-5 w-5" />,
  },
  {
    title: 'TechPulse Newsletter: Founder and Author',
    year: '2023',
    description: 'Founded and authored a technical newsletter attracting 500+ subscribers, focusing on emerging trends in generative AI, multimodal systems, and foundational model research.',
    icon: <Star className="h-5 w-5" />,
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
