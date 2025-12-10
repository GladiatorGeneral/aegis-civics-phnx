"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, DollarSign, BarChart3 } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Leaders", icon: Users },
    { href: "/finance", label: "Finance", icon: DollarSign },
  ];

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
          <div className="flex items-center gap-1">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
