import { features } from "../constants/index";

function Features() {
  return (
    <div id="features" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-xl rounded-full font-medium h-6 text-orange-500 px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily Manage{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 underline underline-offset-4 decoration-2 decoration-blue-500 underline-animate">
            Your Products
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] bg-neutral-900 rounded-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="flex justify-center items-center h-12 w-12 p-2 bg-orange-700 text-neutral-900 rounded-full">
                {feature.icon}
              </div>
              <h5 className="ml-4 text-xl font-medium">{feature.text}</h5>
            </div>
            <p className="text-neutral-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
