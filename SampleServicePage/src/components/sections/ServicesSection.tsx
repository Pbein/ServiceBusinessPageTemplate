import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
        </div>
        <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4">
            <CloudIcon className="h-10 w-10" />
            <h3 className="text-lg font-bold">Cloud Services</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We provide scalable cloud services to meet your business needs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4">
            <LockIcon className="h-10 w-10" />
            <h3 className="text-lg font-bold">Security Services</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our security services protect your data and ensure compliance with
              regulations.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4">
            <HelpCircleIcon className="h-10 w-10" />
            <h3 className="text-lg font-bold">Support Services</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We offer 24/7 support to ensure your business runs smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function HelpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default ServicesSection;