"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building,
  Globe,
  Smartphone,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

function ContactHero() {
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
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 sm:mr-3" />
            <span className="text-white/90 font-medium text-sm sm:text-base">
              Let's Connect
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get In
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Ready to embark on your next adventure? Let's discuss how we can
            create unforgettable experiences together.
          </motion.p>

          <motion.div
            className="text-xl sm:text-2xl font-semibold text-white/90 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            "Your Journey, Our Commitment."
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Multiple ways to reach out and start planning your perfect
                journey with us.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Building,
                  title: "Office Address",
                  content: "Chhaya Complex, Thamel, Kathmandu, Nepal",
                  bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
                  borderColor: "border-purple-200 dark:border-purple-800",
                  textColor: "text-purple-600 hover:text-purple-700",
                },
                {
                  icon: MapPin,
                  title: "Personal Address",
                  content: "Paknajol, Kathmandu, Nepal",
                  bgColor: "bg-gradient-to-r from-pink-500 to-pink-600",
                  borderColor: "border-pink-200 dark:border-pink-800",
                  textColor: "text-pink-600 hover:text-pink-700",
                },
                {
                  icon: Smartphone,
                  title: "Mobile",
                  content: "+977 9707377940",
                  href: "tel:+9779707377940",
                  bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-600",
                  borderColor: "border-indigo-200 dark:border-indigo-800",
                  textColor: "text-indigo-600 hover:text-indigo-700",
                },
                {
                  icon: FaWhatsapp,
                  title: "WhatsApp",
                  content: "+977 9851137393",
                  href: "https://wa.me/9779851137393",
                  bgColor: "bg-gradient-to-r from-green-500 to-green-600",
                  borderColor: "border-green-200 dark:border-green-800",
                  textColor: "text-green-600 hover:text-green-700",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "versatiletkt@gmail.com",
                  href: "mailto:versatiletkt@gmail.com",
                  bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
                  borderColor: "border-purple-200 dark:border-purple-800",
                  textColor: "text-purple-600 hover:text-purple-700",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Sunday - Friday: 9:00 AM - 6:00 PM",
                  bgColor: "bg-gradient-to-r from-pink-500 to-pink-600",
                  borderColor: "border-pink-200 dark:border-pink-800",
                  textColor: "text-pink-600 hover:text-pink-700",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`${item.borderColor} hover:shadow-lg transition-all duration-300`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div
                          className={`p-2 sm:p-3 rounded-xl ${item.bgColor}`}
                        >
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 text-sm sm:text-base">
                            {item.title}
                          </h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              className={`${item.textColor} transition-colors font-medium text-sm sm:text-base`}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 w-10 h-10 sm:w-12 sm:h-12"
                  onClick={() => window.open("#", "_blank")}
                >
                  <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 dark:border-pink-600 dark:text-pink-400 w-10 h-10 sm:w-12 sm:h-12"
                  onClick={() => window.open("#", "_blank")}
                >
                  <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 w-10 h-10 sm:w-12 sm:h-12"
                  onClick={() => window.open("#", "_blank")}
                >
                  <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-green-300 text-green-600 hover:bg-green-50 dark:border-green-600 dark:text-green-400 w-10 h-10 sm:w-12 sm:h-12"
                  onClick={() =>
                    window.open("https://wa.me/9779851137393", "_blank")
                  }
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-purple-200 dark:border-purple-800 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      First Name
                    </label>
                    <Input
                      placeholder="Your first name"
                      className="border-purple-200 dark:border-purple-800 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Last Name
                    </label>
                    <Input
                      placeholder="Your last name"
                      className="border-purple-200 dark:border-purple-800 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-purple-200 dark:border-purple-800 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    className="border-purple-200 dark:border-purple-800 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Subject
                  </label>
                  <Input
                    placeholder="What's this about?"
                    className="border-purple-200 dark:border-purple-800 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your travel plans, questions, or how we can help you..."
                    rows={4}
                    className="border-purple-200 dark:border-purple-800 text-sm sm:text-base"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </Button>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    Or reach out directly via:
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <Button
                      variant="outline"
                      className="border-green-300 text-green-600 hover:bg-green-50 text-sm"
                      onClick={() =>
                        window.open("https://wa.me/9779851137393", "_blank")
                      }
                    >
                      <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-300 text-purple-600 hover:bg-purple-50 text-sm"
                      onClick={() => window.open("tel:+9779707377940")}
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Find Us
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
            Located in the heart of Thamel, Kathmandu's tourism hub
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
            <div className="text-center px-4">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Chhaya Complex, Thamel
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                Kathmandu, Nepal
              </p>
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-sm sm:text-base"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Thamel,Kathmandu,Nepal",
                    "_blank"
                  )
                }
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Open in Maps
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Header transparent />
        <ContactHero />
        <ContactForm />
        <MapSection />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}
