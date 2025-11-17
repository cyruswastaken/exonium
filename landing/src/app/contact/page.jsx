import React from "react";
import Footer from "@/components/footer/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#000212] text-[#f7f8f8] pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-white">How can we help?</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with our sales and support teams for
            demos, onboarding support, or product questions.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {/* Product Demo Card */}
          <div className="rounded-lg p-8 border border-gray-800 bg-gray-900/50">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-semibold">Product Demo</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Schedule a personalized demo to see how Exonium can streamline your team's workflow and boost productivity.
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              Schedule demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Help & Support Card */}
          <div className="rounded-lg p-8 border border-gray-800 bg-gray-900/50">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-semibold">Help & support</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Ask product questions, report problems, or leave feedback.
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              Contact support
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Join the community */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Join the community</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                More than 15,000 Exonium users share questions and best practices in our Discord community.
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center transition-colors">
                Join Discord
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            {/* General communication */}
            <div>
              <h3 className="text-xl font-semibold mb-4">General communication</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                For other queries, please get in touch with us via email.
              </p>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@exonium.app
              </div>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Get an overview of Exonium's features, integrations, and how to use them.
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center transition-colors">
                Exonium Docs
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Developers</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Learn how to use the GraphQL API and TypeScript SDK to extend Exonium.
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center transition-colors">
                Exonium API
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
