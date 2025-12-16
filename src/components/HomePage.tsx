import { ArrowRight, Check, Clock, Users, Zap, TrendingUp, BarChart3, Calendar, Sparkles, Target, Layers, Send, PenTool, Heart } from 'lucide-react';
import { Page } from '../App';
import { useState, useEffect } from 'react';
import modernPlanner from 'figma:asset/04bbedce7316714686d2ccb1990d0ec9f4ac3ae0.png';
import professionalPlanner from 'figma:asset/c5c6ead4f1d59c41075d63373c9f3b4aee6af6f5.png';
import compactPlanner from 'figma:asset/d139ccdc4c67749698765322e8ec00e605a0bc0e.png';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeView, setActiveView] = useState<'modern' | 'professional' | 'compact'>('modern');

  const screenshots = {
    modern: { src: modernPlanner, label: 'Modern view', description: 'Visual calendar with post previews' },
    professional: { src: professionalPlanner, label: 'Professional view', description: 'Clean calendar with status indicators' },
    compact: { src: compactPlanner, label: 'Compact view', description: 'List view for quick scanning' }
  };

  // Auto-rotate views every 4 seconds
  useEffect(() => {
    const views: ('modern' | 'professional' | 'compact')[] = ['modern', 'professional', 'compact'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % views.length;
      setActiveView(views[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="w-full">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
                Social media management made simple
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-600 mb-12 leading-relaxed">
                Create and schedule posts with AI. Stay consistent without the stress.
              </p>
              <button 
                onClick={() => onNavigate('signin')}
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                Get started
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Right side - Dashboard Screenshots Showcase */}
            <div className="space-y-6">
              {/* Main screenshot - Active View */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl border-3 border-white bg-white transition-all duration-500">
                  <img
                    src={screenshots[activeView].src}
                    alt={screenshots[activeView].label}
                    loading="eager"
                    width="2948"
                    height="1690"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-900">{screenshots[activeView].label}</p>
                  <p className="text-xs text-gray-600">{screenshots[activeView].description}</p>
                </div>
              </div>

              {/* View selector buttons */}
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setActiveView('modern')}
                  className={`group relative rounded-lg overflow-hidden border-2 transition-all ${
                    activeView === 'modern' 
                      ? 'border-blue-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <img
                    src={modernPlanner}
                    alt="Modern view thumbnail"
                    loading="lazy"
                    width="2948"
                    height="1690"
                    className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 py-1 px-2 text-center transition-colors ${
                    activeView === 'modern'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/90 text-gray-700 group-hover:bg-gray-100/90'
                  }`}>
                    <p className="text-[10px]">Modern</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveView('professional')}
                  className={`group relative rounded-lg overflow-hidden border-2 transition-all ${
                    activeView === 'professional' 
                      ? 'border-blue-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <img
                    src={professionalPlanner}
                    alt="Professional view thumbnail"
                    loading="lazy"
                    width="2948"
                    height="1690"
                    className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 py-1 px-2 text-center transition-colors ${
                    activeView === 'professional'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/90 text-gray-700 group-hover:bg-gray-100/90'
                  }`}>
                    <p className="text-[10px]">Professional</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveView('compact')}
                  className={`group relative rounded-lg overflow-hidden border-2 transition-all ${
                    activeView === 'compact' 
                      ? 'border-blue-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <img
                    src={compactPlanner}
                    alt="Compact view thumbnail"
                    loading="lazy"
                    width="2948"
                    height="1690"
                    className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 py-1 px-2 text-center transition-colors ${
                    activeView === 'compact'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/90 text-gray-700 group-hover:bg-gray-100/90'
                  }`}>
                    <p className="text-[10px]">Compact</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Postaroo */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-8 text-center leading-tight">
            What is Postaroo
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 text-center leading-relaxed mb-6">
            Postaroo is a social media planning platform that helps you create content, plan it on a calendar, 
            and publish it automatically to Instagram, Facebook, Twitter, and LinkedIn.
          </p>
          <p className="text-xl sm:text-2xl text-gray-600 text-center leading-relaxed">
            It uses AI to help with writing captions and generating post ideas, so you can spend less time 
            on social media and more time running your business.
          </p>
        </div>
      </section>

      {/* Why Postaroo Exists */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 text-center leading-tight">
            Why Postaroo exists
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-2xl mx-auto leading-relaxed">
            We built Postaroo to solve real problems that teams face every day
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock size={28} className="text-white" />
                </div>
                <h3 className="text-2xl text-gray-900 mt-2">Social media takes too much time</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed ml-20">
                Creating posts, writing captions, designing graphics, and manually posting across 
                multiple platforms can consume hours every week. For small teams and founders, 
                that's time you don't have.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-2xl text-gray-900 mt-2">Staying consistent is hard</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed ml-20">
                Posting regularly requires planning ahead, but when you're busy, social media is 
                the first thing to slip. Inconsistent posting means your audience forgets about you.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Layers size={28} className="text-white" />
                </div>
                <h3 className="text-2xl text-gray-900 mt-2">Most tools are too complicated</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed ml-20">
                Enterprise social media platforms have too many features, confusing interfaces, 
                and high price tags. You need something simple that just works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 text-center leading-tight">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-2xl mx-auto leading-relaxed">
            A complete toolkit for managing social media, designed for simplicity and speed
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50/80 to-transparent rounded-2xl p-10 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6 shadow-lg">
                <Sparkles size={28} className="text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">AI content generation</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Generate captions, post ideas, and content suggestions instantly. Edit and refine 
                until it matches your brand voice perfectly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50/80 to-transparent rounded-2xl p-10 border-2 border-indigo-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                <Calendar size={28} className="text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Visual content calendar</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Plan your content on a beautiful calendar view. Drag and drop to reschedule, 
                see your posting frequency at a glance, and never miss a beat.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50/80 to-transparent rounded-2xl p-10 border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                <Send size={28} className="text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Auto-publishing</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Schedule posts to go live automatically at the best times for your audience. 
                No need to remember to post manually or set phone reminders.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50/80 to-transparent rounded-2xl p-10 border-2 border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 shadow-lg">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Multi-platform support</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Manage Instagram, Facebook, Twitter, and LinkedIn from one dashboard. 
                Create once, publish everywhere, and see all your accounts in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 text-center leading-tight">
            How it works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 leading-relaxed">
            Three simple steps to better social media management
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <PenTool size={36} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md">
                  1
                </div>
              </div>
              <h3 className="text-3xl text-gray-900 mb-4">Create</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Write your own posts or use AI to generate captions and ideas. Upload images, 
                add emojis, and preview exactly how your post will look on each platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Calendar size={36} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-md">
                  2
                </div>
              </div>
              <h3 className="text-3xl text-gray-900 mb-4">Schedule</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Drag your post onto the calendar and choose when it goes live. Use quick presets 
                like "Tomorrow at 9am" or pick a custom date and time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <TrendingUp size={36} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-md">
                  3
                </div>
              </div>
              <h3 className="text-3xl text-gray-900 mb-4">Publish</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Posts automatically publish to your connected social accounts at the scheduled time. 
                You'll get a notification when it's live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 text-center leading-tight">
            Who uses Postaroo
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-2xl mx-auto leading-relaxed">
            Built for teams and individuals who need to stay active on social media without the complexity
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-10">
                <h3 className="text-2xl text-gray-900 mb-4">Small businesses</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Cafes, local shops, service providers, and small brands that need to stay visible 
                  on social media but don't have time for daily posting.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                  <p className="text-base text-gray-700 italic leading-relaxed">
                    "I run a bakery. Postaroo helps me post daily without taking time away from customers."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-10">
                <h3 className="text-2xl text-gray-900 mb-4">Solo founders and creators</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Product makers, solopreneurs, and content creators building an audience while 
                  shipping their product or creating content.
                </p>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
                  <p className="text-base text-gray-700 italic leading-relaxed">
                    "I can plan a month of content in one afternoon and focus the rest of my time on building."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-10">
                <h3 className="text-2xl text-gray-900 mb-4">Marketing teams</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Small marketing teams managing multiple brands or accounts who need a simple, 
                  collaborative workflow without enterprise complexity.
                </p>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
                  <p className="text-base text-gray-700 italic leading-relaxed">
                    "We manage 5 clients. Postaroo keeps everything organized in one clean dashboard."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-10">
                <h3 className="text-2xl text-gray-900 mb-4">Freelancers and agencies</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Social media managers and agencies who need to deliver consistent results for 
                  clients without spending hours on manual posting.
                </p>
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-100">
                  <p className="text-base text-gray-700 italic leading-relaxed">
                    "I schedule all my clients' content at the start of the week. Everything runs on autopilot."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 text-center leading-tight">
            Why choose Postaroo
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 leading-relaxed">
            Real benefits that make a difference in your daily workflow
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-3">Save hours every week</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Batch-create content in one sitting instead of scrambling for posts every day. 
                  Most users report saving 5+ hours per week.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Target size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-3">Stay consistent</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Never miss a posting day. Your calendar keeps you organized, and auto-publishing 
                  ensures posts go live even when you're busy or offline.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Heart size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-3">Reduce stress and overwhelm</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stop feeling guilty about neglecting social media. With a clear plan and automation, 
                  you can confidently focus on other parts of your business.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-3">One simple workflow</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  No jumping between tools or browser tabs. Everything you need is in one dashboard: 
                  content creation, scheduling, calendar view, and account management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-8 text-center leading-tight">
            Our approach
          </h2>
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-xl sm:text-2xl text-center">
              We built Postaroo to solve a real problem: social media management takes too long 
              and most tools are too complicated.
            </p>
            <p className="text-xl sm:text-2xl text-center">
              Instead of adding more features, we focus on doing the essentials really well. 
              AI helps you create content faster. The calendar keeps you organized. Auto-publishing 
              removes manual work. That's it.
            </p>
            <p className="text-xl sm:text-2xl text-center">
              We believe social media tools should be calm, not chaotic. They should save you time, 
              not demand more of it. Postaroo is built with that philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-8 leading-tight">
            Try Postaroo free for 14 days
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
            No credit card required. Cancel anytime. See if it works for you.
          </p>
          <button 
            onClick={() => onNavigate('signin')}
            className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            Get started
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
