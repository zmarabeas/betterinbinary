import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Contact() {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call when ready
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen page-transition">
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-medium mb-16">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection delay={100}>
              <div>
                <p className="text-xl text-gray-600 mb-8">
                  Ready to simplify your tech? Let's discuss how we can transform your complex challenges into elegant solutions.
                </p>
                
                <div className="space-y-6">
                  <div className="fade-in visible">
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-gray-600">hello@betterinbinary.com</p>
                  </div>
                  
                  <div className="fade-in visible fade-in-delay-1">
                    <h3 className="text-lg font-medium mb-2">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 24 hours</p>
                  </div>
                  
                  <div className="fade-in visible fade-in-delay-2">
                    <h3 className="text-lg font-medium mb-2">Project Timeline</h3>
                    <p className="text-gray-600">Most projects start within 2-4 weeks</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="fade-in visible">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 transition-all duration-300 focus:scale-105"
                  />
                </div>
                
                <div className="fade-in visible fade-in-delay-1">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 transition-all duration-300 focus:scale-105"
                  />
                </div>
                
                <div className="fade-in visible fade-in-delay-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 transition-all duration-300 focus:scale-105"
                  />
                </div>
                
                <div className="fade-in visible fade-in-delay-3">
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 focus:scale-105"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="business-automation">Business Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="fade-in visible fade-in-delay-4">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[120px] transition-all duration-300 focus:scale-105"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <div className="fade-in visible fade-in-delay-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white hover:opacity-80 transition-all duration-300 hover:-translate-y-1 button-like"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}