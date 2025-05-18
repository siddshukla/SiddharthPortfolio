import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Loader2,
  Github
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // EmailJS integration
    emailjs.sendForm(
      'service_eld6gua', 
      'template_jls4zob', 
      formRef.current, 
      '50yFrbyEr22msXh2k'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        // Reset form fields
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
        toast({
          title: "Message failed to send",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shadow-sm">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:siddsanskshukla@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    siddsanskshukla@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shadow-sm">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+918604494386"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +91 8604494386
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shadow-sm">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Bhubaneswar, Odisha
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 md:pt-8">
  <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
  <div className="flex space-x-4 justify-center">
    <a
      href="https://www.linkedin.com/in/siddharth-shukla-811302272/"
      target="_blank"
      className="hover:text-primary transition-colors duration-300"
    >
      <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
    </a>

    <a
      href="https://github.com/siddshukla"
      target="_blank"
      className="hover:text-primary transition-colors duration-300"
    >
      <Github className="h-5 w-5 md:h-6 md:w-6" />
    </a>
  </div>
</div>

          </div>

          <div
            className="bg-card p-6 md:p-8 rounded-lg shadow-md border border-border/50"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6"> Send a Message</h3>

            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Mayank..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Mayank@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 transition-all duration-300",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};