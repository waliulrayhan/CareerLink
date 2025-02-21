"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaUserTie, FaBuilding, FaSearch, FaRocket, FaRegFileAlt, FaRobot, FaComments } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-2xl text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CareerLink
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                <FaRocket className="text-sm" />
                Features
              </a>
              <a href="#how-it-works" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                <FaSearch className="text-sm" />
                How It Works
              </a>
              <a href="#signup" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity">
                <FaUserTie className="text-sm" />
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent flex items-center justify-center gap-4">
            <FaRobot className="text-purple-600" />
            Find & Hire Smarter with AI
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Seamlessly connect job seekers and companies with AI-driven efficiency. Optimize resumes, publish job posts, and hire top talent—all in one platform.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#signup"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90"
            >
              <FaUserTie />
              Sign Up for Free
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#post-job"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50"
            >
              <FaBriefcase />
              Post a Job Now
            </motion.a>
          </div>
        </motion.div>

        {/* Key Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 text-3xl">
                <FaRegFileAlt />
              </div>
              <h2 className="text-xl font-bold">
                AI-Optimized Resumes
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Upload resumes & certificates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  AI enhances your profile
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 text-3xl">
                <FaBriefcase />
              </div>
              <h2 className="text-xl font-bold">
                AI-Assisted Job Posting
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  AI-crafted job descriptions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Instant job publishing
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 text-3xl">
                <FaRobot />
              </div>
              <h2 className="text-xl font-bold">
                AI-Driven Matching
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Smart skill analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Automated AI interviews
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 text-3xl">
                <FaComments />
              </div>
              <h2 className="text-xl font-bold">
                Seamless Communication
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Direct messaging
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Pre-screened candidates
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                  <FaUserTie className="text-purple-600" />
                  For Job Seekers
                </h2>
                <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                    'Register & Complete Profile',
                    'Upload Resume & Certificates',
                    'AI Optimizes Your Resume',
                    'Apply to AI-Suggested Jobs',
                    'Get AI-Screened & Get Hired!'
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="text-purple-600 text-2xl mb-4">{index + 1}</div>
                      <p className="text-gray-700">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                  <FaBuilding className="text-purple-600" />
                  For Companies
                </h2>
                <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                    'Register & Complete Profile',
                    'AI-Assisted Job Posting',
                    'AI Generates Best Matches',
                    'AI-Screened Applicants',
                    'Shortlist & Hire'
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="text-purple-600 text-2xl mb-4">{index + 1}</div>
                      <p className="text-gray-700">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-3">
              <FaRocket className="text-purple-600" />
              Why Choose Us?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'AI-Powered Efficiency',
                'Verified & Secure Platform',
                'Personalized Job Matches',
                'Seamless Hiring Process'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-green-500 text-2xl mb-4">✓</div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        >
          <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
                <FaRocket />
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl opacity-90">
                Join Now & Experience the Future of Hiring!
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#signup"
                className="flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold hover:bg-opacity-90"
              >
                <FaUserTie />
                Sign Up Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#hire"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600"
              >
                <FaBriefcase />
                Hire Top Talent
              </motion.a>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-purple-400" />
                <h3 className="text-xl font-bold">CareerLink</h3>
              </div>
              <p className="text-gray-400">Revolutionizing recruitment with AI-powered solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <FaUserTie className="text-purple-400" />
                For Job Seekers
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Browse Jobs</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Create Profile</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Career Resources</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <FaBuilding className="text-purple-400" />
                For Companies
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Post Jobs</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Talent Search</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Recruitment Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <FaComments className="text-purple-400" />
                Contact
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Support</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 CareerLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
