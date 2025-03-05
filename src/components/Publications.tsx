
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import PublicationCard from './PublicationCard';

const publicationsData = [
  {
    title: 'Advancing Few-Shot Learning in Computer Vision: A Novel Approach',
    conference: 'IEEE Conference on Computer Vision',
    date: 'June 2023',
    description: 'This paper introduces a novel approach to few-shot learning that significantly improves performance on image classification tasks with limited data.',
    pdfUrl: 'https://example.com/paper1.pdf',
  },
  {
    title: 'Ethical Considerations in Deploying AI Systems: A Framework',
    conference: 'ACM Conference on Fairness and Transparency',
    date: 'March 2023',
    description: 'We present a comprehensive framework for evaluating ethical implications when deploying AI systems in real-world scenarios.',
    pdfUrl: 'https://example.com/paper2.pdf',
  },
  {
    title: 'Improving Transformer Efficiency for NLP Tasks',
    conference: 'NeurIPS',
    date: 'December 2022',
    description: 'Our research demonstrates methods to reduce the computational requirements of transformer models while maintaining performance on key NLP benchmarks.',
    pdfUrl: 'https://example.com/paper3.pdf',
  },
  {
    title: 'Explainable AI for Medical Diagnosis: Challenges and Solutions',
    conference: 'Journal of Medical AI',
    date: 'September 2022',
    description: 'This paper explores techniques for making deep learning models more interpretable in the context of medical diagnosis.',
    pdfUrl: 'https://example.com/paper4.pdf',
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
