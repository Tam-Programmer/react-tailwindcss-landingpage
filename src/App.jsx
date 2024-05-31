// import Feature from "./Components/Feature"
import Features from "./Components/Features"
// import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import NavBar from "./Components/NavBar"
import NewFooter from "./Components/NewFooter"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import WorkFlow from "./Components/WorkFlow"
// import PricingPlan from "./Components/PricingPlan"
function App() {


  return (
    <>
      <NavBar />
      <div className="max-w-7xl ml-auto pt-20 px-6">
          <HeroSection /> 
      </div>
      <Features />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      {/* <Footer /> */}
      <NewFooter />
      {/* <PricingPlan /> */}
      {/* <div className="max-w-7xl ml-auto pt-20 px-6">
          <Feature /> 
      </div> */}
    </>
  )
}

export default App
