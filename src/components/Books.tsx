import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { BookOpen, User, Heart, Star, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type BookType = {
  id: number;
  title: string;
  author: string;
  genre: string;
  coverImg: string;
  description: string;
  significance: string;
  takeaways: string[];
};

const booksData: BookType[] = [
  {
    id: 1,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Classic Literature",
    coverImg: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop",
    description: "A deep philosophical novel exploring faith, doubt, free will, and morality.",
    significance: "One of the greatest works of literature, presenting profound existential questions.",
    takeaways: ["Faith vs. Reason", "The burden of free will", "Moral struggles shape destiny"]
  },
  {
    id: 2,
    title: "Notes From Underground",
    author: "Fyodor Dostoevsky",
    genre: "Philosophy",
    coverImg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1776&auto=format&fit=crop",
    description: "A psychological and existential monologue of an isolated and bitter man.",
    significance: "One of the first existentialist novels, exploring self-awareness and alienation.",
    takeaways: ["Rationality vs. irrationality", "Freedom in suffering", "Alienation from society"]
  },
  {
    id: 3,
    title: "Love in the Time of Cholera",
    author: "Gabriel García Márquez",
    genre: "Romance",
    coverImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop",
    description: "A poetic story of love, longing, and destiny set against the backdrop of an epidemic.",
    significance: "Explores the timeless nature of love and the human heart's resilience.",
    takeaways: ["Love transcends time", "Passion vs. commitment", "Reality vs. idealized love"]
  },
  {
    id: 4,
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    genre: "Psychology",
    coverImg: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
    description: "A groundbreaking book on how emotional intelligence shapes personal and professional success.",
    significance: "Revolutionized how we understand emotions and decision-making.",
    takeaways: ["Self-awareness is key to emotional growth", "Empathy builds strong relationships", "IQ isn't the only predictor of success"]
  },
  {
    id: 5,
    title: "Creativity: Flow and the Psychology of Discovery and Invention",
    author: "Mihaly Csikszentmihalyi",
    genre: "Self-Improvement",
    coverImg: "https://images.unsplash.com/photo-1512045482940-f37f5216f639?q=80&w=1935&auto=format&fit=crop",
    description: "A deep dive into the psychology of creativity and the state of flow.",
    significance: "Helped me understand how creativity emerges and how to nurture it.",
    takeaways: ["Flow state enhances creativity", "Creative people embrace complexity", "Discipline fuels innovation"]
  },
  {
    id: 6,
    title: "Godan",
    author: "Munshi Premchand",
    genre: "Classic Literature",
    coverImg: "https://images.unsplash.com/photo-1476675913533-088ddca46d5a?q=80&w=1926&auto=format&fit=crop",
    description: "A powerful story depicting the struggles of Indian farmers under feudal oppression.",
    significance: "A literary masterpiece capturing socio-economic disparities and human resilience.",
    takeaways: ["Economic struggles shape human fate", "Social justice is vital for progress", "Hope prevails despite hardships"]
  }
];

const genres = Array.from(new Set(booksData.map(book => book.genre)));

const Books = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedGenre, setSelectedGenre] = useState<string>(genres[0]);
  const { toast } = useToast();

  const getRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const book = booksData[randomIndex];
    
    toast({
      title: "Book Recommendation",
      description: `Try reading "${book.title}" by ${book.author}`,
      duration: 5000,
    });
  };

  return (
    <Section id="books" title="Favorite Books" subtitle="A collection of books that have shaped my thinking and perspective">
      <div ref={ref} className={cn('transition-all duration-1000', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
        <Tabs defaultValue={genres[0]} className="w-full" onValueChange={setSelectedGenre}>
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
            {genres.map((genre) => (
              <TabsTrigger key={genre} value={genre} className="transition-all px-6">{genre}</TabsTrigger>
            ))}
          </TabsList>

          {genres.map((genre) => (
            <TabsContent key={genre} value={genre}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {booksData.filter((book) => book.genre === genre).map((book) => (
                  <HoverCard key={book.id}>
                    <HoverCardTrigger asChild>
                      <Card className="cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
                        <img src={book.coverImg} alt={`Cover of ${book.title}`} className="object-cover w-full h-56" />
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <h4>{book.title}</h4>
                      <p>{book.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <Button onClick={getRandomBook}>Get a Random Book Recommendation</Button>
      </div>
    </Section>
  );
};

export default Books;
