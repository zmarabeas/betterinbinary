import AnimatedSection from "@/components/AnimatedSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Services() {
  useScrollToTop();
  return (
    <div className="min-h-screen page-transition">
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-medium mb-16">Our Services</h1>
          
          <div className="space-y-24">
            <AnimatedSection delay={100}>
              <div>
                <h2 className="text-3xl font-medium mb-8">Web Development</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Custom web applications built with modern technologies and best practices.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p className="fade-in visible">• React, Vue.js, and Angular applications</p>
                  <p className="fade-in visible fade-in-delay-1">• Node.js and Python backend development</p>
                  <p className="fade-in visible fade-in-delay-2">• Database design and optimization</p>
                  <p className="fade-in visible fade-in-delay-3">• API development and integration</p>
                  <p className="fade-in visible fade-in-delay-4">• Performance optimization and security</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="border-t border-gray-200 pt-24">
              <div>
                <h2 className="text-3xl font-medium mb-8">Mobile Applications</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p className="fade-in visible">• iOS development with Swift</p>
                  <p className="fade-in visible fade-in-delay-1">• Android development with Kotlin</p>
                  <p className="fade-in visible fade-in-delay-2">• Cross-platform with React Native</p>
                  <p className="fade-in visible fade-in-delay-3">• App Store and Play Store deployment</p>
                  <p className="fade-in visible fade-in-delay-4">• Mobile-first design and UX</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="border-t border-gray-200 pt-24">
              <div>
                <h2 className="text-3xl font-medium mb-8">Business Automation</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Streamline your operations with custom automation solutions.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p className="fade-in visible">• Workflow automation and optimization</p>
                  <p className="fade-in visible fade-in-delay-1">• Integration with existing systems</p>
                  <p className="fade-in visible fade-in-delay-2">• Custom business logic implementation</p>
                  <p className="fade-in visible fade-in-delay-3">• Reporting and analytics dashboards</p>
                  <p className="fade-in visible fade-in-delay-4">• Process documentation and training</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400} className="border-t border-gray-200 pt-24">
              <div>
                <h2 className="text-3xl font-medium mb-8">Data Solutions</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Coming soon - Advanced data analytics and integration services.
                </p>
                <p className="text-gray-400">Additional details will be available soon.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}