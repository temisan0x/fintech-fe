import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white mt-16">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
          <Link href="/" className="">
            <Image
              src="/img/footerlogo.png"
              alt="fintechX"
              width={150}
              height={150}
            />
          </Link>
          </div>
        
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#">
            <Image
              src="/img/instagram.png"
              alt="fintechX"
              width={50}
              height={50}
            />
            </Link>
            <Link href="#">
            <Image
              src="/img/twitter.png"
              alt="fintechX"
              width={50}
              height={50}
            />
            </Link>
            <Link href="#">
            <Image
              src="/img/facebook.png"
              alt="fintechX"
              width={50}
              height={50}
            />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-800">
              <li><Link href="#">Trade</Link></li>
              <li><Link href="#">Featured</Link></li>
              <li><Link href="#">Market</Link></li>
              <li><Link href="#">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Crypto Market</h3>
            <ul className="space-y-2 text-gray-800">
              <li><Link href="#">Price Chart</Link></li>
              <li><Link href="#">Market Analysis</Link></li>
              <li><Link href="#">Latest News</Link></li>
              <li><Link href="#">ICO (Initial Coin Offering)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resource</h3>
            <ul className="space-y-2 text-gray-800">
              <li><Link href="#">Guide for Beginners</Link></li>
              <li><Link href="#">Trading Platform</Link></li>
              <li><Link href="#">Digital Wallet</Link></li>
              <li><Link href="#">Blockchain Technology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-800">
              <li><Link href="#">Crypto Discussion Forum</Link></li>
              <li><Link href="#">Discord Group</Link></li>
              <li><Link href="#">Local Meetup Events</Link></li>
              <li><Link href="#">Project Collaboration</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; 2025 FintechX
          </p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
