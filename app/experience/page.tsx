"use client";
import { motion } from "framer-motion";
import {
  Building,
  Mountain,
  Star,
  MapPin,
  Award,
  Users,
  CheckCircle,
  ExternalLink,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

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

function ExperienceHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-24">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 sm:mr-3" />
            <span className="text-white/90 font-medium text-sm sm:text-base">
              Professional Journey
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Professional
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A decade of leadership excellence across multiple ventures in
            Nepal's dynamic tourism and hospitality industry.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                10+
              </div>
              <div className="text-white/60 text-xs sm:text-sm">
                Years Leading
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                3
              </div>
              <div className="text-white/60 text-xs sm:text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                5000+
              </div>
              <div className="text-white/60 text-xs sm:text-sm">
                Clients Served
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const experiences = [
    {
      company: "Orchid Tours and Travels Pvt. Ltd.",
      position: "CEO & Managing Director",
      duration: "June 2014 – Present",
      location: "Chhaya Complex, Thamel",
      description:
        "Spearheaded business growth, strategy, and operations in the travel and tourism sector. Managed customer relations, ticketing, and tour operations with a focus on service excellence.",
      achievements: [
        "Led company growth for over 10 years with consistent profitability",
        "Established strong customer relationships across 50+ countries",
        "Implemented efficient ticketing systems reducing processing time by 60%",
        "Developed comprehensive tour packages for diverse client needs",
        "Maintained 98% customer satisfaction rate",
        "Built a team of 25+ dedicated professionals",
        "Expanded services to include luxury and adventure tourism",
      ],
      icon: Building,
      color: "purple",
      image: "/s10.jpg?height=300&width=400",
    },
    {
      company: "Home of Treks & Extreme Expedition Pvt. Ltd.",
      position: "Director",
      duration: "June 2016 – Present",
      location: "Chhaya Complex, Thamel",
      description:
        "Oversaw trekking and expedition planning, ensuring safety and client satisfaction. Developed international and domestic tour packages.",
      achievements: [
        "Managed 200+ high-altitude expeditions with 100% safety record",
        "Developed specialized adventure tourism packages",
        "Built international client base spanning Europe, America, and Asia",
        "Created sustainable trekking programs supporting local communities",
        "Established partnerships with international adventure travel companies",
        "Trained and certified 15+ professional trekking guides",
        "Pioneered eco-friendly expedition practices",
      ],
      icon: Mountain,
      color: "pink",
      image: "/s7.jpg?height=300&width=400",
    },
    {
      company: "Maruni Resort Pvt. Ltd.",
      position: "Director",
      duration: "June 2024 – Present",
      location: "Ratnanagar, Chitwan, Nepal",
      description:
        "Contributed to resort operations, hospitality management, and guest experience enhancement.",
      achievements: [
        "Enhanced guest experience programs increasing satisfaction by 40%",
        "Improved operational efficiency reducing costs by 25%",
        "Implemented hospitality best practices and staff training programs",
        "Developed eco-tourism initiatives promoting wildlife conservation",
        "Strengthened resort brand positioning in luxury segment",
        "Introduced innovative dining and recreation experiences",
        "Established partnerships with international tour operators",
      ],
      icon: Star,
      color: "indigo",
      image: "/s5.jpg?height=300&width=400",
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
              Career Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Leading transformative growth across multiple ventures in Nepal's
            tourism industry.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div
                    className={`w-full h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-${exp.color}-200 dark:border-${exp.color}-800`}
                  >
                    <img
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Floating Icon */}
                  <div
                    className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-${exp.color}-500 to-${exp.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl`}
                  >
                    <exp.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <div>
                  <Badge
                    variant="outline"
                    className={`border-${exp.color}-300 text-${exp.color}-600 mb-3 sm:mb-4`}
                  >
                    {exp.duration}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {exp.position}
                  </h3>
                  <h4
                    className={`text-lg sm:text-xl font-semibold text-${exp.color}-600 mb-3 sm:mb-4`}
                  >
                    {exp.company}
                  </h4>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {exp.location}
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    {exp.description}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r from-${exp.color}-600 to-${exp.color}-700 hover:from-${exp.color}-700 hover:to-${exp.color}-800 rounded-full px-6 sm:px-8 w-full sm:w-auto`}
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      View Achievements
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center text-xl sm:text-2xl">
                        <exp.icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-${exp.color}-600`}
                        />
                        {exp.company}
                      </DialogTitle>
                      <DialogDescription className="text-base sm:text-lg">
                        {exp.position} • {exp.duration}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Key Achievements & Responsibilities
                      </h4>
                      <div className="grid gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          >
                            <CheckCircle
                              className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-${exp.color}-600 flex-shrink-0`}
                            />
                            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsAndCertifications() {
  const skills = [
    {
      category: "Leadership & Management",
      items: [
        "Strategic Business Planning",
        "Team Leadership & Development",
        "Customer Relationship Management",
        "Operational Excellence",
        "Financial Management",
        "Risk Assessment & Management",
      ],
      icon: Users,
      color: "purple",
    },
    {
      category: "Tourism & Travel",
      items: [
        "Tour Package Development",
        "Destination Management",
        "Adventure Tourism Planning",
        "Cultural Tourism Expertise",
        "Sustainable Tourism Practices",
        "International Market Development",
      ],
      icon: Mountain,
      color: "pink",
    },
    {
      category: "Technical Expertise",
      items: [
        "IATA Certified (2010 - 2nd Batch Nepal)",
        "BSP Handling & Processing",
        "Manual & Electronic Ticketing",
        "Reservation Systems",
        "Travel Documentation",
        "Visa & Immigration Procedures",
      ],
      icon: Award,
      color: "indigo",
    },
    {
      category: "Business Development",
      items: [
        "Market Analysis & Research",
        "Partnership Development",
        "Brand Management",
        "Digital Marketing Strategy",
        "Quality Assurance",
        "Innovation & Growth Strategy",
      ],
      icon: TrendingUp,
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive expertise developed through years of hands-on
            experience in tourism leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`border-${skill.color}-200 dark:border-${skill.color}-800 hover:shadow-2xl transition-all duration-300 h-full`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
                    <div
                      className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 mr-3 sm:mr-4`}
                    >
                      <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-base sm:text-lg">
                      {skill.category}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 sm:gap-3">
                    {skill.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <CheckCircle
                          className={`w-3 h-3 sm:w-4 sm:h-4 text-${skill.color}-600 flex-shrink-0`}
                        />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Header transparent />
        <ExperienceHero />
        <ExperienceTimeline />
        <SkillsAndCertifications />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}
