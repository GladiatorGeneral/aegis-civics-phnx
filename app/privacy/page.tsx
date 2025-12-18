import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl text-center font-extrabold mb-6">Aegis Civics</h1>

        <nav className="flex justify-center gap-6 mb-6">
          <a href="#privacy" className="text-sm font-semibold hover:underline">Privacy Policy</a>
          <a href="#cookies" className="text-sm font-semibold hover:underline">Cookie Policy</a>
          <a href="#terms" className="text-sm font-semibold hover:underline">Terms of Service</a>
        </nav>

        <h2 id="privacy" className="text-3xl text-center font-extrabold mt-6 mb-4">PRIVACY POLICY</h2>
        <p><strong>Last Updated:</strong> 12/15/2025</p>
        <p><strong>Effective Date:</strong> 12/18/2025</p>

        <h3 className="mt-8 mb-2">1. Overview</h3>
        <p>
          <strong>Aegis Civics</strong> ("Platform," "we," "our," or "us"), a product of <strong>PHNX AI</strong>, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our civic intelligence platform, including our website, applications, and services (collectively, "Services").
        </p>
        <p>This policy is designed to comply with GDPR, CCPA/CPRA, VCDPA, CPA, and other applicable laws.</p>

        <h3 className="mt-8 mb-2">2. Information We Collect</h3>
        <h4>A. Information You Provide Directly</h4>
        <ul>
          <li>Account Information: name, email, username, password, profile picture.</li>
          <li>Contact Information when you contact representatives through our platform.</li>
          <li>Communications: messages, feedback, survey responses, support queries.</li>
          <li>Civic Preferences and verification data.</li>
        </ul>

        <h4>B. Information Collected Automatically</h4>
        <ul>
          <li>Usage data: pages visited, features used, time spent, clickstream.</li>
          <li>Device info: IP address, browser, OS, device identifiers.</li>
          <li>Location data derived from IP or provided by you.</li>
          <li>Cookies and tracking technologies; see our Cookie Policy.</li>
        </ul>

        <h4>C. Information from Third Parties</h4>
        <ul>
          <li>Government data: public records, legislative data from official sources.</li>
          <li>Social media data if you connect accounts.</li>
          <li>Analytics provider data.</li>
        </ul>

        <h4>D. AI-Processed Information</h4>
        <p>Includes legislative analysis, queries submitted to AI agents, interaction and behavioral data used to improve AI outputs.</p>

        <h3 className="mt-8 mb-2">3. How We Use Your Information</h3>
        <p>We use information to provide and improve Services, personalize experiences, analyze legislation, send updates, conduct research, secure the platform, and comply with legal obligations. We do not sell personal information as defined by CCPA/CPRA.</p>

        <h3 className="mt-8 mb-2">4. AI-Specific Processing</h3>
        <p>We use AI to analyze legislative documents, generate reports, and provide insights. We disclose when you interact with AI. AI does not make legally binding automated decisions without human review.</p>

        <h3 className="mt-8 mb-2">5. How We Share Your Information</h3>
        <ul>
          <li>Service providers (hosting, analytics, payments)</li>
          <li>Government entities when required or to facilitate actions you initiate</li>
          <li>Academic researchers using aggregated/anonymized data</li>
          <li>Legal authorities when required</li>
          <li>Business transfers in connection with a merger or sale</li>
        </ul>

        <h3 className="mt-8 mb-2">6. International Data Transfers</h3>
        <p>PHNX AI is based in the United States. We may transfer data to the U.S. and use SCCs or other mechanisms for EU/UK transfers.</p>

        <h3 className="mt-8 mb-2">7. Data Retention</h3>
        <ul>
          <li>Account data: until deletion + 30-day recovery</li>
          <li>Usage data: 24 months, then aggregated</li>
          <li>Financial data: retained as required by tax laws (typically 7 years)</li>
          <li>AI training data: anonymized after 6 months</li>
        </ul>

        <h3 className="mt-8 mb-2">8. Your Privacy Rights</h3>
        <p>Depending on your location, you may have rights to access, correct, delete, restrict processing, data portability, and to withdraw consent. GDPR, CCPA/CPRA, and other rights apply as described above. Submit requests to <a href="mailto:privacy@phnxai.com">privacy@phnxai.com</a>.</p>

        <h3 className="mt-8 mb-2">9. Data Security</h3>
        <p>We implement technical and organizational measures such as TLS, encryption at rest, access controls, assessments, and an incident response plan.</p>

        <h3 className="mt-8 mb-2">10. Children's Privacy</h3>
        <p>Services are not for children under 16. We do not knowingly collect data from children under 16.</p>

        <h3 className="mt-8 mb-2">11. Third-Party Links</h3>
        <p>We are not responsible for third-party site privacy practices.</p>

        <h3 className="mt-8 mb-2">12. Changes to This Policy</h3>
        <p>We will notify users of material changes via email or platform notice and update the effective date.</p>

        <h3 className="mt-8 mb-2">13. Contact Information</h3>
        <p>
          Data Controller: PHNX AI<br />
          Privacy Questions: <a href="mailto:privacy@phnxai.com">privacy@phnxai.com</a>
        </p>

        <hr className="my-8" />

        <h2 id="cookies" className="text-3xl text-center font-extrabold mt-6 mb-4">Aegis Civics Cookie Policy</h2>
        <p className="text-center text-sm text-gray-300"><strong>Last Updated:</strong> 12/15/2025 &nbsp; <strong>Effective Date:</strong> 12/18/2025</p>

        <h3 className="mt-8 mb-2">1. Introduction</h3>
        <p>This Cookie Policy explains how <strong>Aegis Civics</strong> ("Platform," "we," "our," or "us"), a product of <strong>PHNX AI</strong>, uses cookies and similar tracking technologies when you use our Services. This policy should be read alongside our <a href="#privacy">Privacy Policy</a> and <a href="#terms">Terms of Service</a>. By using our Services, you consent to cookies as described, unless disabled via browser settings or our consent tools.</p>

        <h3 className="mt-8 mb-2">2. What Are Cookies?</h3>
        <p>Cookies are small text files stored on your device when you visit websites. Similar technologies include Local Storage, Session Storage, Web Beacons/Pixels, and Device Fingerprinting. They help remember information about your visit.</p>

        <h3 className="mt-8 mb-2">3. Why We Use Cookies</h3>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential</strong> — Required for functionality (authentication, security).</li>
          <li><strong>Performance</strong> — Analytics and performance monitoring.</li>
          <li><strong>Functionality</strong> — Remember preferences and settings.</li>
          <li><strong>AI &amp; Personalization</strong> — Improve AI services and personalize content.</li>
          <li><strong>Advertising</strong> — Civic engagement notifications (non-commercial).</li>
        </ul>

        <h3 className="mt-8 mb-2">4. Types of Cookies We Use</h3>
        <p>We use first-party and third-party, session and persistent cookies as appropriate for platform functionality and analytics.</p>

        <h3 className="mt-8 mb-2">5. Detailed Cookie List</h3>
        <p><em>Essential Cookies</em> — required for the Platform to function (cannot be refused): <code>auth_session</code>, <code>security_token</code>, <code>consent_status</code>, <code>load_balancer</code>.</p>
        <p><em>Performance &amp; Analytics</em> — examples: <code>_ga</code>, <code>_gid</code>, <code>_gat</code>, <code>platform_perf</code>, <code>error_tracking</code>.</p>
        <p><em>Functionality</em> — examples: <code>civic_region</code>, <code>display_prefs</code>, <code>notification_set</code>, <code>language</code>.</p>
        <p><em>AI &amp; Personalization</em> — examples: <code>ai_interaction</code>, <code>policy_interests</code>, <code>representative_track</code>, <code>insight_prefs</code>.</p>
        <p><em>Advertising &amp; Outreach</em> — examples: <code>civic_campaigns</code>, <code>event_recommend</code>, <code>legislative_alerts</code>. Note: we do not use cookies for third-party commercial behavioral advertising across sites.</p>

        <h3 className="mt-8 mb-2">6. AI-Specific Cookie Usage</h3>
        <p>AI-related cookies maintain context during AI sessions, remember analysis parameters, track helpful insights, and are anonymized for training after 6 months.</p>

        <h3 className="mt-8 mb-2">7. Your Cookie Choices</h3>
        <p>Manage cookies via our cookie preference center (consent banner on first visit, account settings, footer link) or through browser settings. We respect Global Privacy Control and Do Not Track signals where applicable.</p>

        <h3 className="mt-8 mb-2">8. Region-Specific Disclosures</h3>
        <p>GDPR: lawful basis and withdrawal of consent; CCPA/CPRA: opt-out rights; Other US states: compliance with VCDPA, CPA, CTDPA, UCPA.</p>

        <h3 className="mt-8 mb-2">9. Third-Party Cookies</h3>
        <p>Third-party services that may set cookies include Google Analytics, Cloudflare, AWS, Mailchimp. Refer to their privacy policies for details.</p>

        <h3 className="mt-8 mb-2">10. Data Retention for Cookies</h3>
        <p>Session cookies are deleted when the browser closes; persistent cookies vary by purpose. No cookie is kept longer than 2 years; analytics data is anonymized after 14 months.</p>

        <h3 className="mt-8 mb-2">11. Security of Cookie Data</h3>
        <p>We set Secure, HttpOnly, and SameSite flags where appropriate and perform regular security audits of cookie practices.</p>

        <h3 className="mt-8 mb-2">12. Changes to This Cookie Policy</h3>
        <p>We may update this policy periodically and will notify registered users and update the date at the top.</p>

        <h3 className="mt-8 mb-2">13. Contact Information</h3>
        <p>For cookie-related questions: <a href="mailto:privacy@phnxai.com">privacy@phnxai.com</a>.</p>

        <hr className="my-8" />

        <hr className="my-8" />

        <h2 id="terms" className="text-3xl text-center font-extrabold mt-6 mb-4">TERMS OF SERVICE</h2>
        <p className="text-center text-sm text-gray-300"><strong>Last Updated:</strong> 12/15/2025 &nbsp; <strong>Effective Date:</strong> 12/18/2025</p>

        <h3 className="mt-8 mb-2">1. Agreement to Terms</h3>
        <p>By accessing or using Aegis Civics ("Platform"), you agree to these Terms. If you disagree, do not access the Platform.</p>

        <h3 className="mt-8 mb-2">2. Eligibility</h3>
        <p>You must be at least 16 years old (or the age of majority in your jurisdiction) and not barred from receiving services under applicable law.</p>

        <h3 className="mt-8 mb-2">3. Account Registration</h3>
        <ul>
          <li>Provide accurate information and maintain account security.</li>
          <li>Notify us of unauthorized access.</li>
          <li>We may suspend or terminate accounts that violate these Terms.</li>
        </ul>

        <h3 className="mt-8 mb-2">4. Acceptable Use</h3>
        <p>Permitted uses include researching legislative information and using AI tools for personal understanding. Prohibited conduct includes impersonation, harassment, submitting false information, interfering with platform operations, using automated systems without approval, reverse engineering, commercial use without permission, and advocating illegal activity.</p>

        <h3 className="mt-8 mb-2">5. AI Services Disclaimer</h3>
        <p>AI outputs are informational only—not legal advice—and accuracy is not guaranteed. Human judgment is required. "American Scale" scores are algorithmic assessments and should be considered alongside other sources.</p>

        <h3 className="mt-8 mb-2">6. User Content</h3>
        <p>You retain ownership of content you submit but grant us a license to use and analyze it for Platform operations. You must not submit infringing, illegal, or malicious content.</p>

        <h3 className="mt-8 mb-2">7. Intellectual Property</h3>
        <p>PHNX AI owns Platform IP. Public government data remains public domain; our presentation and analysis are our IP. We grant you a limited, non-exclusive license for personal, non-commercial use.</p>

        <h3 className="mt-8 mb-2">8. Third-Party Services</h3>
        <p>We integrate with third parties but are not responsible for their availability or policies.</p>

        <h3 className="mt-8 mb-2">9. Termination</h3>
        <p>We may suspend or terminate access for violations, legal reasons, security, or with notice.</p>

        <h3 className="mt-8 mb-2">10. Disclaimers and Limitation of Liability</h3>
        <p>The Platform is provided "AS IS". Liability is limited to the maximum extent permitted by law (e.g., $100 or amounts paid by you in the past year), and we are not liable for indirect or consequential damages. Some jurisdictions may limit these restrictions.</p>

        <h3 className="mt-8 mb-2">11. Indemnification</h3>
        <p>You agree to indemnify PHNX AI for claims arising from your use or violation of these Terms.</p>

        <h3 className="mt-8 mb-2">12. Dispute Resolution</h3>
        <p>Contact <a href="mailto:privacy@phnxai.com">privacy@phnxai.com</a> for informal resolution. Unresolved disputes will be resolved by binding arbitration in Delaware under AAA Commercial Rules, with a class action waiver, subject to statutory exceptions.</p>

        <h3 className="mt-8 mb-2">13. Governing Law</h3>
        <p>These Terms are governed by the laws of the State of Delaware.</p>

        <h3 className="mt-8 mb-2">14. Changes to Terms</h3>
        <p>We may modify these Terms; your continued use constitutes acceptance.</p>

        <h3 className="mt-8 mb-2">15. General Provisions</h3>
        <ul>
          <li>Entire agreement, severability, no waiver, assignment rules, and notice procedures as standard legal provisions.</li>
        </ul>

        <h3 className="mt-8 mb-2">16. Contact Information</h3>
        <p>For Terms questions or legal notices: <a href="mailto:privacy@phnxai.com">privacy@phnxai.com</a>.</p>

        <p className="mt-6">Effective Date Notice: These policies are effective as of the dates shown above. Contact: <a href="mailto:privacy@phnxai.com">privacy@phnxai.com</a></p>
      </div>
    </div>
  );
}
