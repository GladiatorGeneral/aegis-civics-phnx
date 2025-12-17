import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1>Privacy Policy</h1>
        <p>Effective date: December 15, 2025</p>

        <h2>Introduction</h2>
        <p>We respect your privacy. This policy explains what data we collect, how we use it, and your choices.</p>

        <h2>Data We Collect</h2>
        <ul>
          <li>Information you provide directly (contact form submissions, email).</li>
          <li>Usage data collected automatically (analytics, IP address, device information).</li>
          <li>Aggregate or anonymized data used for research and product improvement.</li>
        </ul>

        <h2>How We Use Data</h2>
        <p>We use collected data to operate and improve the service, respond to inquiries, and comply with legal obligations. We do not sell personal data.</p>

        <h2>Third Parties</h2>
        <p>We may use third-party services (analytics, hosting) that process data on our behalf. Their use is governed by their own policies.</p>

        <h2>Your Choices</h2>
        <p>You may contact us at <a href="mailto:privacy@phnxai.com" className="underline">privacy@phnxai.com</a> to request access, correction, or deletion of personal data where applicable.</p>

        <h2>Security</h2>
        <p>We implement reasonable measures to protect data. However, no system is completely secure.</p>

        <h2>Changes to this Policy</h2>
        <p>We may update this policy; changes will be posted with a revised effective date.</p>

        <p className="mt-6">Contact: <a href="mailto:privacy@phnxai.com" className="underline">privacy@phnxai.com</a></p>
      </div>
    </div>
  );
}
