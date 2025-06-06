import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <span className="text-lg font-medium transition-all hover:opacity-70">
              Better in Binary
            </span>
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-sm transition-all hover:opacity-70 ${
                    location === item.href
                      ? "font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}