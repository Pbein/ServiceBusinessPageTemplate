import { FiHelpCircle } from "react-icons/fi"; // Feather Icons
import { FiCode } from 'react-icons/fi'; // Feather Icons
import { FiLock } from "react-icons/fi"; // Feather Icons
import { FiCloud } from "react-icons/fi"; // Feather Icons
import { FiClipboard } from "react-icons/fi";

// Card component
const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      {children}
    </div>
  );
  
  // CardContent component
const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col items-center justify-center space-y-4">
      {children}
    </div>
  );

function Services() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center" 
    style={{
        backgroundImage: `url(./src/assets/images/SampleBackground2.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
          </div>
          <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4 bg-blue-100 bg-opacity-85 shadow-xl shadow-slate-500">
              <FiCloud className="h-10 w-10" />
              <h3 className="text-lg font-bold">Cloud Services</h3>
              <p className="text-gray-600 font-semibold dark:text-gray-400">
                We provide scalable cloud services to meet your business needs.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4 bg-blue-100 bg-opacity-85 shadow-xl shadow-slate-500">
              <FiLock className="h-10 w-10" />
              <h3 className="text-lg font-bold">Security Services</h3>
              <p className="text-gray-600 font-semibold dark:text-gray-400">
                Our security services protect your data and ensure compliance
                with regulations.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4 bg-blue-100 bg-opacity-85 shadow-xl shadow-slate-500">
              <FiHelpCircle className="h-10 w-10" />
              <h3 className="text-lg font-bold">Support Services</h3>
              <p className="text-gray-600 font-semibold dark:text-gray-400">
                We offer 24/7 support to ensure your business runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Plans & Pricing
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a variety of plans to meet your needs.
                </p>
                <img src="/src/assets/images/ServiceImage1.png" alt="" />
              </div>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardContent>
                  <FiClipboard className="h-12 w-12" />
                  <h3 className="text-lg font-semibold">Service 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of Service 1
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <FiCode className="h-12 w-12" />
                  <h3 className="text-lg font-semibold">Service 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of Service 2
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <FiHelpCircle className="h-12 w-12" />
                  <h3 className="text-lg font-semibold">Service 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of Service 3
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
