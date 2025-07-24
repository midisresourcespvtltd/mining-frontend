'use client';

import Image from "next/image";
import { Fragment, useState } from "react";
import MenuItem from "./MenuItem";
import MagazineMenu from "./MagazineMenu";
import ServicesMenu from "./ServicesMenu";
import Link from "next/link";
import { set } from "mongoose";

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
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Fragment>
      {/* <div className="bg-[#ac8a4a] py-2 header">
        <div className="max-w-[1300px] m-auto">
          <div className="flex items-center justify-between">
            <ul className="flex gap-x-6 items-center  ">
              <li>
                <span className="text-white text-xs flex items-center gap-x-1 ">
                  R/€ = {prices?.rates?.EUR?.toFixed(4)} Change: -0.0089{" "}
                  <Image
                    src="/assets/images/index_down.png"
                    width={10}
                    height={10}
                    alt=""
                  />
                </span>
              </li>
              <li>
                <span className="text-white text-xs flex items-center gap-x-1 ">
                  R/$ = {prices?.rates?.USDEUR?.toFixed(4)}{" "}
                  <Image
                    src="/assets/images/index_up.png"
                    width={10}
                    height={10}
                    alt=""
                  />
                </span>
              </li>

              <li>
                <span className="text-white text-xs flex items-center gap-x-1 ">
                  Au {prices?.rates?.USDXAU?.toFixed(2)} $/oz{" "}
                  <Image
                    src="/assets/images/index_down.png"
                    width={10}
                    height={10}
                    alt=""
                  />
                </span>
              </li>

              <li>
                <span className="text-white text-xs flex items-center gap-x-1 ">
                  Pt {prices?.rates?.USDXPT?.toFixed(2)} $/oz{" "}
                  <Image
                    src="/assets/images/index_up.png"
                    width={10}
                    height={10}
                    alt=""
                  />
                </span>
              </li>
            </ul>
            <ul className="flex gap-x-6 items-center ">
              <li>
                <a href="#">
                  <Image
                    className=""
                    src="/assets/images/soctwo.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    className=""
                    src="/assets/images/socthree.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    className=""
                    src="/assets/images/socfour.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    className=""
                    src="/assets/images/socfive.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="max-w-[1300px] m-auto">
        <div className="flex items-center justify-between py-3">
          <Link href='/'>
         <Image
                       className="m-auto"
                       src="/assets/images/footer-logo-new.png"
                       width={200}
                       height={100}
                       alt=""
                     />
          </Link>
          <ul className="flex gap-x-6 items-center main-menu">
            <li>
              <a href="/about-us">About Us</a>
            </li>
            {NewsMenu ? NewsMenu : <></>}
            <li>
              <a href="/morning-chatter">Morning Chatter</a>
            </li>
            <MagazineMenu />
            <ServicesMenu />
            <li>
              <a href="/contact-us">Contact us</a>
            </li>
          </ul>
          <button className="common-btn" onClick={() => setShowModal(true)}>Subscribe</button>
        </div>
      </div>
      <div className="border-t-[1px] border-[#ddd] py-3">
        <div className="max-w-[1300px] m-auto">
          {/* <div className="flex items-center justify-center">
            <ul className="flex gap-x-6 items-center main-menu">
              <li>
                <a href="#">AFRICA</a>
              </li>
              <li>
                <a href="#">AMERICAS</a>
              </li>
              <li>
                <a href="#">AUSTRALASIA</a>
              </li>
              <li>
                <a href="#">EUROPE</a>
              </li>
            </ul>
          </div> */}
        </div>
         {/* <button
          className="fixed bottom-8 right-8 z-50 bg-[#ac8a4a] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#8a6a2a] transition"
          onClick={() => setShowModal(true)}
        >
          Subscribe to Substack
        </button> */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-dialog bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <Image
                className="m-auto"
                src="/assets/images/footer-logo-new.png"
                width={200}
                height={100}
                alt=""
              />
              <h3 className="text-xl font-bold text-center mt-4 mb-2">
                Discover more from Mining's Substack
              </h3>
              <p className="text-center text-gray-700 mb-2">
                Mining Discover is a digital community for the mining industry
                that connects the world's largest #mining brands
              </p>
              <p className="text-center text-gray-600 mb-4">
                Over 13,000 subscribers
              </p>
              <form className="form-group flex flex-col gap-2 mb-4" onSubmit={handleSubscribe}>
                <input
                  className="border rounded px-3 py-2"
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                />
                <input
                  className="bg-[#ac8a4a] text-white rounded px-3 py-2 cursor-pointer hover:bg-[#8a6a2a]"
                  type="submit"
                  value={submitting ? "Subscribing..." : "Subscribe"}
                  disabled={submitting}
                />
              </form>
              {success && <div className="text-green-600 text-center mb-2">Thank you for subscribing!</div>}
              {error && <div className="text-red-600 text-center mb-2">{error}</div>}
              <h6 className="text-xs text-gray-500 mb-2">
                By Subscribing, I agree to Substack's{" "}
                <a href="#" className="underline">
                  Terms of Use
                </a>{" "}
                and acknowledge its{" "}
                <a href="#" className="underline">
                  Information collection Notice
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </h6>
              <p className="account text-center text-sm">
                Already have an account?{" "}
                <a href="#" className="underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Header;
