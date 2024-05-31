import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
function Pricing() {
  return (
    <div id="pricing" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center mb-4">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div
              className={`p-10 border rounded-xl ${
                option.title === "Pro"
                  ? "border-orange-800 bg-slate-900"
                  : "border-neutral-700"
              }`}
            >
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-400 text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-center tracking-tight justify-center w-full h-12 mt-20 text-xl rounded hover:bg-orange-900 border border-orange-900 transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
