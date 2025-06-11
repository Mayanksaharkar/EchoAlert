import React from "react";

const pricingPlans = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Up to 2 Social Accounts",
      "Basic Keyword Filters",
      "Community Support",
    ],
  },
  {
    title: "Pro",
    price: "$9.99/mo",
    features: [
      "Up to 10 Social Accounts",
      "Advanced Filtering & Role Mentions",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: [
      "Unlimited Accounts",
      "Custom Dashboard Access",
      "Dedicated Support & SLA",
    ],
  },
];
function Pricing() {
  return (
    <div id="pricing" className="flex flex-col justify-center items-center min-h-screen  text-white">
      <h2 className="text-4xl font-bold text-center mb-4">💰 Pricing Plans</h2>
      <p className="text-center text-lg text-gray-400 mb-12">
        Choose the plan that fits your community’s needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.title}</h3>
              <p className="text-3xl font-extrabold text-indigo-400 mb-4">{plan.price}</p>
            </div>
            <ul className="text-gray-300 space-y-2">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
