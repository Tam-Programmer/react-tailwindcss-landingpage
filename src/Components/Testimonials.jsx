
import {testimonials} from '../constants'
function Testimonials() {
  return (
    <div id="testimonials" className='mt-10 tracking-wide'>
      <h2 className="text-3xl sm:5xl lg:6xl my-10 text-center lg:my-20">
        What People are saying about us.
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                    <p>{testimonial.text}</p>
                    <div className="mt-8 flex items-start">
                       <img src={testimonial.image} alt={testimonial.user} className="w-12 h-12 mr-6 rounded-full border border-neutral-400" />
                       <div>
                        <h6>{testimonial.user}</h6>
                        <span className='text-sm font-normal italic text-neutral-500'>{testimonial.company}</span>
                       </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
