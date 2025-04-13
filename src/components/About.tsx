
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
      subtitle="Data Engineer and AI Enthusiast passionate about transforming data into insights"
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
                src="/lovable-uploads/784ce49f-2730-4268-ba30-cfa198bdeebb.png"
                alt="Rohit Bele"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "50% 50%",
                  transform: "scale(0.9)",
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
            Emerging Data Engineer Intern at Eversana, bringing a strong foundation in data science, 
            AI technologies, and analytical problem-solving. Skilled in leveraging data to drive 
            strategic insights and support business decision-making.
          </p>
          
          <p className="text-lg text-foreground/80">
            Passionate about utilizing Python, SQL, and cloud computing technologies 
            to transform complex data into meaningful solutions. Committed to continuous 
            learning and innovation in the data engineering landscape.
          </p>
          
          <p className="text-lg text-foreground/80">
            Combining academic knowledge with practical experience to create 
            data-driven strategies that deliver tangible business value.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
              <p className="text-foreground font-medium">Bachelor's in Computer Science (Data Science Specialization)</p>
              <p className="text-sm text-muted-foreground">Lovely Professional University, 2024</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Current Role</h3>
              <p className="text-foreground font-medium">Data Engineer Intern</p>
              <p className="text-sm text-muted-foreground">Eversana</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
