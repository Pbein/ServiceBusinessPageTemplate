import Button from "../components/common/Button";

function BookingPage() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-4 space-y-6 bg-blue-100 shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">Book a Service</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="name"
                name="name"
                required
                type="text"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="email-address"
                name="email"
                required
                type="email"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="phone-number"
                name="phone"
                required
                type="tel"
              />
            </div>

            {/* Preferred Date Field */}
            {/* Implement your date picker here */}
            <div>
              <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="preferred-date"
                name="date"
                required
                type="date"
              />
            </div>

            {/* Preferred Time Field */}
            {/* Implement your time selection here */}
            <div>
              <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <select
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="preferred-time"
                name="time"
                required
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>

            {/* Additional Notes Field */}
            <div>
              <label htmlFor="additional-notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="additional-notes"
                name="notes"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
