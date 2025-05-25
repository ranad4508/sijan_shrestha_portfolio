"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  ChevronRight,
  MapPin,
  Phone,
  Building,
  Globe,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sijan Kumar Shrestha
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              CEO & Managing Director with over a decade of expertise in
              tourism, hospitality, and business leadership. Transforming travel
              dreams into unforgettable experiences across Nepal.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://wa.me/9779851137393"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center group text-gray-300 hover:text-purple-400 transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-purple-400 transition-colors" />
                  <span className="group-hover:tracking-wider transition-all text-sm">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center group text-gray-300 hover:text-purple-400 transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-purple-400 transition-colors" />
                  <span className="group-hover:tracking-wider transition-all text-sm">
                    About Me
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="flex items-center group text-gray-300 hover:text-purple-400 transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-purple-400 transition-colors" />
                  <span className="group-hover:tracking-wider transition-all text-sm">
                    Professional Experience
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="flex items-center group text-gray-300 hover:text-purple-400 transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-purple-400 transition-colors" />
                  <span className="group-hover:tracking-wider transition-all text-sm">
                    Gallery & Moments
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center group text-gray-300 hover:text-purple-400 transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-purple-400 transition-colors" />
                  <span className="group-hover:tracking-wider transition-all text-sm">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Companies
            </h3>
            <ul className="space-y-2">
              <li>
                <div className="flex items-start group text-gray-300">
                  <Building className="h-4 w-4 mr-2 mt-0.5 text-purple-400" />
                  <div>
                    <span className="text-sm font-medium">
                      Orchid Tours & Travels
                    </span>
                    <p className="text-xs text-gray-400">
                      CEO & Managing Director
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start group text-gray-300">
                  <Building className="h-4 w-4 mr-2 mt-0.5 text-pink-400" />
                  <div>
                    <span className="text-sm font-medium">
                      Home of Treks & Expedition
                    </span>
                    <p className="text-xs text-gray-400">Director</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start group text-gray-300">
                  <Building className="h-4 w-4 mr-2 mt-0.5 text-indigo-400" />
                  <div>
                    <span className="text-sm font-medium">Maruni Resort</span>
                    <p className="text-xs text-gray-400">Director</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </h3>
            <address className="not-italic text-gray-300 space-y-3">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 mt-0.5 text-purple-400" />
                <div>
                  <p className="text-sm font-medium">Office Address</p>
                  <p className="text-xs text-gray-400">
                    Chhaya Complex, Thamel
                  </p>
                  <p className="text-xs text-gray-400">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-pink-400" />
                <div>
                  <p className="text-sm font-medium">Personal Address</p>
                  <p className="text-xs text-gray-400">
                    Paknajol, Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-400" />
                <a
                  href="tel:+9779707377940"
                  className="hover:text-purple-400 transition-colors text-sm"
                >
                  +977 9707377940
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaWhatsapp className="h-4 w-4 text-green-400" />
                <a
                  href="https://wa.me/9779851137393"
                  className="hover:text-green-400 transition-colors text-sm"
                >
                  +977 9851137393
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <a
                  href="mailto:versatiletkt@gmail.com"
                  className="hover:text-purple-400 transition-colors text-sm"
                >
                  versatiletkt@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Sijan Kumar Shrestha. All
                rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                "Your Journey, Our Commitment."
              </p>
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                Nepal Tourism Expert
              </span>
              <span>•</span>
              <span>IATA Certified</span>
              <span>•</span>
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
