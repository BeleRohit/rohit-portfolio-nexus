
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import PublicationCard from './PublicationCard';

const publicationsData = [
  {
    title: 'Speech Emotion Recognition Using Deep Learning Techniques and Traditional Classifiers',
    conference: '3ICT’24 Conference',
    date: 'July 2024',
    description: 'Achieved 96% accuracy in emotion classification using a novel CNN architecture. Integrated LSTM networks to capture temporal dependencies in speech signals and utilized MFCCs for feature extraction.',
    pdfUrl: 'https://drive.google.com/file/d/1R4kaP4-CJ1kBb3TX1gBON6kXPj57Zm40/view?usp=sharing', // Replace with actual URL if available
  },
  {
    title: 'Explainable AI for Finance',
    conference: 'Finance AI Symposium',
    date: 'June 2024',
    description: 'Presented research on Explainable AI (XAI) methodologies for financial decision models, enhancing transparency in credit risk analysis and fraud detection. Proposed a framework integrating XAI techniques into predictive models.',
    pdfUrl: 'https://drive.google.com/file/d/1JA4cRTjHqMJ8c4cd720lPOnhL2740yGv/view?usp=sharing', // Replace with actual URL if available
  },
];

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <Section
      id="publications"
      title="Publications"
      subtitle="My research contributions to the field of AI and Data Science"
      className="bg-secondary/30"
    >
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-6',
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        {publicationsData.map((publication, index) => (
          <div
            key={publication.title}
            className={cn(
              'transition-all',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
          >
            <PublicationCard {...publication} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
