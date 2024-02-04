import { FiHelpCircle } from "react-icons/fi"; // Feather Icons
import { FiLock } from "react-icons/fi"; // Feather Icons
import { FiCloud } from "react-icons/fi"; // Feather Icons

function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Services
          </h2>
        </div>
        <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4">
            <FiCloud className="h-10 w-10" />
            <h3 className="text-lg font-bold">Cloud Services</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We provide scalable cloud services to meet your business needs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4">
            <FiLock className="h-10 w-10" />
            <h3 className="text-lg font-bold">Security Services</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our security services protect your data and ensure compliance with
              regulations.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4">
            <FiHelpCircle className="h-10 w-10" />
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
export default ServicesSection;