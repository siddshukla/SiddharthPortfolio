import { ArrowUp, Github, Twitter, Instagram, Mail, Linkedin, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  // Smooth scroll to top function
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you'd send this to your API
      console.log("Subscribing:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-0 left-1/4 w-24 h-24 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Siddharth Shukla</h2>
            <p className="text-slate-300 mt-2">Creative Developer & Designer</p>
          </div>
          
          {/* <div className="w-full md:w-auto">
            <div className="relative">
              {subscribed ? (
                <div className="bg-green-500/20 text-green-300 px-4 py-3 rounded-lg text-sm animate-pulse">
                  Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="bg-slate-800/50 border border-slate-700 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-r-lg transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-2">Get updates on new projects and tech insights</p>
          </div> */}
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 border-t border-slate-700/50 pt-12">
          {/* About Column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-px bg-blue-400 mr-2"></span>
              About
            </h3>
            <p className="text-slate-300 mb-6">
              Building exceptional digital experiences with modern technologies. Focused on creating intuitive and performant solutions that elevate brands.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/siddshukla" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/siddharth-shukla-811302272/" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#instagram" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-px bg-purple-400 mr-2"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="projects" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all"></span>
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          
          
          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-px bg-purple-400 mr-2"></span>
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-slate-300 flex items-start">
                <Mail size={16} className="mr-3 mt-1 text-purple-400" />
                <span>
                  <a href="mailto:siddsanskshukla@gmail.com.com" className="hover:text-purple-300 transition-colors">siddsanskshukla@gmail.com</a>
                </span>
              </p>
              
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Siddharth Shukla. All rights reserved.
          </p>
{/*           
          <div className="flex space-x-6 text-slate-400 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div> */}
        </div>
      </div>
      
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        } fixed bottom-8 right-8 z-50`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};