'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/inbg.jpg"
          alt="AmbiAce Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white text-center"
          >
            About AmbiAce
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed text-gray-800">
              At AmbiAce, we redefine what possible in interior and architectural décor through the fusion of art, technology, and craftsmanship.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              We are a luxury 3D-printing studio that partners with leading architects and interior designers to bring their most distinctive visions to life. From one-of-a-kind art pieces to large-scale spatial installations, we deliver decor that commands attention and elevates every environment.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Our process is collaborative by design — we co-create with our clients, adapting to their aesthetic language while offering technical expertise that pushes creative boundaries. Through our curated network of advanced 3D manufacturing partners, we offer unparalleled material versatility, scale flexibility, and precision finishing.
            </p>

            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What sets us apart is simple:</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We are not a product brand. We are an enabler of design innovation — crafting exclusive, future-forward decor that reflects the unique identity of each project and the signature of its creator.
              </p>
            </div>
            

            <div className="pt-8 text-center">
              <p className="text-8xl md:text-9xl font-bold text-gray-900">AmbiAce</p>
            </div>
          </motion.div>

          {/* Right Column - Boilerplate & Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                AmbiAce is a luxury 3D-printed décor studio partnering with leading architects and interior designers to create bespoke, future-forward statement pieces. Through advanced additive manufacturing, material innovation, and a collaborative design-first approach, we help transform visionary concepts into sculptural works that elevate interiors. From one-off artistic installations to fully integrated spatial elements, AmbiAce delivers precision-crafted décor that empowers your design signature.
              </p>
            </div>

            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/interior.jpg"
                alt="AmbiAce Studio Interior"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Logo at the End */}
      <div className="w-full flex justify-center py-12 bg-white">
        <div className="flex items-center space-x-4">
          <Image
            src="/comlogoo.png"
            alt="AmbiAce Logo"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-start">
            <p className={`text-4xl font-bold text-gray-900 ${dancingScript.className}`}>AmbiAce</p>
            <p className="text-lg text-gray-700 italic">Ace up your Ambience</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
        aria-label="Scroll to top"
      >

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
      </button>
    </div>
  );
};

export default AboutPage; 