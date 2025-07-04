// components/Footer.tsx
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12 py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Social */}
        <div>
          <h2 className="text-xl font-bold mb-4">Ecommerce</h2>
          <p className="text-sm text-gray-400 mb-2">Ecommerce for modern minds.</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FaInstagram className="text-lg hover:scale-110 transition-transform duration-200" />
            @Ecommerce.store
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/products" className="hover:text-white">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">📞 +212 600 000 000</p>
          <p className="text-sm text-gray-400">📧 support@Ecommerce.fake</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white">
        &copy; {new Date().getFullYear()} Ecommerce. All rights reserved M'rabet Imane.
      </div>
    </footer>
  );
}
