import { ArrowRight, ExternalLink, Github, ChevronRight, Star, Eye, MoveRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {project1,project2,project3} from '../assets/';

const projects = [
  {
    id: 1,
    title: "My portfolio",
    category: "Web Development & Design",
    subtitle: "Enhancing Collaboration & Communication",
    image: {project1},
    features: [
      "Responsive & Mobile-Friendly",
      "Fast & Optimized",
      "Dark Mode Support",
      "Smooth Animations",
      "Social & Contact Links",
    ],
    demoUrl: "https://siddharthshukla.tech",
    githubUrl: "https://github.com/siddshukla/MyPortfolio",
    icon: "✨",
  },
  {
    id: 2,
    title: "A travel Guide",
    category: "Public sites",
    subtitle: "A Site for your Holidays Trip",
    image: {project2},
    features: [
      "Personalized & Curated Listings",
      "Secure Authentication & Authorization",
      "Fully Responsive & Mobile-Friendly",
    ],
    demoUrl: "https://majorproject-1-s930.onrender.com/listings",
    githubUrl: "https://github.com/siddshukla/MajorProject",
    icon: "🔔",
  },
  {
    id: 3,
    title: "BlogNova-A blog Site",
    category: "BlogSite",
    subtitle: "Enhancing Collaboration & Communication and sharing the idea and concepts through blog.",
    image: {project3},
    features: [
      "Responsive & Mobile-Friendly",
      "Fast & Optimized",
      "Dark Mode Support",
      "Smooth Animations",
      "Social & Contact Links",
    ],
    demoUrl: "https://blognova.onrender.com/",
    githubUrl: "https://github.com/siddshukla/blognovasite",
    icon: "✨",
  },
];

// Create project tags based on categories
const getProjectTags = () => {
  const allCategories = projects.map(project => project.category);
  return ["All", ...new Set(allCategories)];
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Handle responsive card height and equal sizing
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (cardRef.current) {
        const imageHeight = cardRef.current.querySelector('.project-image-container').offsetHeight;
        const contentElement = cardRef.current.querySelector('.project-content');
        contentElement.style.height = `calc(100% - ${imageHeight}px)`;
      }
    });
    
    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        resizeObserver.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="group relative bg-card rounded-xl overflow-hidden transition-all duration-500 ease-out 
                border border-border/40 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30
                transform hover:-translate-y-1 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl z-[-1] bg-gradient-to-r from-primary/0 via-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 group-hover:scale-105"></div>
      
      {/* Image container with parallax effect */}
      <div className="project-image-container relative overflow-hidden" style={{ height: "200px" }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-80 transition-all duration-700 z-10 mix-blend-overlay"></div>
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          style={{
            transform: isHovered ? "translateY(-5px)" : "translateY(0)",
            transition: "transform 0.7s ease-out",
          }}
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 group-hover:opacity-70 transition-all duration-500"></div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-20 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
          <span className="text-xs font-medium text-white/90">{project.category}</span>
        </div>
        
        {/* Featured badge (only for first project) */}
        {index === 0 && (
          <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 z-20 shadow-lg">
            <div className="flex items-center gap-1">
              <Star size={12} className="text-white fill-white" />
              <span className="text-xs font-medium text-white">Featured</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="project-content p-4 sm:p-6 flex flex-col flex-grow">
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{project.icon}</span>
            <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.subtitle}</p>
        </div>
        
        {/* Features with animated icons */}
        <div className="mt-3 sm:mt-4 transition-all duration-500">
          <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 text-muted-foreground">Key Features</h4>
          
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start group/item">
                <ChevronRight size={14} className="mr-1 text-primary shrink-0 mt-0.5 
                                                  transform transition-transform duration-300 
                                                  group-hover/item:translate-x-1" />
                <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 line-clamp-1">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Stats */}
        <div className="flex items-center gap-4 mt-3 sm:mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star size={12} className="text-primary/70" />
            <span>{35 + index * 12}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={12} className="text-primary/70" />
            <span>{120 + index * 45}</span>
          </div>
        </div>
        
        {/* Bottom buttons with hover effects */}
        <div className="mt-auto pt-3 sm:pt-4 grid grid-cols-2 gap-2 sm:gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 
                      bg-secondary/50 hover:bg-secondary/90 text-xs sm:text-sm
                      text-secondary-foreground rounded-md transition-all duration-300 hover:shadow-md group/btn 
                      border border-secondary/20 hover:border-secondary"
          >
            <Github size={14} className="transition-transform duration-300 group-hover/btn:rotate-12" />
            <span>Code</span>
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 
                      bg-primary/80 hover:bg-primary text-xs sm:text-sm
                      text-primary-foreground rounded-md transition-all duration-300 
                      hover:shadow-md group/btn border border-primary/20 hover:border-primary/40"
          >
            <span className="whitespace-nowrap">View Demo</span>
            <ExternalLink size={14} className="transition-transform duration-300 
                                             group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1200); // Default value
  const projectTags = getProjectTags();
  const sectionRef = useRef(null);

  // Handle responsive layout with more precise breakpoints
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsMobile(width < 768);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    // Equal height adjustment for all cards in the same row
    const equalizeCardHeights = () => {
      const cards = document.querySelectorAll('.project-card');
      if (!cards.length) return;
      
      // Reset heights first
      cards.forEach(card => {
        card.style.height = 'auto';
      });
      
      // Group cards by rows (depends on viewport width)
      let cardsPerRow = 3;
      if (viewportWidth < 768) cardsPerRow = 1;
      else if (viewportWidth < 1024) cardsPerRow = 2;
      
      // Process each row
      for (let i = 0; i < cards.length; i += cardsPerRow) {
        const rowCards = Array.from(cards).slice(i, i + cardsPerRow);
        if (!rowCards.length) continue;
        
        // Find max height in this row
        const maxHeight = Math.max(...rowCards.map(card => card.offsetHeight));
        
        // Apply max height to all cards in this row
        rowCards.forEach(card => {
          card.style.height = `${maxHeight}px`;
        });
      }
    };
    
    // Run initially and on resize
    equalizeCardHeights();
    const resizeTimer = setTimeout(equalizeCardHeights, 500); // Delay to ensure DOM is updated
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      setTimeout(equalizeCardHeights, 300);
    });
    
    return () => {
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('resize', equalizeCardHeights);
      clearTimeout(resizeTimer);
    };
  }, [viewportWidth, filteredProjects]);

  // Filter projects based on selected tag
  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedTag));
    }
  }, [selectedTag]);

  // Improved Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorations - more subtle on mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-40 sm:w-64 h-40 sm:h-64 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-secondary/5 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center">
            My <span className="text-primary relative inline-block">
              Projects
              <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-lg sm:max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>
        
        {/* Filter tags - scrollable on mobile */}
        <div className={`mb-8 sm:mb-10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`} 
            style={{ transitionDelay: "200ms" }}>
          <div className={isMobile ? 'flex overflow-x-auto pb-2 justify-start px-1 no-scrollbar' : 'flex flex-wrap justify-center gap-2'}>
            {projectTags.map((tag, idx) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                          whitespace-nowrap ${isMobile ? 'mr-2 flex-shrink-0' : ''}
                          ${selectedTag === tag 
                            ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20' 
                            : 'bg-card hover:bg-secondary/20 text-muted-foreground'}
                          border ${selectedTag === tag ? 'border-primary' : 'border-border'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects grid with improved responsive layout and equal-height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} h-full project-card`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
        
        {/* More projects link */}
        {filteredProjects.length > 0 && filteredProjects.length < projects.length && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setSelectedTag("All")}
              className="text-sm sm:text-base text-primary hover:text-primary/90 flex items-center gap-1 group"
            >
              View all projects
              <MoveRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        )}
        
        {/* CTA button with animation */}
        <div className={`text-center mt-12 sm:mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
             style={{ transitionDelay: "600ms" }}>
          <a
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground 
                     rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/siddshukla"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                           -translate-x-full animate-shimmer"></span>
            <span>Check My Github</span> 
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      {/* Add custom CSS to make cards perfectly aligned */}
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};