"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Phone, ArrowDown, Sparkles, Globe, Users, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import Link from "next/link";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transform-origin-0 z-50"
      style={{ scaleX }}
    />
  );
}

function WhatsAppFloat() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="lg"
          className="rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/30 transition-all duration-300 group"
          onClick={() => window.open("https://wa.me/9779851137393", "_blank")}
        >
          <FaWhatsapp className="h-10 w-10" />
        </Button>
      </motion.div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/s2.jpg?height=1080&width=1920')] opacity-10"></div>

        {/* Floating Elements - Responsive sizes */}
        <motion.div
          className="absolute top-10 left-5 sm:top-20 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-500/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -75, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-indigo-500/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-24 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1.5 sm:mr-2" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                CEO & Managing Director
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Sijan
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Kumar
              </span>
              <br />
              Shrestha
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Transforming travel dreams into unforgettable experiences with
              over a decade of expertise in tourism and hospitality.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12 justify-center lg:justify-start px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group text-sm sm:text-base w-full sm:w-auto"
                  onClick={() =>
                    window.open("https://wa.me/9779851137393", "_blank")
                  }
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/gallery">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-gray-800 hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto"
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats - Responsive grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-sm sm:max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">
                  10+
                </div>
                <div className="text-white/60 text-xs sm:text-sm">Years</div>
              </motion.div>
              {/* <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">
                  3
                </div>
                <div className="text-white/60 text-xs sm:text-sm">
                  Companies
                </div>
              </motion.div> */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">
                  1000+
                </div>
                <div className="text-white/60 text-xs sm:text-sm">Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[500px] xl:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm sm:max-w-md lg:max-w-none"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent z-10"></div>
                <img
                  src="/s10.jpg?height=600&width=500"
                  alt="Sijan Kumar Shrestha"
                  className="w-full h-full object-cover"
                />

                {/* Floating Cards - Responsive positioning */}
                <motion.div
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-purple-600" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      IATA
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-600" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      Expert
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements - Responsive sizes */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 w-8 h-8 sm:w-12 sm:h-12 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-lg sm:blur-xl"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 w-10 h-10 sm:w-16 sm:h-16 lg:w-32 lg:h-32 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-20 blur-lg sm:blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuickIntro() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10"
            whileInView={{ scale: [0.9, 1.02, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              "Your Journey,
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              Our Commitment."
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4 sm:px-6 lg:px-0 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Leading Nepal's premier travel experiences with passion, innovation,
            and unwavering dedication to excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-sm sm:text-base font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Learn More About Me
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-sm sm:text-base font-semibold transition-all duration-300"
                >
                  View Gallery
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <ScrollProgress />
        <Header transparent />
        <HeroSection />
        <QuickIntro />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}
