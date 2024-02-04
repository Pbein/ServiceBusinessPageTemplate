import { FiAward, FiUsers, FiClock } from 'react-icons/fi'; // Example icons

// Reusable card component
const Card = ({ title, icon: Icon, children }) => (
  <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg p-4 bg-blue-100 bg-opacity-85 shadow-xl shadow-slate-500">
    <Icon className="h-10 w-10" />
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-600 font-semibold dark:text-gray-400">
      {children}
    </p>
  </div>
);

function AboutSection() {
  return (
    <>
      {/* Our History Section */}
      <section className="py-12 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold">Our History</h2>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Sample Services began in 2010 with a vision to provide top-notch
            service in our industry. Over the years, we've expanded our services
            and grown into a trusted name in our community.
          </p>
          
          {/* Placeholder for a timeline image or component */}
          <img
            src="./src/assets/images/company-timeline.png"
            alt="Company Timeline"
            className="mt-4"
          />
        </div>
      </section>
      {/* Our Mission Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Our mission is to deliver exceptional service with every project. We
            strive to exceed expectations while fostering a positive community
            impact.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for team member cards */}
            <div className="team-member-card">
              <img
                src="./src/assets/images/sampleWorkerPhoto.png"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold mt-2">Jane Doe</h3>
              <p className="text-gray-500">CEO</p>
            </div>
            {/* Repeat for other team members */}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
