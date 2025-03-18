
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Book, User, BookOpen, Heart, Star, GraduationCap } from 'lucide-react';
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

// Sample book data - replace with your actual favorites
const booksData: BookType[] = [
  {
    id: 1,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    coverImg: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
    description: "An exploration of the two systems that drive the way we think and make choices.",
    significance: "Completely changed my understanding of human decision making and cognitive biases.",
    takeaways: ["We have two systems of thinking: fast intuitive and slow rational", "Our biases affect decisions in predictable ways", "Recognizing biases is the first step to better decisions"]
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    coverImg: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop",
    description: "A groundbreaking narrative of humanity's creation and evolution.",
    significance: "Offered a comprehensive perspective on human history and our place in the world.",
    takeaways: ["Cognitive revolution enabled complex social structures", "Agriculture was not necessarily an improvement", "Shared myths enable large-scale cooperation"]
  },
  {
    id: 3,
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio & Aaron Courville",
    genre: "Data Science",
    coverImg: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=2070&auto=format&fit=crop",
    description: "The definitive textbook on deep learning, covering both theory and practical applications.",
    significance: "Served as my foundation for understanding neural networks and machine learning.",
    takeaways: ["Backpropagation is key to training deep networks", "Architecture design affects model capabilities", "Transfer learning reduces data requirements"]
  },
  {
    id: 4,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    genre: "Philosophy",
    coverImg: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop",
    description: "A memoir based on Frankl's experiences as a Holocaust survivor and the search for purpose.",
    significance: "Transformed my perspective on suffering and finding meaning in difficult circumstances.",
    takeaways: ["Meaning can be found even in suffering", "Freedom to choose one's attitude remains in any situation", "Purpose gives strength to endure hardship"]
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Improvement",
    coverImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop",
    description: "A practical guide to building good habits and breaking bad ones.",
    significance: "Helped me develop a system for continuous improvement in both personal and professional life.",
    takeaways: ["Small changes compound over time", "Focus on systems rather than goals", "Identity-based habits are more sustainable"]
  },
  {
    id: 6,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1518744386442-2d48ac25263f?q=80&w=1974&auto=format&fit=crop",
    description: "A comedy science fiction series following the adventures of Arthur Dent.",
    significance: "Showed me how humor can be used to explore profound philosophical questions.",
    takeaways: ["Don't panic!", "Sometimes the questions are more important than the answers", "The universe is wonderfully absurd"]
  },
  {
    id: 7,
    title: "Human Compatible",
    author: "Stuart Russell",
    genre: "AI",
    coverImg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1776&auto=format&fit=crop",
    description: "A proposal for creating artificial intelligence that is aligned with human values.",
    significance: "Offered practical solutions to AI safety concerns while maintaining technological progress.",
    takeaways: ["AI systems should be uncertain about human objectives", "Value alignment is crucial for safety", "We need new approaches to beneficial AI"]
  },
  {
    id: 8,
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    genre: "Philosophy",
    coverImg: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1770&auto=format&fit=crop",
    description: "An analysis of the history of science that introduced the concept of paradigm shifts.",
    significance: "Changed how I understand scientific progress and knowledge evolution.",
    takeaways: ["Science advances through paradigm shifts", "Normal science operates within established frameworks", "Revolutionary science breaks existing models"]
  },
  {
    id: 9,
    title: "Superintelligence",
    author: "Nick Bostrom",
    genre: "AI",
    coverImg: "https://images.unsplash.com/photo-1456513080867-f24f233f5610?q=80&w=1973&auto=format&fit=crop",
    description: "An exploration of the potential paths, dangers, and strategies related to the development of superintelligent machines.",
    significance: "Helped me understand the long-term implications of AI development.",
    takeaways: ["Control problem is central to AI safety", "Intelligence explosion could happen rapidly", "Value loading is technically challenging"]
  },
  {
    id: 10,
    title: "Factfulness",
    author: "Hans Rosling",
    genre: "Data Science",
    coverImg: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1773&auto=format&fit=crop",
    description: "A book about why the world is better than we think and how to see progress clearly.",
    significance: "Taught me to interpret data with proper context and avoid instinctive biases.",
    takeaways: ["Progress happens gradually but continuously", "Data literacy counteracts fear-based worldviews", "Statistical thinking reveals true global trends"]
  },
  {
    id: 11,
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy",
    coverImg: "https://images.unsplash.com/photo-1476675913533-088ddca46d5a?q=80&w=1926&auto=format&fit=crop",
    description: "Personal writings of the Roman Emperor Marcus Aurelius on Stoic philosophy.",
    significance: "A constant companion for developing emotional resilience and ethical clarity.",
    takeaways: ["Focus on what you can control", "Accept what cannot be changed", "Virtue is the only true good"]
  },
  {
    id: 12,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1512045482940-f37f5216f639?q=80&w=1935&auto=format&fit=crop",
    description: "A science fiction epic set in a distant future amidst a feudal interstellar society.",
    significance: "Expanded my imagination and demonstrated how fiction can explore complex themes.",
    takeaways: ["Ecology shapes civilizations", "Power and responsibility are intertwined", "Prescience can be a trap"]
  }
];

// Get unique genres from the book data
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
    <Section
      id="books"
      title="Favorite Books"
      subtitle="A collection of books that have shaped my thinking and perspective"
      className="bg-gradient-to-b from-background to-secondary/30"
    >
      <div
        ref={ref}
        className={cn(
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <Tabs defaultValue={genres[0]} className="w-full" onValueChange={setSelectedGenre}>
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2 bg-transparent">
              {genres.map((genre) => (
                <TabsTrigger
                  key={genre}
                  value={genre}
                  className={cn(
                    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                    "transition-all duration-300 px-6"
                  )}
                >
                  {genre}
                </TabsTrigger>
              ))}
            </TabsList>

            {genres.map((genre) => (
              <TabsContent key={genre} value={genre} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {booksData
                    .filter((book) => book.genre === genre)
                    .map((book, index) => (
                      <HoverCard key={book.id}>
                        <HoverCardTrigger asChild>
                          <Card className={cn(
                            "h-full overflow-hidden cursor-pointer transition-all duration-300",
                            "hover:shadow-md hover:-translate-y-1 hover:border-primary/50",
                            "flex flex-col"
                          )}>
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={book.coverImg}
                                alt={`Cover of ${book.title}`}
                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <div>
                                  <h3 className="text-white font-bold">{book.title}</h3>
                                  <p className="text-white/80 text-sm">{book.author}</p>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <h4 className="text-base font-semibold">{book.title}</h4>
                              <Star className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center">
                              <User className="h-3 w-3 mr-1" /> {book.author}
                            </div>
                            <p className="text-sm">{book.description}</p>
                            <div className="text-sm">
                              <p className="font-medium flex items-center gap-1">
                                <Heart className="h-3 w-3 text-primary" /> Why it matters:
                              </p>
                              <p className="text-xs text-muted-foreground">{book.significance}</p>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium flex items-center gap-1">
                                <GraduationCap className="h-3 w-3 text-primary" /> Key takeaways:
                              </p>
                              <ul className="text-xs text-muted-foreground list-disc pl-5 space-y-1">
                                {book.takeaways.map((takeaway, i) => (
                                  <li key={i}>{takeaway}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            onClick={getRandomBook}
            className="group flex items-center gap-2 bg-primary/90 hover:bg-primary transition-all duration-300"
          >
            <BookOpen className="h-4 w-4 group-hover:animate-pulse" />
            Get a Random Book Recommendation
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Books;
