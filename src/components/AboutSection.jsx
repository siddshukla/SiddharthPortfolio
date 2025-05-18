import { Briefcase, Code, User, Star, ArrowRight, Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Who I Am</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-3">
            About <span className="text-primary relative">Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 backdrop-blur-sm bg-card/5 p-6 rounded-xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-primary animate-pulse" />
              <h3 className="text-2xl font-semibold">
                Passionate Web Developer
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              I transform complex problems into elegant solutions through code.🚀 
              Programming isn't just my profession—it's my passion and driving force. 
              I consistently explore cutting-edge technologies, refine my skillset, 
              and implement my knowledge to craft impactful applications that make a difference.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full web development stack, working with 
              <span className="text-primary font-medium"> JavaScript</span>, 
              <span className="text-primary font-medium"> Node.js</span>, 
              <span className="text-primary font-medium"> Express</span>, and 
              <span className="text-primary font-medium"> React</span>, alongside 
              <span className="text-primary font-medium"> MongoDB</span> and 
              <span className="text-primary font-medium"> SQL</span> for database management. 
              I adhere to industry best practices including RESTful API design, 
              robust authentication protocols, and clean MVC architecture. 
              I'm perpetually learning and adapting to ensure my solutions remain 
              optimized, secure, and user-centric 💡💻.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              
              {/* <a
                href=""
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Download CV
                <Download className="h-4 w-4" />
              </a> */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="group gradient-border p-6 rounded-xl card-hover transition-all duration-300 backdrop-blur-sm bg-card/5 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                  I build responsive and high-performing websites using modern tools and frameworks. My focus is on writing clean, easy-to-maintain code and creating smooth, user-friendly experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group gradient-border p-6 rounded-xl card-hover transition-all duration-300 backdrop-blur-sm bg-card/5 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground">
                  I'm learning to design clean and user-friendly interfaces that make websites easier to use. I focus on simple layouts and consistent design to improve user experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group gradient-border p-6 rounded-xl card-hover transition-all duration-300 backdrop-blur-sm bg-card/5 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  Project Collaboration
                  </h4>
                  <p className="text-muted-foreground">
                  I enjoy working on team-based projects and contributing to real-world solutions. I'm gaining experience with Git and GitHub, and learning how to communicate and collaborate effectively in development workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;