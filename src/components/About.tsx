
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';

const About = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation(0.1);
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.1);
  
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="AI Engineer and Researcher passionate about creating intelligent solutions"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          ref={ref1}
          className={cn(
            'transition-all duration-1000 delay-100',
            isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          )}
        >
          <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Rohit Bele"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div
          ref={ref2}
          className={cn(
            'flex flex-col gap-6 transition-all duration-1000 delay-200',
            isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          )}
        >
          <p className="text-lg text-foreground/80">
            Hello! I'm Rohit, an AI Engineer and Researcher with expertise in machine learning,
            natural language processing, and computer vision. With a passion for
            creating intelligent solutions that solve real-world problems, I strive to
            bridge the gap between cutting-edge research and practical applications.
          </p>
          
          <p className="text-lg text-foreground/80">
            My journey in AI began during my academic years, where I developed a
            fascination for how machines can learn from data and make intelligent
            decisions. Since then, I've worked on various projects ranging from
            predictive analytics to developing conversational AI systems.
          </p>
          
          <p className="text-lg text-foreground/80">
            When I'm not coding or researching, you can find me exploring the latest
            tech trends, contributing to open-source projects, or mentoring aspiring
            data scientists and AI enthusiasts.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
              <p className="text-foreground font-medium">Masters in AI</p>
              <p className="text-sm text-muted-foreground">Stanford University, 2021</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Experience</h3>
              <p className="text-foreground font-medium">AI Engineer</p>
              <p className="text-sm text-muted-foreground">5+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
