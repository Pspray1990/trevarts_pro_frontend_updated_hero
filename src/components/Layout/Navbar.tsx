// src/components/Layout/Navbar.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, LayoutDashboard } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  // {
  //   label: 'Explore',
  //   dropdown: [
  //     { label: 'Cross-Chain', icon: Globe, href: '#crosschain' },
  //     { label: 'Marketplace', icon: ShoppingBag, href: '#marketplace' },
  //   ]
  // },
  {
    label: 'Staking',
    dropdown: [
      { label: 'DashBoard', icon: LayoutDashboard, href: '/dashboard' },
    ]
  }
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-14 w-18 sm:h-16 sm:w-18 rounded overflow-hidden">
            <img 
              src="/assets/logo.png" 
              alt="TrevArts" 
              className="w-full h-full object-contain dark:invert-0 invert transition-all duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <button className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--foreground)] font-medium py-2 transition-colors">
                {item.label}
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-xl overflow-hidden p-1">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-[var(--muted)] hover:text-[#f53513ff] hover:bg-[var(--background)] rounded-lg transition-colors"
                    >
                      <dropdownItem.icon className="w-4 h-4" />
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Theme Toggle - Desktop */}
          <div className="pl-4 border-l border-[var(--border)]">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[var(--background)]/95 backdrop-blur-xl z-40 border-t border-[var(--border)]">
          <div className="p-6 space-y-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="space-y-2">
                <h3 className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider px-2">
                  {item.label}
                </h3>
                <div className="space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="flex items-center gap-3 px-4 py-3 text-base text-[var(--foreground)] hover:text-[#f53513ff] rounded-xl transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <dropdownItem.icon className="w-5 h-5" />
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}