import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl lg:text-8xl font-medium leading-tight mb-12">
            Software that works for you, not against you
          </h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            We build intuitive software solutions that simplify complex problems, allowing you to focus on what matters most: growing your business.
          </p>
          <div className="flex gap-6">
            <Link href="/services">
              <span className="inline-block px-8 py-4 bg-black text-white font-medium transition-all hover:opacity-80">
                View Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-block px-8 py-4 border border-black font-medium transition-all hover:bg-black hover:text-white">
                Get Started
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed mb-8">
              Better in Binary is a software development studio focused on creating solutions that actually work. We partner with small businesses to build digital products that solve real problems.
            </p>
            <p className="text-xl leading-relaxed mb-8">
              We believe software should enhance your workflow, not complicate it. Our approach prioritizes simplicity, reliability, and user experience above all else.
            </p>
            <Link href="/about">
              <span className="underline hover:opacity-70 transition-all">read more</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-medium mb-6">Web Development</h3>
              <p className="text-lg text-gray-600 mb-6">
                Custom web applications built with modern technologies and best practices.
              </p>
              <Link href="/services">
                <span className="underline hover:opacity-70 transition-all">read more</span>
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6">Mobile Apps</h3>
              <p className="text-lg text-gray-600 mb-6">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <Link href="/services">
                <span className="underline hover:opacity-70 transition-all">read more</span>
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6">Business Automation</h3>
              <p className="text-lg text-gray-600 mb-6">
                Streamline your operations with custom automation solutions.
              </p>
              <Link href="/services">
                <span className="underline hover:opacity-70 transition-all">read more</span>
              </Link>
            </div>
            <div>
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
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-medium mb-6">E-commerce Platform</h3>
              <p className="text-lg text-gray-600 mb-6">
                Complete redesign and development of an e-commerce platform, resulting in 40% increase in conversions.
              </p>
              <Link href="/case-studies">
                <span className="underline hover:opacity-70 transition-all">read case study</span>
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6">Restaurant Management</h3>
              <p className="text-lg text-gray-600 mb-6">
                Custom POS and inventory management system that reduced order processing time by 60%.
              </p>
              <Link href="/case-studies">
                <span className="underline hover:opacity-70 transition-all">read case study</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}