export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-medium mb-16">Case Studies</h1>
          
          <div className="space-y-24">
            <div>
              <h2 className="text-3xl font-medium mb-8">E-commerce Platform Redesign</h2>
              <p className="text-xl text-gray-600 mb-8">
                Complete redesign and development of an e-commerce platform, resulting in 40% increase in conversions.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Challenge</h3>
                  <p className="text-gray-600">
                    The client's existing e-commerce platform had poor user experience, slow loading times, and a confusing checkout process that was causing high cart abandonment rates.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Solution</h3>
                  <p className="text-gray-600">
                    We redesigned the entire user experience with a focus on simplicity and speed. Implemented a streamlined checkout process, optimized performance, and created a responsive design that works seamlessly across all devices.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Results</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• 40% increase in conversion rate</p>
                    <p>• 60% reduction in cart abandonment</p>
                    <p>• 50% improvement in page load speed</p>
                    <p>• 25% increase in average order value</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-24">
              <h2 className="text-3xl font-medium mb-8">Restaurant Management System</h2>
              <p className="text-xl text-gray-600 mb-8">
                Custom POS and inventory management system that reduced order processing time by 60%.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Challenge</h3>
                  <p className="text-gray-600">
                    A growing restaurant chain needed a unified system to manage orders, inventory, and staff across multiple locations. Their existing solution was fragmented and inefficient.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Solution</h3>
                  <p className="text-gray-600">
                    We built a comprehensive management system that integrates POS, inventory tracking, staff scheduling, and reporting into a single, intuitive platform. The system works both online and offline, ensuring reliability during peak hours.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Results</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• 60% reduction in order processing time</p>
                    <p>• 30% decrease in inventory waste</p>
                    <p>• Real-time reporting across all locations</p>
                    <p>• 99.9% system uptime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-24">
              <h2 className="text-3xl font-medium mb-8">Additional Case Studies</h2>
              <p className="text-xl text-gray-600 mb-8">
                More detailed case studies and project examples coming soon.
              </p>
              <p className="text-gray-400">We're currently documenting additional projects to share with you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}