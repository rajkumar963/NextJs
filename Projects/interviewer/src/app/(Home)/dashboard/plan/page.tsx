import React from 'react';
import { Check } from 'lucide-react';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "5 AI interviews per month",
        "Basic feedback",
        "Standard questions",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Best for job seekers",
      features: [
        "Unlimited AI interviews",
        "Advanced feedback",
        "Custom scenarios",
        "Performance analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For teams & companies",
      features: [
        "Everything in Pro",
        "Team dashboard",
        "Custom AI personas",
        "API access",
        "Dedicated support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Interviewer AI
          </h1>
          <p className="text-xl text-gray-300">
            Choose your plan and start practicing today
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                plan.popular
                  ? 'border-cyan-400 bg-slate-800 shadow-lg shadow-cyan-400/20'
                  : 'border-slate-700 bg-slate-800 hover:border-cyan-400'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-500'
                    : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 hover:border-cyan-400'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to ace your next interview?
            </h3>
            <p className="text-gray-400 mb-6">
              Start practicing with our AI interviewer today
            </p>
            <button   className="bg-cyan-400 cursor-pointer text-slate-900 font-semibold py-3 px-8 rounded-xl hover:bg-cyan-500 transition-colors">
              Try Free Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;