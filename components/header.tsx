"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 hidden xl:block ${
          transparent && !scrolled
            ? "bg-white/10 backdrop-blur-sm border-white/20"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-purple-200/50 dark:border-purple-800/50"
        } rounded-full px-8 py-4 shadow-2xl border`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`transition-all duration-200 font-medium text-lg hover:scale-105 ${
                isActive(item.href)
                  ? "text-purple-600 dark:text-purple-400"
                  : transparent && !scrolled
                  ? "text-white/90 hover:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile/Tablet Navigation Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 xl:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-4 transition-all duration-300 ${
            transparent && !scrolled
              ? "bg-white/10 backdrop-blur-sm border-b border-white/20"
              : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-purple-200/50 dark:border-purple-800/50"
          } shadow-lg`}
        >
          {/* Full Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg sm:text-xl ${
                  transparent && !scrolled
                    ? "text-white"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Sijan Kumar
              </span>
              <span
                className={`text-xs sm:text-sm ${
                  transparent && !scrolled
                    ? "text-white/80"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Travel Expert
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <ModeToggle />

            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-full transition-all duration-200 ${
                transparent && !scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="fixed top-[73px] sm:top-[81px] left-0 right-0 z-50 mx-4 sm:mx-6 rounded-2xl shadow-2xl border overflow-hidden backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-purple-200/50 dark:border-purple-800/50"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="py-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-4 transition-all duration-200 font-medium text-lg border-l-4 hover:pl-8 ${
                          isActive(item.href)
                            ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-500"
                            : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 border-transparent hover:border-purple-300"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Contact Button in Mobile Menu */}
                  <motion.div
                    className="px-6 pt-4 pb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-3 font-semibold shadow-lg"
                      onClick={() => {
                        setIsOpen(false);
                        window.open("https://wa.me/9779851137393", "_blank");
                      }}
                    >
                      WhatsApp Contact
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
