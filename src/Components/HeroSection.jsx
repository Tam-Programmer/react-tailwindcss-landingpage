import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import illustImg from '../assets/illustImg.jpg'
// import it from '../assets/it.jpg'
function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center">
            <span className="text-[#0011ff]">True-Blue</span> Digital Services{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              {" "}
              for everyone
            </span>
          </h1>
          <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
        True-Blue Digital Services is a cutting-edge technology company that
        specializes in delivering innovative digital solutions to enterprises of
        all sizes. With a team of seasoned experts and a commitment to
        excellence, True-Blue empowers its clients to navigate the rapidly
        evolving digital landscape and achieve their business goals.
      </p>
        </div>
        <div className="p-2 rounded-b w-full lg:w-1/2">
          <img src={illustImg} alt="illustImg"/>
        </div>
         
      </div>
      
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Contact Us
        </a>
        <a href="#" className="py-3 px-4 mx-3 border rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex justify-center flex-col items-center mt-10 md:flex md:justify-center md:flex-row md:mt-10 md:mx-auto">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-3/4 md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-3/4 md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support video
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
