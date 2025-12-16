import { Shield, Trash2, Lock } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div id="privacy" className="w-full">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/60">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-5 shadow-lg">
            <Shield size={24} className="text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4 leading-tight">
            Privacy Policy
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
            <h2 className="text-2xl text-gray-900 mb-4">Introduction</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                Postaroo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                social media scheduling and content management service.
              </p>
              <p>
                We respect your privacy and are transparent about the data we collect and how we use it. 
                This policy is designed to be clear and easy to understand, even if you're not a legal expert.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-6">Information We Collect</h2>
            
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                When you create an account or use Postaroo, we collect:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-[15px] leading-relaxed">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Name and email address</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Business or company name</span>
                </li>
                <li className="flex items-start sm:col-span-2">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Billing and payment information (processed securely through our payment provider)</span>
                </li>
              </ul>
            </div>

            {/* Facebook & Instagram Account Data */}
            <div className="mb-8">
              <h3 className="text-lg text-gray-900 mb-3">Facebook & Instagram Account Data</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                When you connect your Facebook Pages or Instagram Business accounts to Postaroo, we collect 
                and store the following data to enable scheduling and publishing:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-[15px] leading-relaxed">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Facebook Page ID and name</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Instagram account username</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Profile images and details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Access tokens for publishing</span>
                </li>
                <li className="flex items-start sm:col-span-2">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Publishing permissions granted by you</span>
                </li>
              </ul>
            </div>

            {/* Usage & Technical Data */}
            <div>
              <h3 className="text-lg text-gray-900 mb-3">Usage & Technical Data</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                We automatically collect certain technical information when you use Postaroo:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-[15px] leading-relaxed">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>IP address and browser type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Pages visited within the app</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Timestamps and interaction logs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Device info and operating system</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-[15px] leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Scheduling and publishing</strong> to Facebook and Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>AI content generation</strong> based on your input</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Managing</strong> connected social accounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Improving</strong> product experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Customer support</strong> and communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Processing payments</strong> and billing</span>
              </li>
              <li className="flex items-start sm:col-span-2">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Sending important updates</strong> about your account, service changes, or new features</span>
              </li>
            </ul>
          </div>

          {/* Facebook & Instagram Platform Data */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border-l-4 border-blue-500 rounded-r-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Facebook & Instagram Platform Data</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                <strong>Postaroo connects to Facebook and Instagram via Meta's official APIs.</strong> This integration 
                allows us to schedule and publish content on your behalf.
              </p>
              <p>
                <strong>Data is used only to perform actions you explicitly request.</strong> We do not access or 
                use your Facebook or Instagram data for any purpose other than providing our scheduling and 
                publishing service.
              </p>
              <p>
                <strong>Postaroo complies with Meta Platform Terms and Developer Policies.</strong> We adhere to 
                all requirements set by Meta to ensure your data is handled securely and responsibly.
              </p>
            </div>
          </div>

          {/* Data Sharing & Disclosure */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Data Sharing & Disclosure</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4 text-[15px]">
                <strong>We do NOT sell your personal data.</strong> Your information is never sold to advertisers, 
                data brokers, or third parties for marketing purposes.
              </p>
              <p>
                We may share your information only in the following limited situations:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>With trusted service providers:</strong> We use third-party services for hosting, 
                  payment processing, and analytics. These providers are contractually required to protect your data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>With Facebook and Instagram:</strong> When you publish content, your posts and 
                  related data are sent to these platforms according to your instructions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>If legally required:</strong> We may disclose information if required by law, 
                  regulation, legal process, or government request.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Data Retention</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                We retain your data only as long as your account is active or as needed to provide our services to you.
              </p>
              <p>
                When you disconnect a Facebook Page or Instagram account from Postaroo, we immediately revoke access tokens, 
                remove scheduled posts, and permanently delete connection data.
              </p>
              <p>
                If you delete your Postaroo account, all of your data will be permanently deleted within 30 days, 
                except where we're required to retain certain records for legal or regulatory purposes.
              </p>
            </div>
          </div>

          {/* Data Deletion Instructions - PROMINENT SECTION */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Trash2 size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-gray-900 mb-2">Data Deletion Instructions</h2>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    You have the right to request deletion of your data at any time
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
                <p>
                  <strong>How to request deletion of your data:</strong>
                </p>
                <ol className="space-y-3 ml-6 list-decimal">
                  <li>
                    <strong>Email us</strong> at <a href="mailto:privacy@postaroo.com" className="text-blue-600 hover:text-blue-700 underline">privacy@postaroo.com</a> with the subject line "Data Deletion Request"
                  </li>
                  <li>
                    Include your account email address and any specific data you want deleted
                  </li>
                  <li>
                    We will confirm receipt of your request within 48 hours
                  </li>
                  <li>
                    Your data will be permanently deleted within <strong>30 days</strong>
                  </li>
                </ol>
                
                <p className="bg-white border border-blue-200 rounded-xl p-4 mt-6">
                  <strong>What gets deleted:</strong> When you request data deletion, we will permanently remove 
                  all personal information, connected social accounts, scheduled posts, media files, and account 
                  settings associated with your Postaroo account.
                </p>
                
                <p className="text-sm text-gray-600 mt-4">
                  Note: We may retain certain information if required by law, for fraud prevention, or to resolve 
                  disputes. If retention is necessary, we will notify you and explain the reason.
                </p>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Security</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                We take the security of your data seriously and implement industry-standard security measures:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Encrypted transmission</strong> using HTTPS/TLS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Secure storage</strong> with encryption at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Limited internal access</strong> on need-to-know basis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Regular security audits</strong> and monitoring</span>
                </li>
                <li className="flex items-start sm:col-span-2">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Secure authentication</strong> with password hashing and session management</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                While we implement strong security measures, no method of transmission over the internet is 100% 
                secure. We cannot guarantee absolute security, but we continuously work to protect your information.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Your Rights</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                Depending on your location, you have certain rights regarding your personal information:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Right to access:</strong> Request a copy of the personal data we hold about you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Right to correction:</strong> Request that we correct inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Right to deletion:</strong> Request that we delete your personal data (see above)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Right to object:</strong> Object to certain types of data processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Right to data portability:</strong> Request your data in a machine-readable format</span>
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at <a href="mailto:privacy@postaroo.com" className="text-blue-600 hover:text-blue-700 underline">privacy@postaroo.com</a>
              </p>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                We use cookies and similar technologies to improve your experience and analyze how our service is used. 
                Essential cookies are required for authentication and core functionality, while analytics cookies help us 
                understand usage patterns and improve the product.
              </p>
              <p>
                You can control or disable cookies through your browser settings. Note that disabling certain cookies 
                may affect the functionality of Postaroo.
              </p>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                Postaroo integrates with third-party services including Facebook and Instagram (via Meta APIs), 
                payment processors for billing, and cloud hosting providers.
              </p>
              <p>
                We are not responsible for the privacy practices of these third-party services. We encourage you 
                to review their privacy policies.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                Postaroo is not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children. If we become aware that we have collected data from a child under 18, 
                we will take steps to delete that information as quickly as possible.
              </p>
              <p>
                If you believe we have collected data from a child, please contact us immediately.
              </p>
            </div>
          </div>

          {/* Changes to This Privacy Policy */}
          <div className="mb-12 py-10 px-6 sm:px-8 bg-slate-50/50 rounded-2xl">
            <h2 className="text-2xl text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal 
                requirements, or service features. When we make changes, we will update the "Last updated" date 
                at the top of this page.
              </p>
              <p>
                For significant changes, we will notify you via email or through the application. Your continued 
                use of Postaroo after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Lock size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-gray-900 mb-2">Contact Us</h2>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    If you have questions about this Privacy Policy or our privacy practices
                  </p>
                </div>
              </div>
              
              <div className="space-y-2.5 text-gray-700 text-[15px] leading-relaxed">
                <p><strong>Company:</strong> Postaroo</p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info@postaroo.io" className="text-blue-600 hover:text-blue-700 underline">info@postaroo.io</a>
                </p>
                <p><strong>Website:</strong> <a href="https://postaroo.io" className="text-blue-600 hover:text-blue-700 underline">https://postaroo.io</a></p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  We respond to all privacy-related inquiries within 48 hours. For urgent data deletion requests, 
                  please use the subject line "URGENT: Data Deletion Request"
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
