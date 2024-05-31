// import React, { useState } from 'react';

// const PricingPlan = ({ plan, price, features }) => {
//   return (
//     <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
//       <div className="px-6 py-8">
//         <h3 className="text-2xl font-bold mb-2">{plan}</h3>
//         <p className="text-4xl font-bold mb-4">${price}<span className="text-gray-400 text-2xl">/month</span></p>
//         <ul className="space-y-2">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-center space-x-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="bg-gray-700 px-6 py-4 text-center">
//         <button className="bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// const PricingPlans = () => {
//   const [isMonthly, setIsMonthly] = useState(true);

//   const pricingPlans = [
//     {
//       plan: 'Freelancer',
//       monthlyPrice: 15,
//       annualPrice: 12,
//       features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', 
//       '24/7 customer support response time'],
//     },
//     {
//       plan: 'Startup',
//       monthlyPrice: 30,
//       annualPrice: 25,
//       features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', 
//       '24/7 customer support response time', 'Marketing automations'],
//     },
//     {
//       plan: 'Enterprise',
//       monthlyPrice: 48,
//       annualPrice: 40,
//       features: ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', 
//       '1-hour dedicated support response time', 'Marketing automations', 'Custom reporting tools'],
//     },
//   ];

//   return (
//     <div className="bg-gray-900 py-20">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-white mb-8">Pricing plans for teams of all sizes</h2>
//         <div className="flex justify-center mb-8">
//           <button
//             className={`px-4 py-2 rounded-l-lg ${isMonthly ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}
//             onClick={() => setIsMonthly(true)}
//           >
//             Monthly
//           </button>
//           <button
//             className={`px-4 py-2 rounded-r-lg ${!isMonthly ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}
//             onClick={() => setIsMonthly(false)}
//           >
//             Annually
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {pricingPlans.map((plan, index) => (
//             <PricingPlan
//               key={index}
//               plan={plan.plan}
//               price={isMonthly ? plan.monthlyPrice : plan.annualPrice}
//               features={plan.features}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;