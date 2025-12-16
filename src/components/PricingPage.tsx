import { Check, Sparkles, Users, Building2, X, Facebook, Instagram, Info } from 'lucide-react';
import { Page } from '../App';

interface PricingPageProps {
  onNavigate: (page: Page) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: 'Starter',
      badge: 'Free for now',
      price: null,
      priceDisplay: 'Free during early access',
      description: 'For solo founders and small businesses',
      features: [
        'Up to 2 social accounts',
        '30 scheduled posts/month',
        '100 AI credits/month',
        '1 workspace',
        '1 user',
      ],
      gradient: 'from-blue-50/80 to-indigo-50/40',
      border: 'border-blue-300',
      icon: Sparkles,
      cta: 'Get started for free',
      highlighted: true,
      available: true,
    },
    {
      name: 'Pro',
      badge: 'Coming soon',
      price: null,
      priceDisplay: 'Pricing coming soon',
      description: 'Advanced tools for growing teams',
      features: [
        'Up to 10 social accounts',
        '300 scheduled posts/month',
        '500 AI credits/month',
        '3 workspaces',
        '3 team members',
      ],
      gradient: 'from-indigo-50/80 to-purple-50/40',
      border: 'border-indigo-200',
      icon: Users,
      cta: 'Join waitlist',
      available: false,
    },
    {
      name: 'Business',
      badge: 'Coming soon',
      price: null,
      priceDisplay: 'Pricing coming soon',
      description: 'Built for agencies and larger teams',
      features: [
        'Up to 50 social accounts',
        '1,000 scheduled posts/month',
        '2,000 AI credits/month',
        '10 workspaces',
        '15 team members',
      ],
      gradient: 'from-purple-50/80 to-pink-50/40',
      border: 'border-purple-200',
      icon: Building2,
      cta: 'Contact us',
      available: false,
    },
  ];

  const comparisonData = {
    'Platforms': [
      { feature: 'Facebook Pages', starter: true, pro: true, business: true },
      { feature: 'Instagram Business Accounts', starter: true, pro: true, business: true },
    ],
    'Workspaces & Team': [
      { feature: 'Workspaces', starter: '1', pro: '3', business: '10' },
      { feature: 'Team members', starter: '1', pro: '3', business: '15' },
      { feature: 'Role-based access', starter: false, pro: true, business: true },
      { feature: 'Collaboration features', starter: false, pro: true, business: true },
    ],
    'Publishing & Scheduling': [
      { feature: 'Scheduled posts per month', starter: '30', pro: '300', business: '1,000' },
      { feature: 'Content calendar', starter: true, pro: true, business: true },
      { feature: 'Multi-platform scheduling', starter: true, pro: true, business: true },
      { feature: 'Auto-publishing', starter: true, pro: true, business: true },
      { feature: 'Bulk upload', starter: false, pro: true, business: true },
      { feature: 'Post templates', starter: false, pro: true, business: true },
      { feature: 'Queue scheduling', starter: false, pro: true, business: true },
    ],
    'AI & Credits': [
      { feature: 'Monthly AI credits', starter: '100', pro: '500', business: '2,000' },
      { feature: 'Caption generation', starter: true, pro: true, business: true },
      { feature: 'Hashtag suggestions', starter: true, pro: true, business: true },
      { feature: 'Content ideas', starter: true, pro: true, business: true },
      { feature: 'AI content planning', starter: false, pro: true, business: true },
      { feature: 'Brand voice training', starter: false, pro: false, business: true },
    ],
    'Media & Assets': [
      { feature: 'Media library storage', starter: '1 GB', pro: '10 GB', business: '50 GB' },
      { feature: 'Image editor', starter: true, pro: true, business: true },
      { feature: 'Stock photo integration', starter: false, pro: true, business: true },
      { feature: 'Video uploads', starter: false, pro: true, business: true },
    ],
    'Analytics': [
      { feature: 'Basic analytics', starter: true, pro: true, business: true },
      { feature: 'Advanced analytics', starter: false, pro: true, business: true },
      { feature: 'Post performance insights', starter: false, pro: true, business: true },
      { feature: 'Custom reports', starter: false, pro: false, business: true },
      { feature: 'Export data', starter: false, pro: true, business: true },
    ],
    'Support': [
      { feature: 'Email support', starter: true, pro: true, business: true },
      { feature: 'Priority support', starter: false, pro: true, business: true },
      { feature: 'Dedicated onboarding', starter: false, pro: false, business: true },
      { feature: 'Account manager', starter: false, pro: false, business: true },
    ],
  };

  return (
    <div id="pricing" className="w-full">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/60">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <span className="text-sm text-blue-700">Early access · Free for a limited time</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Simple, transparent plans
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Postaroo is currently free while we're in early access.
          </p>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-3 leading-tight">
              Supported platforms
            </h2>
            <p className="text-gray-600">
              Currently available for Facebook Pages and Instagram Business accounts
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Facebook size={24} className="text-white" />
              </div>
              <span className="text-lg text-gray-900">Facebook</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg">
                <Instagram size={24} className="text-white" />
              </div>
              <span className="text-lg text-gray-900">Instagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl border-2 p-8 shadow-lg hover:shadow-xl transition-all ${
                    plan.highlighted 
                      ? 'border-blue-400 ring-4 ring-blue-100 transform scale-105' 
                      : plan.border
                  }`}
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs ${
                      plan.highlighted 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}>
                      {plan.badge}
                    </div>
                  </div>
                  
                  {/* Icon & Name */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} mb-4 border ${plan.border}`}>
                      <Icon size={24} className="text-gray-700" />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-3xl text-gray-900 mb-1">{plan.priceDisplay}</div>
                  </div>
                  
                  {/* CTA */}
                  <button 
                    className={`w-full py-3 px-6 rounded-xl transition-all mb-8 ${
                      plan.available
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg hover:scale-105'
                        : 'bg-gray-100 text-gray-600 border border-gray-200 cursor-not-allowed'
                    }`}
                    disabled={!plan.available}
                  >
                    {plan.cta}
                  </button>
                  
                  {/* Features */}
                  <div>
                    <div className="text-sm text-gray-600 mb-4">Features:</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 leading-tight">
              Compare all features
            </h2>
            <p className="text-lg text-gray-600">
              See what's included in each plan
            </p>
          </div>
          
          {/* AI Credits Helper */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-5 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm text-gray-900 mb-1">About AI credits</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI credits are used for actions like generating captions, hashtags, and post ideas. Credits reset monthly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-slate-50">
                    <th className="text-left py-4 px-6 text-sm text-gray-900 sticky left-0 bg-slate-50 z-10">
                      Feature
                    </th>
                    <th className="text-center py-4 px-6 text-sm text-gray-900">
                      <div className="flex flex-col items-center gap-1">
                        <span>Starter</span>
                        <span className="text-xs text-blue-600 font-normal">Free for now</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 text-sm text-gray-900">
                      <div className="flex flex-col items-center gap-1">
                        <span>Pro</span>
                        <span className="text-xs text-gray-500 font-normal">Coming soon</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 text-sm text-gray-900">
                      <div className="flex flex-col items-center gap-1">
                        <span>Business</span>
                        <span className="text-xs text-gray-500 font-normal">Coming soon</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  {Object.entries(comparisonData).map(([category, features], categoryIdx) => (
                    <>
                      <tr key={`category-${categoryIdx}`} className="bg-slate-50">
                        <td colSpan={4} className="py-3 px-6 text-xs text-gray-700 uppercase tracking-wide sticky left-0 bg-slate-50 z-10">
                          {category}
                        </td>
                      </tr>
                      {features.map((item, featureIdx) => (
                        <tr key={`${categoryIdx}-${featureIdx}`} className="border-b border-gray-100 hover:bg-slate-50/50">
                          <td className="py-4 px-6 text-sm text-gray-700 sticky left-0 bg-white hover:bg-slate-50/50 z-10">
                            {item.feature}
                          </td>
                          <td className="py-4 px-6 text-center text-sm">
                            {typeof item.starter === 'boolean' ? (
                              item.starter ? (
                                <Check size={20} className="text-green-600 inline-block" />
                              ) : (
                                <X size={20} className="text-gray-300 inline-block" />
                              )
                            ) : (
                              <span className="text-gray-900">{item.starter}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center text-sm">
                            {typeof item.pro === 'boolean' ? (
                              item.pro ? (
                                <Check size={20} className="text-green-600 inline-block" />
                              ) : (
                                <X size={20} className="text-gray-300 inline-block" />
                              )
                            ) : (
                              <span className="text-gray-900">{item.pro}</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center text-sm">
                            {typeof item.business === 'boolean' ? (
                              item.business ? (
                                <Check size={20} className="text-green-600 inline-block" />
                              ) : (
                                <X size={20} className="text-gray-300 inline-block" />
                              )
                            ) : (
                              <span className="text-gray-900">{item.business}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Flexibility Note */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                <Info size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Early access pricing</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We're refining our plans based on early user feedback. Limits and pricing may change before 
                  public launch. As an early access user, you'll be notified of any changes in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 leading-tight">
              Frequently asked questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'Is Postaroo really free right now?',
                answer: 'Yes! Postaroo is completely free during early access. You can use all Starter plan features at no cost while we refine the product.',
              },
              {
                question: 'When will paid plans launch?',
                answer: 'We\'re planning to introduce paid plans (Pro and Business) in the coming months. Early access users will be notified well in advance and will receive special benefits.',
              },
              {
                question: 'Will my account be automatically upgraded to a paid plan?',
                answer: 'No. When paid plans launch, you\'ll have the option to upgrade if you need more features. Your account will not be charged without your explicit consent.',
              },
              {
                question: 'What happens to my data if I don\'t upgrade?',
                answer: 'You\'ll continue to have access to the free Starter plan with the features available at that time. Your data is always yours and will remain accessible.',
              },
              {
                question: 'Can I request features for Pro or Business plans?',
                answer: 'Absolutely! We\'re actively gathering feedback from early users. Your input helps shape the final feature set for all plans.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl text-white mb-6 leading-tight">
            Start using Postaroo today
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Free for early access users. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('signin')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get started for free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
