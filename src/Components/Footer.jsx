import {
  resourcesLinks,
  communityLinks,
  platformLinks,
} from "../constants/index";
function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mx-10">
          <h3 className="mb-3 text-md font-semibold text-2xl">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index} className="flex items-start  relative group ">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-orange-600 relative overflow-hidden"
                >
                  {link.text}
                  <span className="inline-block py-2 transition-all duration-300 group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:w-0 after:transition-all after:duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-10">
          <h3 className="mb-3 text-md font-semibold text-2xl">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index} className="flex items-start relative group ">
                <a
                  href={link.href}
                  className="text-neutral-300  hover:text-orange-600 relative overflow-hidden"
                >
                  {link.text}
                  <span className="inline-block py-2 transition-all duration-300 group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:w-0 after:transition-all after:duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-10">
          <h3 className="mb-3 text-md font-semibold text-2xl">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index} className="flex items-start  relative group ">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-orange-600 relative overflow-hidden"
                >
                  {link.text}
                  <span className="inline-block py-2 transition-all duration-300 group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:w-0 after:transition-all after:duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;


