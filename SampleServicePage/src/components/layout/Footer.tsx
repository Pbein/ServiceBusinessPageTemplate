import { Link } from "react-router-dom";
import Button from "../common/Button";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Input from "../common/Input";


function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Sample Services Inc.</h3>
              <p className="text-sm">1234 Street Name, City, State, 56789</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
              <p className="text-sm">Email: info@sampleservices.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <p className="text-sm">
                We offer a wide range of services including plumbing, electrical, and HVAC. Contact us for more information.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Link to="#">
                  <FaFacebookF className="h-6 w-6" />
                </Link>
                <Link to="#">
                  <FaTwitter  className="h-6 w-6" />
                </Link>
                <Link to="#">
                  <FaInstagram  className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
              <form className="flex space-x-2">
                <Input className="flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm">
            <p>© 2024 Sample Services Inc. All rights reserved.</p>
          </div>
        </footer>
      )
}

export default Footer