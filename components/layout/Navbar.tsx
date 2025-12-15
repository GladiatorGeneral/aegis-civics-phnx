"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, DollarSign, BarChart3, Sparkles, Shield } from "lucide-react";
<<<<<<< Updated upstream
=======
import { useState } from "react";
>>>>>>> Stashed changes

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Leaders", icon: Users },
    { href: "/finance", label: "Finance", icon: DollarSign },
  ];

<<<<<<< Updated upstream
  const illumioMenu = {
    label: "Project Phnx",
    icon: Sparkles,
    main: { href: "/phnx", label: "Overview" },
    security: [
      { href: "/illumio/blueprints/food", label: "Food Security" },
      { href: "/illumio/blueprints/medical", label: "Medical Security" },
      { href: "/illumio/blueprints/financial", label: "Financial Security" },
      { href: "/illumio/blueprints/education", label: "Education Security" },
      { href: "/illumio/blueprints/water", label: "Water Security" },
      { href: "/illumio/blueprints/ai", label: "AI Security" },
    ],
  };
=======
  const securityPages = [
    { href: "/illumio/blueprints/ai", label: "AI Security" },
    { href: "/illumio/blueprints/food", label: "Food Security" },
    { href: "/illumio/blueprints/water", label: "Water Security" },
    { href: "/illumio/blueprints/medical", label: "Medical Security" },
    { href: "/illumio/blueprints/financial", label: "Financial Security" },
    { href: "/illumio/blueprints/education", label: "Education Security" },
    { href: "/illumio/blueprints/renewal", label: "Systemic Renewal" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
>>>>>>> Stashed changes

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-blue-500 to-purple-500">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                American Scale
              </span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                    ${isActive 
                      ? "bg-linear-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}

            {/* Project Phnx Dropdown */}
<<<<<<< Updated upstream
            <div className="relative group">
              <Link
                href={illumioMenu.main.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${pathname.startsWith("/phnx") ? "bg-linear-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                <illumioMenu.icon className="w-4 h-4" />
                <span className="font-medium">{illumioMenu.label}</span>
                <svg className="w-3 h-3 ml-1 text-blue-400 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-gray-900 border border-blue-500/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                <div className="py-2">
                  <Link href={illumioMenu.main.href} className="block px-4 py-2 text-sm text-blue-400 hover:bg-blue-500/10 rounded-t-lg">Overview</Link>
                  <div className="border-t border-blue-500/10 my-1" />
                  {illumioMenu.security.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-cyan-200 hover:bg-blue-500/10">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
=======
            <div className="relative">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${
                  pathname.startsWith("/illumio")
                    ? "bg-linear-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setDropdownOpen((open) => !open)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <Sparkles className="w-4 h-4" />
                <span>Project Phnx</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-blue-900 rounded-lg shadow-lg z-50">
                  {securityPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`block px-4 py-2 text-sm rounded-lg transition-all ${
                        pathname === page.href
                          ? "bg-blue-800/40 text-white"
                          : "text-gray-300 hover:bg-blue-900/40 hover:text-white"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
