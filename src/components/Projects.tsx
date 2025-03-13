
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Fine Tuning LLM Models',
    description: 'A comprehensive project focused on fine-tuning large language models including LLaMA-2 and DeepSeek\'s R1. Implemented parameter-efficient fine-tuning techniques like LoRA and QLoRA to adapt these models for specific tasks while maintaining performance. The project demonstrates optimization strategies, hyperparameter tuning, and evaluation methods for improving model accuracy and reducing training time.',
    tags: ['fine tuning', 'LLM', 'large language models'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Linked List Operations',
    description: 'This project is a Python-based graphical user interface (GUI) application that allows users to perform various linked list operations, including inserting, deleting, searching, and displaying elements of a linked list. The application is built using the Tkinter library and implements a modular approach to separate the linked list logic, GUI interface, and logging/error handling.',
    tags: ['Python', 'Data Structures', 'Tkinter', 'GUI'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    githubUrl: 'https://github.com/BeleRohit/LinkedList_Operations',
  },
  {
    title: "AI PDF Assistant",
    description: "A proof-of-concept web application that enables users to chat with the contents of a PDF document using a language model. Built with Streamlit and powered by Anyscale's free LLM API.",
    tags: ["NLP", "LLM", "PDF Processing", "Chatbot"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2832&auto=format&fit=crop",
    githubUrl: "http://github.com/BeleRohit/chatty-patty"
  },
  {
    title: "Speech Emotion Classifier",
    description: "A Speech Emotion Recognition (SER) system using Convolutional Neural Networks (CNN) in Python. It classifies audio recordings into emotion categories, enabling applications in customer service, mental health monitoring, and more.",
    tags: ["Deep Learning", "CNN", "Speech Recognition", "Emotion Analysis"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "http://github.com/BeleRohit/speech-classifier"
  },
  {
    title: "Reddit Data Engineering",
    description: "A data engineering project that extracts, processes, and analyzes Reddit data. It leverages APIs, ETL pipelines, and big data technologies to gain insights from Reddit discussions.",
    tags: ["Data Engineering", "ETL", "Reddit API", "Big Data"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/BeleRohit/RedditDataEngineering"
  },
  {
    title: "Book Recommendation System",
    description: "A machine learning-based recommendation system that suggests books based on user preferences and reading history. It utilizes collaborative filtering and content-based filtering techniques to provide personalized recommendations.",
    tags: ["Machine Learning", "Recommendation System", "NLP", "Data Science"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2071&auto=format&fit=crop",
    githubUrl: "https://github.com/BeleRohit/book-recommendation-system"
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Showcasing my work in AI and Machine Learning applications"
    >
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className={cn(
              'transition-all',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
              isVisible && `transition-delay-${index * 100}`
            )}
            style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
