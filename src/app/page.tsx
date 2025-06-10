'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import React from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

// Sample data for sections
const newArrivals = [
  { id: 7, name: 'Sculptural Planter', price: 65.00, image: '/products/planter.jpg' },
  { id: 8, name: 'Modular Bookshelf', price: 350.00, image: '/products/bookshelf.jpg' },
  { id: 9, name: 'Abstract Coasters', price: 30.00, image: '/products/coasters.jpg' },
];

const ourProducts = [
  { id: 1, name: 'Modern Centerpiece', price: 89.99, image: '/products/centerpiece.jpg' },
  { id: 2, name: 'Geometric Table', price: 299.99, image: '/products/tables.jpg' },
  { id: 3, name: 'Artistic Chair', price: 199.99, image: '/products/chairs.jpg' },
  { id: 4, name: 'Abstract Wall Art', price: 129.99, image: '/products/wall-art.jpg' },
  { id: 5, name: 'Minimalist Lamp', price: 99.99, image: '/products/lamp.jpg' },
  { id: 6, name: 'Decorative Vase', price: 75.00, image: '/products/vase.jpg' },
];

const testimonials = [
  {
    quote: "Ambiace transformed my living room! The 3D-printed centerpiece is a true work of art.",
    author: "Sarah J.",
    rating: 5,
  },
  {
    quote: "Incredible customization options and top-notch quality. Highly recommend!",
    author: "Michael S.",
    rating: 5,
  },
  {
    quote: "Sustainable and stylish. Ambiace is doing amazing things for home décor.",
    author: "Emily R.",
    rating: 4,
  },
];

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      {/* Home Section (Hero) */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
        <Image
            src="/hero-bg.jpg"
            alt="Ambiace hero background"
            fill
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+Oj5CQkJCQkJCQkJCQkJCQkJCQkJCQkL/2wBDAR4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="object-cover"
        />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ace up your ambience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Premium 3D-printed home décor for the modern space
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/#"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New Arrivals</h2>
            <p className="text-lg text-gray-600">Discover our latest 3D-printed designs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`#`}>
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AmbiAce? Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/inbg.jpg"
            alt="Why AmbiAce background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Why AmbiAce?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/about"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              KNOW MORE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Which Technology We Do Use Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology: 3D Printing</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Ambiace, we harness the power of advanced 3D printing to bring your home décor dreams to life. This innovative technology allows us to create intricate designs with unparalleled precision and minimal waste.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left space-y-4"
              >
                <h3 className="text-xl font-semibold text-gray-900">Precision and Detail</h3>
                <p className="text-gray-600">
                  Our state-of-the-art 3D printers meticulously craft each piece layer by layer, ensuring every detail is perfect and every curve is smooth. This allows for complex geometries that are impossible with traditional manufacturing methods.
                </p>
                <h3 className="text-xl font-semibold text-gray-900">Sustainable Production</h3>
                <p className="text-gray-600">
                  3D printing significantly reduces material waste by building objects from the ground up, only using the material needed. We prioritize eco-friendly filaments to minimize our environmental footprint.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
        >
          <Image
                  src="/technology.jpg"
                  alt="3D Printing Technology"
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 font-serif italic mb-2">Our</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Products</h2>
            <p className="text-lg text-gray-600">Handcrafted with precision, designed for your home</p>
          </div>
          <div 
            className={`flex overflow-x-auto space-x-8 pb-4 scrollbar-hide snap-x snap-mandatory`}
          >
            {ourProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 snap-center"
              >
                <Link href={`#`}>
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/#"
              className="inline-flex items-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 transition-colors uppercase tracking-wider"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Founder's Desk Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-lg text-gray-600 italic ${dancingScript.className}`}>Founder</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 inline-block border-b-2 border-gray-900 pb-2">Desk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/fo.jpg"
                alt="Kshitij Sakpal - Founder & CEO"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left space-y-4"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                Kshitij Sakpal, a visionary founder and CEO, brings a wealth of expertise to the table. As an
                accomplished architect with a strong aesthetic sense, her work seamlessly integrates
                architecture and interior design. Notably, Kshitij Sakpal has collaborated with renowned celebrity
                architects, showcasing her ability to thrive in high-profile environments. Her commitment to
                sustainability is evident through her final-year thesis, where she pioneered the concept of an
                Experience Center constructed from recycled plastic. Kshitij Sakpal&apos;s journey exemplifies a seamless
                blend of artistic flair, strategic leadership, and a profound dedication to innovative, eco-
                friendly design, including bespoke interior designing services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Hear from happy Ambiace homeowners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instafeed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-lg text-gray-600 font-serif italic ${dancingScript.className}`}>Our</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 inline-block border-b-2 border-gray-900 pb-2">Instafeed</h2>
          <div className="flex items-center justify-center mb-8">
            <div className="rounded-full bg-black p-3 mr-4">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.715.012 3.67.042 1.05.035 1.77.203 2.378.471.606.268 1.15.617 1.62.997.47.38.86.83 1.22 1.287.36.456.66 1.014.92 1.637.26.623.42 1.35.47 2.457.03 1.05.04 1.34.04 3.71s-.01 2.66-.04 3.71c-.03 1.107-.19 1.834-.47 2.457-.26.623-.61 1.18-.92 1.637-.36.457-.75.827-1.22 1.287-.47.38-1.01.617-1.62.997-.606.268-1.326.436-2.378.471-1.05.032-1.34.042-3.67.042s-2.66-.012-3.67-.042c-1.05-.035-1.77-.203-2.378-.471-.606-.268-1.15-.617-1.62-.997-.47-.38-.86-.83-1.22-1.287-.36-.456-.66-1.014-.92-1.637-.26-.623-.42-1.35-.47-2.457-.03-1.05-.04-1.34-.04-3.71s.01-2.66.04-3.71c.03-1.107.19-1.834.47-2.457-.26-.623-.61-1.18-.92-1.637-.36-.457-.75-.827 1.22-1.287.47-.38 1.01-.617 1.62-.997.606-.268 1.326-.436 2.378-.471C9.695 2.01 9.98 2 12.315 2zM12 7.15c-2.675 0-4.85 2.175-4.85 4.85S9.325 16.85 12 16.85s4.85-2.175 4.85-4.85S14.675 7.15 12 7.15zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6.262-10.021c-.819 0-1.485.666-1.485 1.485s.666 1.485 1.485 1.485c.819 0 1.485-.667 1.485-1.485s-.666-1.485-1.485-1.485z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">ambiace_</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
              <Image src="/products/lamp.jpg" alt="Instafeed Image 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
              <Image src="/products/bookshelf.jpg" alt="Instafeed Image 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
              <Image src="/products/chairs.jpg" alt="Instafeed Image 3" fill className="object-cover" />
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/ambiace_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-blue-700 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1.876 13.064a.75.75 0 01-1.045-.078L6.25 12.5l-1.079 1.554a.75.75 0 01-1.045-.078L2.091 10.999a.75.75 0 01.078-1.045L4.5 8.25l-1.554-1.079a.75.75 0 01-.078-1.045L5.001 3.909a.75.75 0 011.045.078L8.75 7.5l1.079-1.554a.75.75 0 011.045.078l2.859 2.073a.75.75 0 01-.078 1.045L15.5 11.75l1.554 1.079a.75.75 0 01.078 1.045L13.909 16.091a.75.75 0 01-1.045-.078L10 12.5l-1.079 1.554a.75.75 0 01-.897-.078z" clipRule="evenodd" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Company Info */}
            <div className="flex flex-col items-start space-y-8">
              <div className="flex items-center space-x-4">
                <Image
                  src="/comlogoo.png"
                  alt="AmbiAce Logo"
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="text-3xl font-bold text-teal-800" style={{ fontFamily: dancingScript.style.fontFamily }}>AmbiAce</h3>
                  <p className="text-sm text-gray-600">Ace up your Ambience</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-800 mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-teal-700 hover:text-teal-900 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">Shop</a></li>
                  <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">Interior | Architecture Service</a></li>
                  <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">B2B</a></li>
                  <li><a href="/contact" className="text-teal-700 hover:text-teal-900 transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* More Links Section */}
            <div>
              <h3 className="text-xl font-semibold text-teal-800 mb-6 opacity-0">More</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">Shipping | Return Policy</a></li>
                <li><a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">Order Tracking</a></li>
              </ul>
            </div>

            {/* Subscribe Section and Contact */}
            <div>
              <h3 className="text-xl font-semibold text-teal-800 mb-6">Subscribe</h3>
              <div className="relative border-b-2 border-teal-700 mb-8 pb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent outline-none text-teal-800 placeholder-teal-600 pr-10"
                />
                <button className="absolute right-0 top-0 mt-1 text-teal-700 hover:text-teal-900 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center text-teal-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center text-teal-800 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10z" />
                </svg>
                <span>contact@ambiace.com</span>
              </div>
              <div className="flex justify-start space-x-6">
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-recycle text-teal-800">
                    <path d="M12 1v4m0 0a4 4 0 014 4H8a4 4 0 014-4m0 0V15m0 0a4 4 0 014 4H8a4 4 0 014-4m0 0v4" />
                    <path d="M22 10V6a2 2 0 00-2-2h-4L10 0 4 4H0a2 2 0 00-2 2v4l10 10 10-10z" />
                  </svg>
                  <span className="text-xs text-gray-600">Recyclable</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award text-teal-800">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  <span className="text-xs text-gray-600 text-center">Made in India</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-leaf text-teal-800">
                    <path d="M17 21a2 2 0 002-2V9.5a2 2 0 00-2-2H7a2 2 0 00-2 2V19a2 2 0 002 2h10z" />
                    <path d="M12 18V8" />
                    <path d="M9 11l3-3 3 3" />
                  </svg>
                  <span className="text-xs text-gray-600">Sustainability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-16 pt-8 border-t border-teal-300 text-center text-teal-700">
            <p>&copy; {new Date().getFullYear()} AmbiAce. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
