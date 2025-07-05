import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-brand mt-32 text-gray-200">
      {/* Logo */}
      <div className="px-8 pt-16">
        <h1 className="font-poppins text-white font-bold text-4xl">RIVERSIDE</h1>
      </div>

      {/* Link Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 text-sm">
        <div>
          <h4 className="font-semibold mb-2 font-poppins text-white">About</h4>
          <ul className="space-y-1 font-poppin  text-white">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 font-poppins text-white">Reservations</h4>
          <ul className="space-y-1 font-poppins text-white">
            <li>Request an invoice</li>
            <li>Find a Reservation</li>
            <li>Email preferences</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 font-poppins text-white">News</h4>
          <ul className="space-y-1 font-poppins text-white">
            <li>Press Room</li>
            <li>New organization</li>
            <li>Magazine</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center space-x-6 border-t border-gray-500 pt-6 pb-4 ">
        <FaTwitter className="hover:text-gray-400 cursor-pointer fill-menuColor" />
        <FaInstagram className="hover:text-gray-400 cursor-pointer  fill-menuColor" />
        <FaFacebookF className="hover:text-gray-400 cursor-pointer  fill-menuColor" />
        <FaYoutube className="hover:text-gray-400 cursor-pointer  fill-menuColor" />
      </div>

    
      <div className="text-center text-xs text-gray-300 space-x-4 pb-8  text-white">
        <span className="hover:underline cursor-pointer">Legal Notice</span>
        <span className="hover:underline cursor-pointer">Privacy Policy</span>
        <span className="hover:underline cursor-pointer">Cookie Preferences</span>
        <span className="hover:underline cursor-pointer">Accessibility</span>
      </div>
    </div>
  );
}

export default Footer;
