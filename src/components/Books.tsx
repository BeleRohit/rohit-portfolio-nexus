
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
  significance?: string;
  takeaways?: string[];
};

const booksData: BookType[] = [
  // Fiction Books
  {
    id: 1,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop",
    description: "A deep philosophical novel exploring faith, doubt, free will, and morality.",
    significance: "One of the greatest works of literature, presenting profound existential questions.",
    takeaways: ["Faith vs. Reason", "The burden of free will", "Moral struggles shape destiny"]
  },
  {
    id: 2,
    title: "Notes From Underground",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1776&auto=format&fit=crop",
    description: "A psychological and existential monologue of an isolated and bitter man.",
    significance: "One of the first existentialist novels, exploring self-awareness and alienation.",
    takeaways: ["Rationality vs. irrationality", "Freedom in suffering", "Alienation from society"]
  },
  {
    id: 3,
    title: "Love in the Time of Cholera",
    author: "Gabriel García Márquez",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop",
    description: "A poetic story of love, longing, and destiny set against the backdrop of an epidemic.",
    significance: "Explores the timeless nature of love and the human heart's resilience.",
    takeaways: ["Love transcends time", "Passion vs. commitment", "Reality vs. idealized love"]
  },
  {
    id: 4,
    title: "Godan",
    author: "Munshi Premchand",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1476675913533-088ddca46d5a?q=80&w=1926&auto=format&fit=crop",
    description: "A powerful story depicting the struggles of Indian farmers under feudal oppression.",
    significance: "A literary masterpiece capturing socio-economic disparities and human resilience.",
    takeaways: ["Economic struggles shape human fate", "Social justice is vital for progress", "Hope prevails despite hardships"]
  },
  {
    id: 5,
    title: "The Idiot",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=1829&auto=format&fit=crop",
    description: "An exploration of a pure soul's confrontation with a corrupt society.",
    takeaways: ["The cost of innocence", "Beauty and morality", "Society's response to goodness"]
  },
  {
    id: 6,
    title: "The Fountainhead",
    author: "Ayn Rand",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop",
    description: "A novel about an individualistic architect who refuses to compromise his integrity.",
    takeaways: ["Individual vs. collective", "Creative integrity", "Self-determination"]
  },
  {
    id: 7,
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1495640388908-15f29df84701?q=80&w=1887&auto=format&fit=crop",
    description: "A surreal journey through mundane and extraordinary worlds.",
    takeaways: ["Reality and surrealism", "Isolation", "Psychological exploration"]
  },
  {
    id: 8,
    title: "Men Without Women",
    author: "Haruki Murakami",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1887&auto=format&fit=crop",
    description: "A collection of short stories exploring loneliness and isolation.",
    takeaways: ["Loneliness", "Male identity", "Human connections"]
  },
  {
    id: 9,
    title: "Infinite Jest",
    author: "David Foster Wallace",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1613290807643-775c037c12d8?q=80&w=1888&auto=format&fit=crop",
    description: "A complex novel exploring addiction, entertainment, and the pursuit of happiness.",
    takeaways: ["Entertainment and addiction", "Human connection", "The search for meaning"]
  },
  {
    id: 10,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1770&auto=format&fit=crop",
    description: "An epic chronicle of Russian society during the Napoleonic era.",
    takeaways: ["Individual vs. historical forces", "Love and family", "Philosophy of history"]
  },
  {
    id: 11,
    title: "Demons",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?q=80&w=1770&auto=format&fit=crop",
    description: "A powerful exploration of political radicalism and moral nihilism.",
    takeaways: ["Ideology vs. humanity", "Nihilism", "Political extremism"]
  },
  {
    id: 12,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    coverImg: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?q=80&w=1965&auto=format&fit=crop",
    description: "A psychological account of a poor student's murder and moral dilemmas.",
    takeaways: ["Crime and conscience", "Redemption", "Psychological suffering"]
  },
  
  // Non-Fiction Books
  {
    id: 13,
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
    description: "A groundbreaking book on how emotional intelligence shapes personal and professional success.",
    significance: "Revolutionized how we understand emotions and decision-making.",
    takeaways: ["Self-awareness is key to emotional growth", "Empathy builds strong relationships", "IQ isn't the only predictor of success"]
  },
  {
    id: 14,
    title: "Creativity: Flow and the Psychology of Discovery and Invention",
    author: "Mihaly Csikszentmihalyi",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1512045482940-f37f5216f639?q=80&w=1935&auto=format&fit=crop",
    description: "A deep dive into the psychology of creativity and the state of flow.",
    significance: "Helped me understand how creativity emerges and how to nurture it.",
    takeaways: ["Flow state enhances creativity", "Creative people embrace complexity", "Discipline fuels innovation"]
  },
  {
    id: 15,
    title: "From Sex to Superconsciousness",
    author: "Osho",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1505744386214-51dba16a1f0b?q=80&w=1936&auto=format&fit=crop",
    description: "A controversial exploration of the connection between sexuality and spirituality.",
    takeaways: ["Sexual energy and transformation", "Spiritual awakening", "Beyond societal taboos"]
  },
  {
    id: 16,
    title: "Courage",
    author: "Osho",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?q=80&w=1974&auto=format&fit=crop",
    description: "A guide to facing life's challenges with courage and authenticity.",
    takeaways: ["Embracing uncertainty", "Authentic living", "Freedom through courage"]
  },
  {
    id: 17,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1940&auto=format&fit=crop",
    description: "Insights on how psychology affects our financial decisions.",
    takeaways: ["Financial behavior trumps knowledge", "Personal history shapes money views", "Long-term thinking"]
  },
  {
    id: 18,
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1612969308146-066015f5029d?q=80&w=1770&auto=format&fit=crop",
    description: "Ancient wisdom on strategy, conflict, and leadership.",
    takeaways: ["Strategic thinking", "Preparation", "Adaptability"]
  },
  {
    id: 19,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1606189934846-a527add8a77b?q=80&w=1935&auto=format&fit=crop",
    description: "The definitive book on value investing and market philosophy.",
    takeaways: ["Value investing principles", "Market psychology", "Long-term perspective"]
  },
  {
    id: 20,
    title: "Mindset",
    author: "Carol S. Dweck",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1770&auto=format&fit=crop",
    description: "How our beliefs about our abilities dramatically influence success.",
    takeaways: ["Growth vs. fixed mindset", "Embracing challenges", "Learning from failure"]
  },
  {
    id: 21,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop",
    description: "Rules for focused success in a distracted world.",
    takeaways: ["Focused work", "Eliminating distractions", "Professional success"]
  },
  {
    id: 22,
    title: "Ego Is the Enemy",
    author: "Ryan Holiday",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1517582082532-16a092d47074?q=80&w=1887&auto=format&fit=crop",
    description: "How ego undermines success and what to do about it.",
    takeaways: ["Humility", "Continuous learning", "Reality over self-image"]
  },
  {
    id: 23,
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1770&auto=format&fit=crop",
    description: "Personal reflections on Stoic philosophy from a Roman emperor.",
    takeaways: ["Stoicism", "Self-reflection", "Virtue and resilience"]
  },
  {
    id: 24,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1911&auto=format&fit=crop",
    description: "An exploration of cosmology and the nature of time and space.",
    takeaways: ["Scientific concepts", "Cosmology", "Human understanding"]
  },
  {
    id: 25,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1505471768190-275e2ad070d9?q=80&w=1836&auto=format&fit=crop",
    description: "A sweeping history of human evolution and civilization.",
    takeaways: ["Human evolution", "Cognitive revolution", "Future of humanity"]
  },
  {
    id: 26,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
    description: "A counterintuitive approach to living a good life.",
    takeaways: ["Value-based decisions", "Accepting limitations", "Choosing struggles wisely"]
  },
  {
    id: 27,
    title: "Rework",
    author: "Jason Fried & David Heinemeier Hansson",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1776&auto=format&fit=crop",
    description: "A different approach to work and success in business.",
    takeaways: ["Simplicity in business", "Working smarter", "Questioning conventional wisdom"]
  },
  {
    id: 28,
    title: "Karma",
    author: "Sadhguru",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=1935&auto=format&fit=crop",
    description: "A yogic perspective on the laws of action and consequence.",
    takeaways: ["Understanding karma", "Personal responsibility", "Conscious living"]
  },
  {
    id: 29,
    title: "The Origins of Political Order",
    author: "Francis Fukuyama",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1473017935640-54ccacc5b9eb?q=80&w=1770&auto=format&fit=crop",
    description: "An exploration of how political institutions developed.",
    takeaways: ["Political evolution", "State formation", "Social organization"]
  },
  {
    id: 30,
    title: "Political Order and Political Decay",
    author: "Francis Fukuyama",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1770&auto=format&fit=crop",
    description: "An analysis of political development from the industrial revolution to globalization.",
    takeaways: ["Modern state development", "Democracy challenges", "Political institutions"]
  },
  {
    id: 31,
    title: "The Better Angels of Our Nature",
    author: "Steven Pinker",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1490633874781-1c63cc424610?q=80&w=1770&auto=format&fit=crop",
    description: "A comprehensive argument for how violence has declined throughout human history.",
    takeaways: ["Historical perspective", "Human progress", "Psychology of violence"]
  },
  {
    id: 32,
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas Hofstadter",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?q=80&w=1770&auto=format&fit=crop",
    description: "An exploration of cognition, symmetry, and self-reference through mathematics, art, and music.",
    takeaways: ["Self-reference", "Cognitive science", "Pattern recognition"]
  },
  {
    id: 33,
    title: "Why Am I So Clever",
    author: "Friedrich Nietzsche",
    genre: "Non-Fiction",
    coverImg: "https://images.unsplash.com/photo-1456513080867-f24f120351fc?q=80&w=1776&auto=format&fit=crop",
    description: "A philosophical exploration of intelligence, perspective, and self-awareness.",
    takeaways: ["Self-examination", "Intellectual development", "Philosophical insight"]
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
                        <CardContent className="p-4">
                          <div className="h-40 overflow-hidden mb-4">
                            <img src={book.coverImg} alt={`Cover of ${book.title}`} className="object-cover w-full h-full" />
                          </div>
                          <h3 className="font-semibold text-lg">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">{book.author}</p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <h4 className="font-bold mb-2">{book.title}</h4>
                      <p className="text-sm mb-2">{book.description}</p>
                      {book.significance && <p className="text-sm italic mb-2">{book.significance}</p>}
                      {book.takeaways && book.takeaways.length > 0 && (
                        <div className="mt-2">
                          <span className="text-xs font-semibold">Key Takeaways:</span>
                          <ul className="list-disc ml-4 text-xs mt-1">
                            {book.takeaways.map((takeaway, idx) => (
                              <li key={idx}>{takeaway}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-8 flex justify-center">
          <Button onClick={getRandomBook} className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Get a Random Book Recommendation
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Books;
