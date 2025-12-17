import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-100 mb-4">Contact</h1>
        <p className="text-slate-300 mb-4">We welcome inquiries about Aegis Civics and Phnx Ai collaborations. For general questions, reach out below.</p>

        <div className="bg-slate-800/60 p-6 rounded-lg">
          <p className="text-slate-200"><strong>Email:</strong> <a href="mailto:info@aegiscivics.org" className="underline">info@aegiscivics.org</a></p>
          <p className="text-slate-200 mt-2"><strong>Phone:</strong> 1-202-202-6002</p>
          <p className="text-slate-200 mt-2"><strong>Address:</strong> 123 Civic Plaza, Suite 400, Anytown, USA</p>

          <p className="text-slate-300 mt-4">If you are reporting a security vulnerability or data incident, please include "SECURITY" in the subject line of your email.</p>
        </div>
      </div>
    </div>
  );
}
