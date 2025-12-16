import { Sparkles, Calendar, Send, BarChart3, Users, Building2, Palette, Target, Zap, Clock, X, Check, Rocket, Heart, Briefcase, Layers } from 'lucide-react';
import { Page } from '../App';

interface ProductPageProps {
  onNavigate: (page: Page) => void;
}

export function ProductPage({ onNavigate }: ProductPageProps) {
  return (
    <div id="product" className="w-full">
      {/* Product Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-40 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/60">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm mb-8">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm text-gray-700">AI-powered social media management</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
            Everything you need to manage social media—
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> without complexity</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Create content with AI, schedule across platforms, and publish automatically. 
            All the essential tools in one beautiful dashboard.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('signin')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Start free trial
            </button>
            <button 
              onClick={() => onNavigate('signin')}
              className="px-8 py-4 bg-transparent text-white rounded-xl hover:bg-white/10 transition-all border-2 border-white/30 hover:border-white/50"
            >
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              Powerful features,
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> simple to use</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Everything you need to create, plan, and publish social content efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="group bg-gradient-to-br from-blue-50/80 to-indigo-50/40 rounded-2xl p-8 border border-blue-100/50 hover:border-blue-200 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">AI Content Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate captions, post ideas, and hashtags instantly. Edit and refine to match your brand voice.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-gradient-to-br from-indigo-50/80 to-purple-50/40 rounded-2xl p-8 border border-indigo-100/50 hover:border-indigo-200 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Content Calendar</h3>
              <p className="text-gray-600 leading-relaxed">
                Visual calendar to plan posts. Drag and drop to reschedule. See your entire content strategy at a glance.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-gradient-to-br from-purple-50/80 to-pink-50/40 rounded-2xl p-8 border border-purple-100/50 hover:border-purple-200 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Layers size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Multi-Platform Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect Instagram, Facebook, Twitter, and LinkedIn. Schedule to all platforms from one place.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="group bg-gradient-to-br from-pink-50/80 to-rose-50/40 rounded-2xl p-8 border border-pink-100/50 hover:border-pink-200 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Send size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Auto-Publishing</h3>
              <p className="text-gray-600 leading-relaxed">
                Posts publish automatically at scheduled times. No manual work. No missed posts. Always on time.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="group bg-gradient-to-br from-emerald-50/80 to-teal-50/40 rounded-2xl p-8 border border-emerald-100/50 hover:border-emerald-200 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Building2 size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Workspace Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize accounts by workspace. Perfect for agencies managing multiple clients or brands.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="group bg-gradient-to-br from-amber-50/80 to-orange-50/40 rounded-2xl p-8 border border-amber-100/50 hover:border-amber-200 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <BarChart3 size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Analytics & Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Track performance across all platforms. See what's working and optimize your content strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              How Postaroo works
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From idea to published post in three simple steps
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                    <Palette size={40} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">Create content</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Use AI to generate captions and ideas, or write your own. Upload images and preview how posts will look.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl">
                    <Calendar size={40} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">Schedule on calendar</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Drag posts onto your calendar. Choose optimal times or use AI suggestions for best engagement.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl">
                    <Rocket size={40} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">Auto-publish</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Posts go live automatically across all platforms. Get notified when they're published.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Without vs With Postaroo */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              The difference Postaroo makes
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how your workflow transforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Postaroo */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-10 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center">
                  <X size={24} className="text-gray-600" />
                </div>
                <h3 className="text-2xl text-gray-900">Without Postaroo</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Spend hours creating content every week</p>
                </div>
                <div className="flex items-start gap-3">
                  <X size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Manually post on each platform separately</p>
                </div>
                <div className="flex items-start gap-3">
                  <X size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Forget to post or miss optimal times</p>
                </div>
                <div className="flex items-start gap-3">
                  <X size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Struggle with writer's block on captions</p>
                </div>
                <div className="flex items-start gap-3">
                  <X size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">No clear view of your content plan</p>
                </div>
                <div className="flex items-start gap-3">
                  <X size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Inconsistent posting schedule</p>
                </div>
              </div>
            </div>

            {/* With Postaroo */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Check size={24} className="text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">With Postaroo</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Create a month of content in one afternoon</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Publish to all platforms from one dashboard</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Auto-publish at perfect times, every time</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">AI writes captions in seconds</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Visual calendar shows your entire strategy</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Stay consistent without the stress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              Built for modern teams
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're a team of one or one hundred
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Small Businesses */}
            <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Small Businesses</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay visible on social without taking time away from running your business.
              </p>
            </div>

            {/* Agencies */}
            <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Agencies</h3>
              <p className="text-gray-600 leading-relaxed">
                Manage multiple clients with workspaces. Deliver consistent results at scale.
              </p>
            </div>

            {/* Creators */}
            <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Creators</h3>
              <p className="text-gray-600 leading-relaxed">
                Focus on creating. Let Postaroo handle scheduling and publishing.
              </p>
            </div>

            {/* Startups */}
            <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Rocket size={24} className="text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Startups</h3>
              <p className="text-gray-600 leading-relaxed">
                Build your audience while shipping product. Simple tools for lean teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl text-white mb-8 leading-tight">
            Start creating better social media in minutes
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join thousands using Postaroo to save time and stay consistent. Free 14-day trial, no credit card required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
              Start free trial
            </button>
            <button className="px-8 py-4 bg-transparent text-white rounded-xl hover:bg-white/10 transition-all border-2 border-white/30 hover:border-white/50">
              Talk to sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
