export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-medium mb-16">Our Services</h1>
          
          <div className="space-y-24">
            <div>
              <h2 className="text-3xl font-medium mb-8">Web Development</h2>
              <p className="text-xl text-gray-600 mb-8">
                Custom web applications built with modern technologies and best practices.
              </p>
              <div className="space-y-4 text-gray-600">
                <p>• React, Vue.js, and Angular applications</p>
                <p>• Node.js and Python backend development</p>
                <p>• Database design and optimization</p>
                <p>• API development and integration</p>
                <p>• Performance optimization and security</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-24">
              <h2 className="text-3xl font-medium mb-8">Mobile Applications</h2>
              <p className="text-xl text-gray-600 mb-8">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <div className="space-y-4 text-gray-600">
                <p>• iOS development with Swift</p>
                <p>• Android development with Kotlin</p>
                <p>• Cross-platform with React Native</p>
                <p>• App Store and Play Store deployment</p>
                <p>• Mobile-first design and UX</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-24">
              <h2 className="text-3xl font-medium mb-8">Business Automation</h2>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your operations with custom automation solutions.
              </p>
              <div className="space-y-4 text-gray-600">
                <p>• Workflow automation and optimization</p>
                <p>• Integration with existing systems</p>
                <p>• Custom business logic implementation</p>
                <p>• Reporting and analytics dashboards</p>
                <p>• Process documentation and training</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-24">
              <h2 className="text-3xl font-medium mb-8">Data Solutions</h2>
              <p className="text-xl text-gray-600 mb-8">
                Coming soon - Advanced data analytics and integration services.
              </p>
              <p className="text-gray-400">Additional details will be available soon.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}