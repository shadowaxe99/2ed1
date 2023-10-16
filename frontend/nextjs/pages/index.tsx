import React from 'react';
import { Navbar } from '../shad_ui/components/navbar';
import { Footer } from '../shad_ui/components/footer';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to the AI Agent-powered Platform for Influencer-Brand Collaborations
        </h1>

        <p className="mt-3 text-2xl">
          Get started by navigating through the platform
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/profile">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Profile & Preferences &rarr;</h3>
              <p className="mt-4 text-xl">Manage your influencer profile and preferences for brand partnerships.</p>
            </a>
          </Link>

          <Link href="/brands">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Brand Database & Matching Algorithm &rarr;</h3>
              <p className="mt-4 text-xl">Explore our dynamic database of brands and find your perfect match.</p>
            </a>
          </Link>

          <Link href="/partnerships">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Partnership Idea Generator &rarr;</h3>
              <p className="mt-4 text-xl">Get creative partnership ideas based on your matching results.</p>
            </a>
          </Link>

          <Link href="/email">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Email Automation & Response Tracker &rarr;</h3>
              <p className="mt-4 text-xl">Send personalized emails to brands and track their responses.</p>
            </a>
          </Link>

          <Link href="/pitch_deck">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Pitch Deck Generator &rarr;</h3>
              <p className="mt-4 text-xl">Create persuasive pitch decks based on your partnership ideas.</p>
            </a>
          </Link>

          <Link href="/analytics">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Analytics Dashboard &rarr;</h3>
              <p className="mt-4 text-xl">Track your key performance metrics.</p>
            </a>
          </Link>

          <Link href="/security">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Security &rarr;</h3>
              <p className="mt-4 text-xl">Ensure your data security and compliance.</p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;