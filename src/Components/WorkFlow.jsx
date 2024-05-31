
import {CheckCircle2} from 'lucide-react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'
function WorkFlow() {
  return (
    <div id="workflow" className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>Accelerate your 
      {"  "}<span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800'>business workflow</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
            <img src={codeImg} alt="code image" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((checkList,index) =>(
                <div key={index} className="flex mb-12">
                    <div className="mx-6 text-green-400 bg-neutral-900 h-10 w-10 justify-center items-center rounded-full">
                        <CheckCircle2 />
                    </div>
                    <div>
                        <h5 className="mb-2 mt-1 text-xl">{checkList.title}</h5>
                        <p className="text-md text-neutral-500">{checkList.description}</p>
                    </div>
                </div>

            ))}
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
