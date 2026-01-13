// src/components/Layout/Footer.tsx
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[var(--background)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-14 rounded flex items-center justify-center overflow-hidden">
              <img
                src="/assets/logo.png"
                alt="TrevArts Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Description */}
          <p className="text-zinc-500 text-base max-w-md leading-relaxed">
            TrevArts is a digital marketplace dedicated to the creation and sale of <strong className="text-[var(--foreground)]">blockchain-based</strong> digital art and collectibles. It is building the infrastructure to power the next generation of digital ownership and creativity.
          </p>

          {/* Accent Divider */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#f53513ff] to-transparent" />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>© 2024 TrevArts. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[var(--muted)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[var(--muted)] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
