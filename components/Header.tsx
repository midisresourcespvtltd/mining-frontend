"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import MagazineMenu from "./MagazineMenu";
import ServicesMenu from "./ServicesMenu";

interface HeaderProps {
  prices?: {
    rates: {
      EUR: number;
      USDEUR: number;
      USDXAU: number;
      USDXPT: number;
    };
  };
  NewsMenu?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ NewsMenu }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      setSuccess(true);
      setEmail("");
      setShowModal(false);
      setMenuOpen(false);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Fragment>
      {/* Main Header Container */}
      <div className="w-full bg-black shadow-sm">
        <div className="max-w-[1300px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                className="block w-auto h-8 sm:h-10 md:h-12 lg:h-16"
              src="/assets/images/logo-png.png"
                width={160}
                height={80}
                alt="Logo"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-x-4 xl:gap-x-6 items-center main-menu text-sm font-medium">
              <Link
                href="/about-us"
                className="hover:text-[#ac8a4a] transition-colors duration-200 whitespace-nowrap text-white"
              >
                About Us
              </Link>
              <div className="hover:text-[#ac8a4a] transition-colors duration-200 whitespace-nowrap text-white">{NewsMenu && NewsMenu}</div>
              <Link
                href="/morning-chatter"
                className="hover:text-[#ac8a4a] transition-colors duration-200 whitespace-nowrap text-white"
              >
                Morning Chatter
              </Link>
              <div className="hover:text-[#ac8a4a] transition-colors duration-200 whitespace-nowrap text-white">
                <MagazineMenu />
              </div>
              <div className="hover:text-[#ac8a4a] transition-colors duration-200 whitespace-nowrap text-white">
                <ServicesMenu />
              </div>
              <Link
                href="/contact-us"
                className="hover:text-[#ac8a4a] transition-colors duration-200 whitespace-nowrap text-white"
              >
                Contact us
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Subscribe Button */}
              <button
                className="common-btn hidden lg:inline-block px-4 py-2 bg-[#ac8a4a] text-white rounded hover:bg-[#8a6a2a] transition-colors duration-200 text-sm whitespace-nowrap"
                onClick={() => setShowModal(true)}
              >
                Subscribe
              </button>

              {/* Mobile/Tablet Subscribe Button */}
              {/* <button
                className="lg:hidden px-3 py-1.5 sm:px-4 sm:py-2 bg-[#ac8a4a] text-white rounded hover:bg-[#8a6a2a] transition-colors duration-200 text-xs sm:text-sm whitespace-nowrap"
                onClick={() => setShowModal(true)}
              >
                Subscribe
              </button> */}

              {/* Hamburger Menu Button */}
              <button
                className="lg:hidden p-1.5 sm:p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ac8a4a] focus:ring-offset-2 transition-all duration-200"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Menu Panel */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="bg-white border-t border-gray-200 py-4 space-y-1">
              <Link
                href="/about-us"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#ac8a4a] hover:bg-gray-50 transition-colors duration-200 rounded-md"
              >
                About Us
              </Link>

              {NewsMenu && (
                <div className="px-4 py-2 font-medium text-gray-700">
                  {NewsMenu}
                </div>
              )}

              <Link
                href="/morning-chatter"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:text-[#ac8a4a] hover:bg-gray-50 transition-colors duration-200 rounded-md"
              >
                Morning Chatter
              </Link>

              <div className="px-4 py-2 font-medium text-gray-700">
                <MagazineMenu />
              </div>

              <div className="px-4 py-2 font-medium text-gray-700 ">
                <ServicesMenu />
              </div>

              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#ac8a4a] hover:bg-gray-50 transition-colors duration-200 rounded-md"
              >
                Contact us
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Border separator */}
      <div className="border-t border-[#ddd] py-2 sm:py-3">
        <div className="max-w-[1300px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Additional content if needed */}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3 sm:p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm sm:max-w-md mx-auto relative overflow-y-auto max-h-[90vh] transform transition-all duration-300">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full transition-all duration-200"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <Image
                  className="w-auto h-12 sm:h-16"
                  src="/assets/images/footer-logo-new.png"
                  width={160}
                  height={80}
                  alt="Logo"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-center mt-4 mb-2 text-gray-900">
                Discover more from Mining's Substack
              </h3>

              {/* Description */}
              <p className="text-center text-gray-700 mb-2 text-sm sm:text-base px-2">
                Mining Discover is a digital community for the mining industry
                that connects the world's largest #mining brands
              </p>

              {/* Subscriber count */}
              <p className="text-center text-gray-600 mb-4 text-sm font-medium">
                Over 13,000 subscribers
              </p>

              {/* Form */}
              <form
                className="form-group flex flex-col gap-3 mb-4"
                onSubmit={handleSubscribe}
              >
                <input
                  className="border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ac8a4a] focus:border-transparent transition-all duration-200"
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                />
                <button
                  className="bg-[#ac8a4a] text-white rounded-md px-3 py-2.5 font-medium hover:bg-[#8a6a2a] focus:outline-none focus:ring-2 focus:ring-[#ac8a4a] focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {/* Success/Error Messages */}
              {success && (
                <div className="text-green-600 text-center mb-3 text-sm font-medium bg-green-50 py-2 px-3 rounded-md">
                  Thank you for subscribing!
                </div>
              )}
              {error && (
                <div className="text-red-600 text-center mb-3 text-sm font-medium bg-red-50 py-2 px-3 rounded-md">
                  {error}
                </div>
              )}

              {/* Terms */}
              <p className="text-xs text-gray-500 mb-3 text-center leading-relaxed">
                By Subscribing, I agree to Substack's{" "}
                <a
                  href="#"
                  className="underline hover:text-[#ac8a4a] transition-colors duration-200"
                >
                  Terms of Use
                </a>{" "}
                and acknowledge its{" "}
                <a
                  href="#"
                  className="underline hover:text-[#ac8a4a] transition-colors duration-200"
                >
                  Information collection Notice
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline hover:text-[#ac8a4a] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </p>

              {/* Sign in link */}
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="#"
                  className="underline text-[#ac8a4a] hover:text-[#8a6a2a] transition-colors duration-200 font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
