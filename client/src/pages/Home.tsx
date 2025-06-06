import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Home() {
  useScrollToTop();
  const { ref: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(4, 150);
  const { ref: caseStudiesRef, visibleItems: caseStudiesVisible } = useStaggeredAnimation(2, 200);

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl lg:text-8xl font-medium leading-tight mb-12 fade-in visible">
            Software that works for you, not against you
          </h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl fade-in visible fade-in-delay-1">
            We build intuitive software solutions that simplify complex problems, allowing you to focus on what matters most: growing your business.
          </p>
          <div className="flex gap-6 fade-in visible fade-in-delay-2">
            <Link href="/services">
              <span className="inline-block px-8 py-4 bg-black text-white font-medium transition-all duration-300 hover:opacity-80 hover:-translate-y-1 button-like">
                View Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-block px-8 py-4 border border-black font-medium transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 button-like">
                Get Started
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <AnimatedSection className="py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed mb-8">
              Better in Binary is a software development studio focused on creating solutions that actually work. We partner with small businesses to build digital products that solve real problems.
            </p>
            <p className="text-xl leading-relaxed mb-8">
              We believe software should enhance your workflow, not complicate it. Our approach prioritizes simplicity, reliability, and user experience above all else.
            </p>
            <Link href="/about">
              <span className="underline hover:opacity-70 transition-all duration-300 hover:scale-105">read more</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <section className="py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16" ref={servicesRef}>
            <div className={`transition-all duration-700 ${servicesVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-medium mb-6">Web Development</h3>
              <p className="text-lg text-gray-600 mb-6">
                Custom web applications built with modern technologies and best practices.
              </p>
              <Link href="/services">
                <span className="underline hover:opacity-70 transition-all duration-300 hover:scale-105">read more</span>
              </Link>
            </div>
            <div className={`transition-all duration-700 ${servicesVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-medium mb-6">Mobile Apps</h3>
              <p className="text-lg text-gray-600 mb-6">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <Link href="/services">
                <span className="underline hover:opacity-70 transition-all duration-300 hover:scale-105">read more</span>
              </Link>
            </div>
            <div className={`transition-all duration-700 ${servicesVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-medium mb-6">Business Automation</h3>
              <p className="text-lg text-gray-600 mb-6">
                Streamline your operations with custom automation solutions.
              </p>
              <Link href="/services">
                <span className="underline hover:opacity-70 transition-all duration-300 hover:scale-105">read more</span>
              </Link>
            </div>
            <div className={`transition-all duration-700 ${servicesVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-medium mb-6">Data Solutions</h3>
              <p className="text-lg text-gray-600 mb-6">
                Coming soon - Advanced data analytics and integration services.
              </p>
              <span className="text-gray-400">coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16" ref={caseStudiesRef}>
            <div className={`transition-all duration-700 ${caseStudiesVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-medium mb-6">E-commerce Platform</h3>
              <p className="text-lg text-gray-600 mb-6">
                Complete redesign and development of an e-commerce platform, resulting in 40% increase in conversions.
              </p>
              <Link href="/case-studies">
                <span className="underline hover:opacity-70 transition-all duration-300 hover:scale-105">read case study</span>
              </Link>
            </div>
            <div className={`transition-all duration-700 ${caseStudiesVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-medium mb-6">Restaurant Management</h3>
              <p className="text-lg text-gray-600 mb-6">
                Custom POS and inventory management system that reduced order processing time by 60%.
              </p>
              <Link href="/case-studies">
                <span className="underline hover:opacity-70 transition-all duration-300 hover:scale-105">read case study</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}