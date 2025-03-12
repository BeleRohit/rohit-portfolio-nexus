
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
            <div className="w-full h-full relative">
              <img
                src="/lovable-uploads/2c012a68-d0a1-48cf-bd25-26b0653dff19.png"
                alt="Rohit Bele"
                className="w-full h-full object-cover object-center scale-[1.25]"
                style={{
                  objectPosition: "50% 25%",
                }}
              />
            </div>
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
            Results-driven Data Scientist and AI Engineer with expertise in Natural Language Processing (NLP), Generative
            AI, and Large Language Models (LLMs). Proficient in Python, SQL, PL/SQL, ETL Pipelines, and Reporting
            Tools.
          </p>
          
          <p className="text-lg text-foreground/80">
            Strong analytical mindset with hands-on experience in AI model development, cloud computing (AWS),
            and data-driven decision-making. Passionate about leveraging AI to solve real-world business problems.
          </p>
          
          <p className="text-lg text-foreground/80">
            Known for high motivation, strong work ethic, and adaptability in fast-paced environments.
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
