import { Link } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-gray-800 dark:bg-gray-900 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              {/* Replace '#' with your actual brand link or just keep the text if no link */}
              <Link
                to="/"
                className="text-white dark:text-white text-2xl md:text-3xl hover:text-orange-400 dark:hover:text-gray-300 font-semibold outline-dashed"
              >
                Sample Services Inc.
              </Link>
            </div>
            {/* Implement the Button for the mobile menu here */}
            <div className="flex md:hidden">
              <Button size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6  font-bold">
              <Link
                to="/"
                className="my-1 text-sm text-white dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="my-1 text-sm text-white dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="my-1 text-sm text-white dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="my-1 text-sm text-white dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Contact
              </Link>
            </div>
            <div className="flex justify-center md:block">
              <Link
                to="/booking"
                className="relative text-white dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400"
              >
                <Button>Book Now</Button>   
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Navbar;
