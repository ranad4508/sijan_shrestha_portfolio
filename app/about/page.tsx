"use client";
import { motion } from "framer-motion";
import {
  Users,
  Star,
  CheckCircle,
  Calendar,
  Target,
  Heart,
  Briefcase,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import Link from "next/link";

function WhatsAppFloat() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <Button
        size="lg"
        className="rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
        onClick={() => window.open("https://wa.me/9779851137393", "_blank")}
      >
        <FaWhatsapp className="w-5 h-5 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
      </Button>
    </motion.div>
  );
}

function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl hidden sm:block"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="w-full h-80 sm:h-96 lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                <img
                  src="/s1.jpg?height=700&width=500"
                  alt="Sijan Kumar Shrestha Professional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-2xl border border-purple-200 dark:border-purple-800"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-purple-600 mb-1">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Years
                  </div>
                </div>
              </motion.div>

              {/* <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-2xl border border-pink-200 dark:border-pink-800"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-pink-600 mb-1">
                    3
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Companies
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div>
              <motion.div
                className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mr-2" />
                <span className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-medium">
                  About Me
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                <span className="text-gray-800 dark:text-gray-200">
                  Passionate
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  Tourism Leader
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                With over a decade of experience in tourism, hospitality, and
                business leadership, I am a highly driven professional dedicated
                to delivering exceptional service and unforgettable travel
                experiences.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {[
                {
                  icon: Target,
                  text: "Visionary leader thriving on innovation and adaptability",
                },
                {
                  icon: Users,
                  text: "Ensuring both client satisfaction and organizational growth",
                },
                {
                  icon: Star,
                  text: "Committed to top-tier service at competitive prices",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link href="/experience">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-6 sm:px-8 w-full sm:w-auto"
                >
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Experience
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 rounded-full px-6 sm:px-8 w-full sm:w-auto"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PersonalJourney() {
  const milestones = [
    {
      year: "2010",
      title: "IATA Certification",
      description:
        "Achieved IATA certification as part of the 2nd batch in Nepal, marking the beginning of professional excellence.",
      color: "purple",
    },
    {
      year: "2014",
      title: "Founded Orchid Tours",
      description:
        "Established Orchid Tours and Travels Pvt. Ltd., beginning the journey of transforming travel experiences.",
      color: "pink",
    },
    {
      year: "2016",
      title: "Expanded to Expeditions",
      description:
        "Became Director of Home of Treks & Extreme Expedition, venturing into adventure tourism.",
      color: "indigo",
    },
    {
      year: "2024",
      title: "Hospitality Ventures",
      description:
        "Joined Maruni Resort as Director, expanding expertise into luxury hospitality management.",
      color: "purple",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A decade-long commitment to excellence, innovation, and transforming
            the tourism landscape in Nepal.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full hidden lg:block"></div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className={`w-full lg:w-1/2 ${
                    index % 2 === 0
                      ? "lg:pr-8 lg:text-right"
                      : "lg:pl-8 lg:text-left"
                  }`}
                >
                  <Card
                    className={`border-${milestone.color}-200 dark:border-${milestone.color}-800 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className={`border-${milestone.color}-300 text-${milestone.color}-600`}
                        >
                          {milestone.year}
                        </Badge>
                        <Calendar
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-${milestone.color}-600`}
                        />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                        {milestone.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node - Hidden on mobile */}
                <div className="relative z-10 hidden lg:block">
                  <div
                    className={`w-6 h-6 bg-gradient-to-r from-${milestone.color}-500 to-${milestone.color}-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}
                  ></div>
                </div>

                <div className="w-full lg:w-1/2 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Every journey we craft is infused with genuine passion for creating memorable experiences.",
      color: "purple",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "Transparent, honest, and ethical practices form the foundation of all our relationships.",
      color: "pink",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "Continuous pursuit of perfection in every service we provide to our valued clients.",
      color: "orange",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Collaborative approach ensuring every team member contributes to our collective success.",
      color: "purple",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            The principles that guide every decision and shape every experience
            we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`border-${value.color}-200 dark:border-${value.color}-800 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full`}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`inline-flex p-3 sm:p-4 bg-gradient-to-r from-${value.color}-500 to-${value.color}-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Header />
        <AboutHero />
        <PersonalJourney />
        <ValuesSection />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}
