import { Heart, Target, Users, Zap, Mail, Shield } from 'lucide-react';
import { Page } from '../App';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: 'Simplicity over features',
      description: 'We build only what matters. No bloat, no clutter.',
    },
    {
      icon: Shield,
      title: 'Clear limits, no dark patterns',
      description: 'Honest pricing. No tricks. No surprise charges.',
    },
    {
      icon: Zap,
      title: 'Tools that respect your time',
      description: 'Designed to save hours, not create more work.',
    },
    {
      icon: Users,
      title: 'Built for real teams',
      description: 'Not growth hacks. Just solid, dependable software.',
    },
  ];

  const philosophy = [
    {
      title: 'Workspace-first architecture',
      description: 'Organize by client or brand. Keep work separate and clear.',
    },
    {
      title: 'Predictable pricing and limits',
      description: 'No surprises. You always know what you\'re paying for.',
    },
    {
      title: 'No accidental global actions',
      description: 'Safe defaults. Hard to make mistakes that affect everything.',
    },
    {
      title: 'Scales as your team grows',
      description: 'Start small. Add accounts and members when you need to.',
    },
  ];

  const audience = [
    {
      icon: Mail,
      title: 'Solo founders',
      description: 'Build your audience while shipping product',
    },
    {
      icon: Target,
      title: 'Small businesses',
      description: 'Stay visible without the daily stress',
    },
    {
      icon: Users,
      title: 'Agencies',
      description: 'Manage multiple clients from one place',
    },
    {
      icon: Zap,
      title: 'Growing teams',
      description: 'Simple tools that work at scale',
    },
  ];

  return (
    <div id="about" className="w-full">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/60">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
            Built to make social media
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> simpler</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Postaroo helps teams and businesses plan, create, and publish content without the usual complexity.
          </p>
        </div>
      </section>

      {/* Why We Built Postaroo */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-12 text-center leading-tight">
            Why we built Postaroo
          </h2>
          
          <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>
              Social media management takes too much time. Whether you're running a business, managing clients, 
              or building an audience, staying consistent across platforms is exhausting.
            </p>
            <p>
              Existing tools are either too complex, too expensive, or cluttered with features you'll never use. 
              We kept switching between apps and still spending hours every week on something that should be simple.
            </p>
            <p>
              Postaroo was built to focus on what actually matters: creating good content, staying consistent, 
              and publishing on time. No bloat. No confusion. Just the essentials done well.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 text-center leading-tight">
            What we believe
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            The principles that guide how we build Postaroo
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-blue-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 text-center leading-tight">
            Designed with intention
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Every design decision is made to reduce complexity and increase confidence
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 text-center leading-tight">
            Who it's for
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Built for anyone who needs to stay consistent on social media
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg"></div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg"></div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg"></div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 leading-tight">
            Built by a small team
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We're a small team focused on shipping quality software. No big corporate structure. 
              No buzzwords. Just people who care about building something useful.
            </p>
            <p>
              We iterate based on real feedback, fix bugs quickly, and think long-term. 
              Postaroo isn't a growth hack or a side project—it's software we're building to last.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 leading-tight">
            Questions or feedback?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We read every message. If you have ideas, issues, or just want to say hi, reach out.
          </p>
          <a 
            href="mailto:info@postaroo.io" 
            className="inline-block text-xl text-blue-600 hover:text-blue-700 transition-colors"
          >
            info@postaroo.io
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl text-white mb-6 leading-tight">
            Ready to simplify your social media?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Start your free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('signin')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get started
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="px-8 py-4 bg-transparent text-white rounded-xl hover:bg-white/10 transition-all border-2 border-white/30 hover:border-white/50"
            >
              View pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
