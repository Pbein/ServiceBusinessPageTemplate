import { FiUsers } from "react-icons/fi"; // Example icons

// Reusable card component
const Card = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4 bg-blue-100 bg-opacity-85 shadow-xl shadow-slate-500">
    <Icon className="h-10 w-10" />
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-600 font-semibold dark:text-gray-400">{children}</p>
  </div>
);

const About = () => {
  return (
    <>
      <div className="pt-16">
        {" "}
        {/* This adds 100 pixels of padding to the top */}
      </div>
      {/* Introduction Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 bg-opacity-50"
        style={{
          backgroundImage: `url(src/assets/images/SampleBackground1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Sample Services
          </h2>
          <p className="max-w-[600px] mx-auto font-bold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Dedicated to excellence in service since 2010.
          </p>
        </div>
      </section>

      {/* Company Values and Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Company Values */}
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                  Our Values
                </h3>
                <p className="text-orange-500 font-bold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
                  Integrity, Innovation, and Customer Focus.
                </p>
              </div>
              {/* Short Paragraph About the Company */}
              <p className="mt-4 text-gray-700 md:text-lg lg:text-base xl:text-lg dark:text-gray-300 mx-auto">
                At Sample Services, we are committed to upholding our core
                values in every aspect of our business. Established in 2010, our
                mission has always been to provide innovative and reliable
                solutions tailored to meet the unique needs of each client. With
                a team dedicated to integrity and excellence, we continually
                strive to exceed expectations, ensuring our customers are at the
                heart of everything we do.
              </p>
            </div>

            {/* Timeline */}
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our Journey
              </h3>
              <img
                src="/src/assets/images/TimelineImage1.png"
                alt="Company Timeline"
                className="mt-4 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 bg-opacity-50"
        style={{
          backgroundImage: `url(src/assets/images/SampleBackground3.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="max-w-[600px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A group of passionate individuals behind our success.
            </p>
          </div>
          {/* Team Cards */}
          <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {/* Example Card */}
            <Card title="John Doe" icon={FiUsers}>
              CEO & Founder
            </Card>
            <Card title="Jane Doe" icon={FiUsers}>
              Chairman
            </Card>
            <Card title="Jeff Doe" icon={FiUsers}>
              Technical Lead
            </Card>
            {/* Repeat for other team members */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
