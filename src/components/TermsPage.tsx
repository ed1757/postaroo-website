import { FileText, Shield, Users, CreditCard, AlertCircle, Mail } from 'lucide-react';

export function TermsPage() {
  return (
    <div id="terms" className="w-full">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/60">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-5 shadow-lg">
            <FileText size={24} className="text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4 leading-tight">
            Terms of Service
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Last updated: December 14, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-[800px] mx-auto">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Agreement to Terms</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                By accessing or using Postaroo ("Service," "we," "our," or "us"), you agree to be bound by 
                these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not 
                access the Service.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access or use the Service. Please 
                read them carefully before using Postaroo.
              </p>
            </div>
          </div>

          {/* Description of Service */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Description of Service</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Postaroo is a social media management platform that provides AI-powered tools for creating, 
                scheduling, and publishing content to Facebook Pages and Instagram Business accounts.
              </p>
              <p>
                The Service includes features such as content calendars, AI content generation, media libraries, 
                team collaboration, and analytics. We reserve the right to modify, add, or remove features at 
                any time.
              </p>
            </div>
          </div>

          {/* Account Registration */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border-l-4 border-blue-500 rounded-r-2xl py-8 px-6 sm:px-8">
              <h2 className="text-2xl text-gray-900 mb-4">Account Registration</h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  To use our Service, you must create an account and meet the following requirements:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Be at least 18 years old</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Provide accurate and complete registration information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Maintain the security of your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Notify us immediately of any unauthorized access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Be responsible for all activities under your account</span>
                  </li>
                </ul>
                <p>
                  You may not share your account credentials or allow others to access your account. 
                  Any breach of security should be reported to us immediately at hello@postaroo.com.
                </p>
              </div>
            </div>
          </div>

          {/* Connected Social Media Accounts */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-indigo-50/50 to-purple-50/30 border-l-4 border-indigo-500 rounded-r-2xl py-8 px-6 sm:px-8">
              <h2 className="text-2xl text-gray-900 mb-4">Connected Social Media Accounts</h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  When you connect your Facebook Pages or Instagram Business accounts to Postaroo, you are 
                  responsible for:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Ensuring you have proper authorization to connect and manage these accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Complying with Meta Platform Terms and the terms of service of connected platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>All content published through our Service to your connected accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Maintaining valid credentials and permissions for connected accounts</span>
                  </li>
                </ul>
                <p>
                  <strong>Important:</strong> Postaroo acts only on your instructions. We are not responsible 
                  for content you publish or any violations of third-party platform policies.
                </p>
              </div>
            </div>
          </div>

          {/* Use of Service */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Use of Service</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                You are granted a limited, non-exclusive, non-transferable license to access and use the 
                Service in accordance with these Terms.
              </p>
              <p>
                <strong>You agree NOT to:</strong>
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Violate any laws or regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Infringe intellectual property rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Post harmful or offensive content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Engage in spam or unauthorized ads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Access our systems without authorization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Interfere with other users' access</span>
                </li>
                <li className="flex items-start sm:col-span-2">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Use the Service for any illegal, deceptive, or unauthorized purpose</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User Content */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">User Content</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                <strong>Your Content:</strong> You retain all rights to content you create, upload, or publish 
                through the Service. By using Postaroo, you grant us a limited license to use, store, process, 
                and transmit your content solely to provide the Service.
              </p>
              <p>
                <strong>Content Responsibility:</strong> You are solely responsible for all content you publish 
                through Postaroo. You represent and warrant that you own or have the necessary rights to use 
                and publish all content, and that your content does not violate any laws or third-party rights.
              </p>
              <p>
                <strong>Content Removal:</strong> We reserve the right to remove any content that violates these 
                Terms or is deemed inappropriate, without prior notice.
              </p>
            </div>
          </div>

          {/* AI-Generated Content */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">AI-Generated Content</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Postaroo provides AI-powered tools to help you generate content ideas, captions, hashtags, 
                and other text-based content.
              </p>
              <p>
                <strong>AI Content is Provided "As-Is":</strong> You are responsible for reviewing, editing, 
                and ensuring the accuracy, appropriateness, and compliance of all AI-generated content before 
                publishing. We do not guarantee the accuracy or quality of AI-generated content.
              </p>
              <p>
                You retain ownership of content created using our AI tools, but you acknowledge that similar 
                content may be generated for other users.
              </p>
            </div>
          </div>

          {/* Subscription and Billing */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Subscription and Billing</h2>
            <div className="space-y-5 text-gray-700 text-base leading-relaxed">
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Free Trial</h3>
                <p>
                  We offer a 14-day free trial for new users. You may cancel at any time during the trial 
                  period without being charged. Your trial will automatically convert to a paid subscription 
                  unless you cancel before the trial ends.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Paid Subscriptions</h3>
                <p>
                  After the trial period, you will be charged according to your selected plan (Starter, Pro, 
                  or Business). Subscriptions automatically renew on a monthly or annual basis unless cancelled 
                  before the renewal date.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Payment</h3>
                <p>
                  You agree to provide accurate and complete billing information. All fees are stated in USD 
                  and are non-refundable except as stated in our refund policy below.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Refund Policy</h3>
                <p>
                  We offer a 30-day money-back guarantee. If you're not satisfied with the Service within 
                  the first 30 days of your paid subscription, contact us at hello@postaroo.com for a full refund.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Cancellation</h3>
                <p>
                  You may cancel your subscription at any time from your account settings. Upon cancellation, 
                  you will retain access to the Service until the end of your current billing period.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                <strong>Our Property:</strong> The Service and its original content, features, design, functionality, 
                and branding are owned by Postaroo and are protected by international copyright, trademark, patent, 
                and other intellectual property laws.
              </p>
              <p>
                <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license 
                to access and use the Service. You may not copy, modify, distribute, sell, or lease any part of 
                our Service without our written permission.
              </p>
              <p>
                <strong>Feedback:</strong> If you provide us with feedback or suggestions about the Service, 
                you grant us the right to use that feedback without compensation or obligation to you.
              </p>
            </div>
          </div>

          {/* Platform Compliance */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border-l-4 border-blue-500 rounded-r-2xl py-8 px-6 sm:px-8">
              <h2 className="text-2xl text-gray-900 mb-4">Platform Compliance (Facebook & Instagram)</h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Postaroo integrates with Facebook and Instagram via Meta's official APIs. By using our Service 
                  to publish content to these platforms, you agree to comply with:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Meta Platform Terms of Service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Facebook Community Standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Instagram Community Guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Any other policies set forth by Meta or connected platforms</span>
                  </li>
                </ul>
                <p>
                  <strong>Violations of third-party platform policies may result in termination of your 
                  Postaroo account.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Service Availability */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Service Availability</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                We strive to provide reliable, uninterrupted service. However, we do not guarantee that the 
                Service will always be available, error-free, or secure.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time, 
                with or without notice. We may also impose limits on certain features or restrict access to 
                parts or all of the Service.
              </p>
              <p>
                Scheduled maintenance and updates will be performed as needed, and we will make reasonable 
                efforts to notify users in advance of significant disruptions.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                <strong>To the fullest extent permitted by law, Postaroo shall not be liable for:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Any indirect, incidental, special, consequential, or punitive damages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Loss of profits, revenue, data, or other intangible losses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Damages resulting from your use or inability to use the Service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Any content published through the Service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Unauthorized access to or alteration of your data</span>
                </li>
              </ul>
              <p>
                Our total liability to you for any claims arising from or related to the Service shall not 
                exceed the amount you paid to us in the 12 months preceding the claim.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Indemnification</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless Postaroo, its officers, directors, employees, 
                and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including 
                reasonable attorneys' fees) arising from:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Your use of the Service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Your violation of these Terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Your violation of any third-party rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Content you publish through the Service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Termination</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                <strong>Termination by You:</strong> You may terminate your account at any time by canceling 
                your subscription or contacting us at hello@postaroo.com.
              </p>
              <p>
                <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your account 
                immediately, without prior notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Breach of these Terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Fraudulent, abusive, or illegal activity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Non-payment of fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Violation of third-party platform policies</span>
                </li>
              </ul>
              <p>
                Upon termination, your right to use the Service will immediately cease. All provisions of 
                these Terms that by their nature should survive termination shall survive, including ownership 
                provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                If you have any concerns or disputes about the Service, please contact us first at 
                hello@postaroo.com, and we will attempt to resolve the issue with you in good faith.
              </p>
              <p>
                Any disputes that cannot be resolved informally shall be resolved through binding arbitration 
                in accordance with the rules of the jurisdiction in which Postaroo operates.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Changes to These Terms</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                We reserve the right to modify or update these Terms at any time. When we make changes, we 
                will update the "Last updated" date at the top of this page.
              </p>
              <p>
                For significant changes, we will notify you via email or through a prominent notice in the 
                Service at least 30 days before the changes take effect.
              </p>
              <p>
                Your continued use of the Service after changes are made constitutes acceptance of the new 
                Terms. If you do not agree to the modified Terms, you must stop using the Service.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Governing Law</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                in which Postaroo operates, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver 
                of those rights.
              </p>
            </div>
          </div>

          {/* Severability */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Severability</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining 
                provisions will continue in full force and effect. The invalid or unenforceable provision will 
                be deemed modified to the extent necessary to make it valid and enforceable.
              </p>
            </div>
          </div>

          {/* Entire Agreement */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Entire Agreement</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                These Terms, together with our Privacy Policy and any other legal notices published by us, 
                constitute the entire agreement between you and Postaroo concerning the Service.
              </p>
              <p>
                These Terms supersede any prior agreements or understandings, whether written or oral, relating 
                to the Service.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-gray-900 mb-2">Contact Us</h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Questions about these Terms? We're here to help
                  </p>
                </div>
              </div>
              
              <div className="space-y-2.5 text-gray-700 text-base leading-relaxed">
                <p><strong>Company:</strong> Postaroo</p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info@postaroo.io" className="text-blue-600 hover:text-blue-700 underline">info@postaroo.io</a>
                </p>
                <p><strong>Website:</strong> <a href="https://postaroo.io" className="text-blue-600 hover:text-blue-700 underline">https://postaroo.io</a></p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  We typically respond to all inquiries within 2–3 business days.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
