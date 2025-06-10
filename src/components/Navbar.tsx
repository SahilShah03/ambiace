'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, memo } from 'react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const NavLink = memo(({ href, name }: { href: string; name: string }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
  >
    {name}
  </Link>
));

NavLink.displayName = 'NavLink';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleSearchBar = useCallback(() => {
    setShowSearchBar(prev => {
      if (prev) {
        setSearchTerm(''); // Clear search term when closing search bar
      }
      return !prev;
    });
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?q=${searchTerm.trim()}`);
      setShowSearchBar(false);
      setSearchTerm('');
      closeMobileMenu();
    }
  }, [searchTerm, router, closeMobileMenu]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed w-full bg-gray-100 backdrop-blur-md z-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Left section: Hamburger and Search */}
        <div className="flex flex-1 items-center gap-x-6">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Open main menu"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <button 
            className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 rounded-md"
            aria-label="Search"
            onClick={toggleSearchBar}
          >
            {showSearchBar ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          {showSearchBar && (
            <form onSubmit={handleSearch} className="flex-1 md:flex ml-4 items-center">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button type="submit" className="ml-2 px-4 py-2 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors">Search</button>
            </form>
          )}
          {/* Desktop navigation links - Removed for this responsive layout */}
          {/* The links will only appear in the mobile menu via the hamburger icon. */}
        </div>

        {/* Center section: Logo and Tagline */}
        <div className="flex-1 flex justify-center lg:justify-center">
          <Link href="/" className="-m-1.5 p-1.5 text-center" onClick={closeMobileMenu}>
            <span className={`text-5xl font-bold text-teal-500 tracking-wider ${dancingScript.className}`}>Ambiace</span>
            
          </Link>
        </div>

        {/* Right section: Wishlist, Account, Cart */}
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <button className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 rounded-md" aria-label="Wishlist">
            <HeartIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 rounded-md" aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>
          <button className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 rounded-md relative" aria-label="Shopping Cart">
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold">0</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-gray-100/80" onClick={closeMobileMenu} />
          <div className="fixed inset-y-0 right-0 z-[60] h-screen w-full overflow-y-auto bg-gray-100 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between px-6 py-6">
              <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <span className={`text-3xl font-bold text-gray-900 ${dancingScript.className}`}>Ambiace</span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root px-6 pt-6 pb-6">
              {/* Search bar for mobile menu */}
              <form onSubmit={handleSearch} className="mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button type="submit" className="mt-2 w-full px-4 py-2 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors">Search</button>
              </form>
              <div className="divide-y divide-gray-500/10">
                <div className="space-y-2 py-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 