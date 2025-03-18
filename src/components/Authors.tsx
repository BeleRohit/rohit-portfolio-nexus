
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { User, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

type Author = {
  name: string;
  photo: string;
  bio: string;
  notableWorks: string[];
  whyAdmire: string;
};

const authorsData: Author[] = [
  {
    name: "Daniel Kahneman",
    photo: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1170&auto=format&fit=crop",
    bio: "Israeli-American psychologist and economist notable for his work on the psychology of judgment and decision-making, as well as behavioral economics. Nobel Prize winner in Economic Sciences.",
    notableWorks: ["Thinking, Fast and Slow", "Noise: A Flaw in Human Judgment", "Judgment Under Uncertainty: Heuristics and Biases"],
    whyAdmire: "His groundbreaking work on cognitive biases has transformed our understanding of human decision-making, revealing the systematic errors in our thinking processes and providing frameworks to improve judgment."
  },
  {
    name: "Yuval Noah Harari",
    photo: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1169&auto=format&fit=crop",
    bio: "Israeli public intellectual, historian and professor at the Hebrew University of Jerusalem, known for his books on macro-history, evolution, and futurism.",
    notableWorks: ["Sapiens: A Brief History of Humankind", "Homo Deus: A Brief History of Tomorrow", "21 Lessons for the 21st Century"],
    whyAdmire: "His ability to synthesize vast amounts of information across disciplines and present comprehensive, accessible narratives about humanity's past, present, and future challenges."
  },
  {
    name: "Marcus Aurelius",
    photo: "https://images.unsplash.com/photo-1570246051473-7c3ad694c9c0?q=80&w=1170&auto=format&fit=crop",
    bio: "Roman Emperor from 161 to 180 AD and Stoic philosopher, known for his personal writings which later became the philosophical text 'Meditations'.",
    notableWorks: ["Meditations"],
    whyAdmire: "His practical philosophy on resilience, virtue, and self-improvement has remained relevant for nearly two millennia, offering timeless wisdom on navigating life's challenges with grace and dignity."
  },
  {
    name: "Richard Feynman",
    photo: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=1170&auto=format&fit=crop",
    bio: "American theoretical physicist known for his work in quantum mechanics, quantum electrodynamics, and particle physics. Nobel Prize winner in Physics.",
    notableWorks: ["Surely You're Joking, Mr. Feynman!", "The Feynman Lectures on Physics", "QED: The Strange Theory of Light and Matter"],
    whyAdmire: "His exceptional ability to explain complex scientific concepts with clarity and enthusiasm, combined with his boundless curiosity and playful approach to discovery and learning."
  },
  {
    name: "Carl Sagan",
    photo: "https://images.unsplash.com/photo-1552993870-44bb0c496b17?q=80&w=1170&auto=format&fit=crop",
    bio: "American astronomer, planetary scientist, cosmologist, astrophysicist, and science communicator, known for his work on extraterrestrial life and for popularizing science.",
    notableWorks: ["Cosmos", "The Demon-Haunted World: Science as a Candle in the Dark", "Pale Blue Dot: A Vision of the Human Future in Space"],
    whyAdmire: "His poetic approach to science communication ignited wonder about the cosmos for millions, while advocating for critical thinking, skepticism, and the scientific method as essential tools for society."
  }
];

const Authors = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [expandedAuthor, setExpandedAuthor] = useState<string | null>(null);
  
  const toggleAuthor = (name: string) => {
    setExpandedAuthor(expandedAuthor === name ? null : name);
  };
  
  return (
    <Section
      id="authors"
      title="Favorite Authors"
      subtitle="Writers who have influenced my thinking and perspective"
      className="bg-secondary/30"
    >
      <div
        ref={ref}
        className={cn(
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {authorsData.map((author, index) => (
            <Card 
              key={author.name}
              className={cn(
                "overflow-hidden hover:shadow-lg transition-all duration-300",
                "border-border hover:border-primary/50",
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                isVisible && `transition-delay-${index * 100}`
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={author.photo}
                  alt={author.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">{author.name}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <Collapsible
                  open={expandedAuthor === author.name}
                  onOpenChange={() => toggleAuthor(author.name)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="font-medium">About</span>
                    </div>
                    <CollapsibleTrigger className="rounded-full p-1 hover:bg-muted transition-colors">
                      {expandedAuthor === author.name ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </CollapsibleTrigger>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {author.bio}
                  </p>
                  <CollapsibleContent className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="font-medium">Notable Works</span>
                      </div>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        {author.notableWorks.map((work, i) => (
                          <li key={i}>{work}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Why I admire them:</div>
                      <p className="text-sm text-muted-foreground">{author.whyAdmire}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="overflow-hidden rounded-lg border border-border bg-card/50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Author</TableHead>
                <TableHead>Notable Work</TableHead>
                <TableHead className="hidden md:table-cell">Key Theme</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Daniel Kahneman</TableCell>
                <TableCell>Thinking, Fast and Slow</TableCell>
                <TableCell className="hidden md:table-cell">Cognitive Biases</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Yuval Noah Harari</TableCell>
                <TableCell>Sapiens</TableCell>
                <TableCell className="hidden md:table-cell">Human Evolution</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marcus Aurelius</TableCell>
                <TableCell>Meditations</TableCell>
                <TableCell className="hidden md:table-cell">Stoicism</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Richard Feynman</TableCell>
                <TableCell>Surely You're Joking, Mr. Feynman!</TableCell>
                <TableCell className="hidden md:table-cell">Curiosity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Carl Sagan</TableCell>
                <TableCell>Cosmos</TableCell>
                <TableCell className="hidden md:table-cell">Scientific Wonder</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </Section>
  );
};

export default Authors;
