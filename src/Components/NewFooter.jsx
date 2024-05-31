import React from "react";
import tbds from '../assets/tbds.png'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const NewFooter = () => {
  const communityLinks = [
    { href: "#", text: "Solutions" },
    { href: "#", text: "Marketing" },
    { href: "#", text: "Analytics" },
    { href: "#", text: "Commerce" },
    { href: "#", text: "Insights" },
  ];

  const supportLinks = [
    { href: "#", text: "Pricing" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Guides" },
    { href: "#", text: "API Status" },
  ];

  const companyLinks = [
    { href: "#", text: "About" },
    { href: "#", text: "Blog" },
    { href: "#", text: "Jobs" },
    { href: "#", text: "Press" },
    { href: "#", text: "Partners" },
  ];

  const legalLinks = [
    { href: "#", text: "Claim" },
    { href: "#", text: "Privacy" },
    { href: "#", text: "Terms" },
  ];

  const socialLinks = [
    { href: "#", icon: <FaFacebook /> },
    { href: "#", icon: <FaInstagram /> },
    { href: "#", icon: <FaTwitter /> },
    { href: "#", icon: <FaGithub /> },
    { href: "#", icon: <FaYoutube /> },
  ];
    //currentYear variable that retrieves the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* social links */}
        <div>
          <div className="flex mb-4">
             <img className='h-12 w-12' src={tbds} alt="logo" />
            <h3 className="text-lg font-medium mt-3">True-Blue</h3>
          </div>
  
          <p className="text-gray-500">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white mt-4"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Community Links */}
        <div>
          <h3 className="font-medium mb-4 text-2xl">Solutions</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index} className="flex items-start relative group ">
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-orange-600 relative overflow-hidden"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-medium mb-4 text-2xl">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index} className="flex items-start relative group">
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-orange-600 relative overflow-hidden"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-medium mb-4 text-2xl">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index} className="flex items-start relative group">
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-orange-600 relative overflow-hidden"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-medium mb-4 text-2xl">Legal</h3>
          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <li key={index} className="flex items-start relative group">
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-orange-600 relative overflow-hidden"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <p className="text-gray-200">
          &copy; {currentYear} True-Blue Digital Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default NewFooter;
