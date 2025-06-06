import AnimatedSection from "@/components/AnimatedSection";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function About() {
  useScrollToTop();
  const { ref: approachRef, visibleItems: approachVisible } = useStaggeredAnimation(4, 150);

  return (
    <div className="min-h-screen page-transition">
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-medium mb-16">About Better in Binary</h1>
          
          <div className="space-y-8 text-xl leading-relaxed">
            <p className="fade-in visible">
              Better in Binary is a software development studio focused on creating solutions that actually work. We partner with small businesses to build digital products that solve real problems.
            </p>
            
            <p className="fade-in visible fade-in-delay-1">
              We believe software should enhance your workflow, not complicate it. Our approach prioritizes simplicity, reliability, and user experience above all else.
            </p>
            
            <p className="fade-in visible fade-in-delay-2">
              We're a small team of design-oriented software developers, with a strong understanding of user experience and product development. We strive to build thoughtful, human-centric products through an open and transparent approach to timelines and estimates.
            </p>
            
            <p className="fade-in visible fade-in-delay-3">
              We're friendly, transparent, communicative and hospitable, as it's our best relationships that produce the most meaningful work.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-medium mb-12">Our Approach</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-16" ref={approachRef}>
            <div className={`transition-all duration-700 ${approachVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-medium mb-4">Simplicity First</h3>
              <p className="text-gray-600">
                We believe in building solutions that are intuitive and easy to use, reducing complexity wherever possible.
              </p>
            </div>
            
            <div className={`transition-all duration-700 ${approachVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-medium mb-4">Quality Focus</h3>
              <p className="text-gray-600">
                Every project receives our full attention, ensuring high-quality deliverables that stand the test of time.
              </p>
            </div>
            
            <div className={`transition-all duration-700 ${approachVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-medium mb-4">Transparent Process</h3>
              <p className="text-gray-600">
                We maintain open communication throughout the development process, keeping you informed every step of the way.
              </p>
            </div>
            
            <div className={`transition-all duration-700 ${approachVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-medium mb-4">Long-term Partnership</h3>
              <p className="text-gray-600">
                We're here for the long haul, providing ongoing support and maintenance for all our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}