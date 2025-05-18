import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BarChart3, Code2, Database, Globe, Layers, Terminal, Laptop, Zap } from "lucide-react";

// Custom SVG logos for concepts
const customLogos = {
  ejs: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23A91E50" d="M2.6,5.6l17.5,0l-4.5,5.1l4.5,5.1H2.6V5.6z"/><path fill="%23FFFFFF" d="M4.5,7.5h10v2h-10V7.5z M4.5,10.5h7.5v2h-7.5V10.5z M4.5,13.5h10v2h-10V13.5z"/></svg>`,
  dataStructures: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect fill="%233178C6" x="3" y="4" width="7" height="7" rx="1"/><rect fill="%233178C6" x="14" y="4" width="7" height="7" rx="1"/><rect fill="%233178C6" x="8.5" y="13" width="7" height="7" rx="1"/><line stroke="%233178C6" stroke-width="1.5" x1="6.5" y1="11" x2="9" y2="13"/><line stroke="%233178C6" stroke-width="1.5" x1="17.5" y1="11" x2="15" y2="13"/></svg>`,
  algorithms: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%233178C6" d="M5,5h2v2H5V5z M5,9h2v2H5V9z M5,13h2v2H5V13z M5,17h2v2H5V17z M9,5h10v2H9V5z M9,9h8v2H9V9z M9,13h6v2H9V13z M9,17h4v2H9V17z"/></svg>`,
  oop: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle fill="%233178C6" cx="12" cy="6" r="4"/><rect fill="%233178C6" x="7" y="12" width="10" height="7" rx="1"/><line stroke="%233178C6" stroke-width="1" x1="9" y1="15" x2="15" y2="15"/><line stroke="%233178C6" stroke-width="1" x1="9" y1="17" x2="15" y2="17"/></svg>`
};

// Enhanced skills data with icons, logos and more detailed categories
const skills = [
  // Languages
  { 
    name: "Java", 
    level: 85, 
    category: "languages", 
    featured: true, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
  },
  { 
    name: "C", 
    level: 76, 
    category: "languages",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
  },
  { 
    name: "HTML", 
    level: 80, 
    category: "languages",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
  },
  { 
    name: "CSS", 
    level: 79, 
    category: "languages",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
  },
  { 
    name: "JavaScript", 
    level: 75, 
    category: "languages", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
  },
  
  // Frontend
  { 
    name: "React.js", 
    level: 80, 
    category: "frontend", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  { 
    name: "Bootstrap", 
    level: 80, 
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
  },
  { 
    name: "Tailwind CSS", 
    level: 70, 
    category: "frontend", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
  },
  { 
    name: "EJS Templates", 
    level: 80, 
    category: "frontend",
    logo: customLogos.ejs
  },
  
  // Backend
  { 
    name: "Node.js", 
    level: 80, 
    category: "backend", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
  },
  { 
    name: "Express.js", 
    level: 80, 
    category: "backend", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
  },
  { 
    name: "MongoDB", 
    level: 75, 
    category: "backend", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
  },
  { 
    name: "SQL", 
    level: 85, 
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
  },
  
  // Tools & Others
  { 
    name: "Postman", 
    level: 75, 
    category: "tools",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" 
  },
  { 
    name: "VS Code", 
    level: 90, 
    category: "tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
  },
  { 
    name: "Git", 
    level: 80, 
    category: "tools", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
  },
  { 
    name: "GitHub", 
    level: 80, 
    category: "tools", 
    featured: true,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
  },
  { 
    name: "Data Structures", 
    level: 80, 
    category: "cs", 
    featured: true,
    logo: customLogos.dataStructures
  },
  { 
    name: "Algorithms", 
    level: 80, 
    category: "cs",
    logo: customLogos.algorithms
  },
  { 
    name: "OOP", 
    level: 85, 
    category: "cs", 
    featured: true,
    logo: customLogos.oop
  },
];

// Categories with icons
const categories = [
  { id: "all", label: "All Skills", icon: Zap },
  { id: "languages", label: "Languages", icon: Terminal },
  { id: "frontend", label: "Frontend", icon: Laptop },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Dev Tools", icon: Code2 },
  { id: "cs", label: "CS Fundamentals", icon: Layers }
];

// Skill rating description
const getRatingLabel = (level) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 60) return "Intermediate";
  return "Beginner";
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  
  // Get current category icon
  const CategoryIcon = categories.find(cat => cat.id === activeCategory)?.icon || Zap;
  
  return (
    <section id="skills" className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className={cn(
          "mb-16 text-center transform transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <CategoryIcon className="w-4 h-4 mr-2" />
            <span className="uppercase tracking-wider">My Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
            Professional <span className="text-primary relative inline-block">
              Skillset
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/40 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuously expanding my technical toolkit to create innovative solutions
            and deliver exceptional web experiences.
          </p>
        </div>
        
        {/* Category Filter - Modern tabs with icons */}
        <div className={cn(
          "flex flex-wrap justify-center gap-2 md:gap-3 mb-12 transform transition-all duration-1000 delay-300",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "bg-card/80 border border-border/50 hover:border-primary/50 hover:bg-card"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.id !== "all" ? category.label.substring(0, 4) : "All"}</span>
              </button>
            );
          })}
        </div>
        
        {/* Skills Grid - 3D Card Effect with Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={cn(
                "group bg-card/80 backdrop-blur p-5 md:p-6 rounded-xl border border-border/50",
                "hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5",
                "transform perspective-1000 hover:-translate-y-1 hover:rotate-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${150 + idx * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img 
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                    {skill.featured && (
                      <span className="inline-flex ml-2 w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </h3>
                </div>
                <span className="text-sm font-medium px-2 py-1 rounded-lg bg-primary/10 text-primary">
                  {getRatingLabel(skill.level)}
                </span>
              </div>
              
              <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary/70 via-primary to-primary/90"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: `width 1s ease-out ${300 + idx * 100}ms`
                  }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs bg-secondary/40 px-2 py-0.5 rounded-full text-muted-foreground">
                  {skill.category}
                </span>
                <span className="text-sm font-semibold">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill Highlights Section with Logos */}
        <div className={cn(
          "mt-20 transform transition-all duration-1000 delay-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend Skills */}
            <div className="bg-card/80 backdrop-blur p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Laptop className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Creating responsive and interactive user interfaces with modern frameworks and libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category === "frontend" && s.featured).map((skill, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-3 h-3" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className="bg-card/80 backdrop-blur p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Database className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Building robust server-side applications with secure APIs and efficient database management.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category === "backend" && s.featured).map((skill, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-3 h-3" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CS Fundamentals */}
            <div className="bg-card/80 backdrop-blur p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Layers className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">CS Fundamentals</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Strong foundation in computer science principles that drive efficient and optimized solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category === "cs" && s.featured).map((skill, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-3 h-3" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;