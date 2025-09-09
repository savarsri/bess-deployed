import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Zap,
  AlertTriangle,
  Target,
  Award,
  Loader2,
} from "lucide-react";
import Countdown from "./components/Countdown";

import { PopupModal } from "react-calendly";
import { ToastContainer, toast } from "react-toastify";

import logo from "./assets/logo.png";
import Services from "./components/Services";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service_of_interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [calendlyModal, setCalendlyModal] = useState(false);

  const pageSettings = {
    backgroundColor: "ffffff", // white background
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "FF6A39", // orange buttons / accents
    textColor: "4d5055", // neutral dark gray for body text
  };

  const services = [
    {
      title: "Feasibility/Bankability Studies",
      description:
        "Comprehensive analysis to determine project viability and secure financing",
      icon: FileText,
    },
    {
      title: "Incentive Advisory",
      description:
        "Expert guidance on SGIP, ITC, and other energy storage incentives",
      icon: TrendingUp,
    },
    {
      title: "Project Strategy",
      description:
        "Strategic planning and roadmap development for successful implementations",
      icon: Target,
    },
    {
      title: "EPC Introductions",
      description:
        "Connect with vetted Engineering, Procurement, and Construction partners",
      icon: Users,
    },
    {
      title: "Vendor Evaluations",
      description:
        "Independent assessment of battery technology providers and solutions",
      icon: Shield,
    },
    {
      title: "Risk Mitigation",
      description:
        "Identify and address potential risks before they impact your project",
      icon: AlertTriangle,
    },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      title: "Managing Partner",
      bio: "15+ years in energy storage consulting with expertise in utility-scale and C&I projects",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Sarah Johnson",
      title: "Senior Consultant",
      bio: "Former utility executive specializing in energy storage integration and regulatory compliance",
      image:
        "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Michael Chen",
      title: "Technical Director",
      bio: "PhD in Electrical Engineering with focus on battery management systems and grid integration",
      image:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Manufacturing Facility",
      description:
        "Reduced peak demand charges by 40% through strategic BESS deployment",
      savings: "$2.3M annually",
      image:
        "https://images.pexels.com/photos/8246487/pexels-photo-8246487.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Multi-Site Retail Chain",
      description: "Implemented resilient energy storage across 15 locations",
      savings: "99.9% uptime",
      image:
        "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Data Center Critical Load",
      description:
        "Designed hybrid UPS-BESS system for mission-critical applications",
      savings: "50% backup cost reduction",
      image:
        "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "case-studies",
        "team",
        "company",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        // "https://script.google.com/macros/s/AKfycbwqk5ST_yaejQXMkEkzRzeQ33VSip2cypOnGXksTmqae5zVAa7JQmLkbwsTW6uqH-hG7g/exec",
        "https://script.google.com/a/macros/bessstrategies.com/s/AKfycbxht31l73PljHeD2cQL_US8NpfMbCIaOAuPviF3Oqhd0X6afJsL76_b3sjhn59g2FX_Cw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const res = await response.text(); // since GAS returns plain text
      console.log("Response:", res);

      toast.success(
        "Thank you for your inquiry! We'll contact you within 24 hours."
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service_of_interest: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeEmail("");
    toast.success("Newsletter Subscribed Successfully!");
  };

  return (
    <Countdown targetDate="2025-09-09T09:00:00-07:00">
      <div className="min-h-screen bg-white">
        <ToastContainer />
        <PopupModal
          url="https://calendly.com/tech-bessstrategies"
          pageSettings={pageSettings}
          // prefill={this.props.prefill}
          onModalClose={() => setCalendlyModal(false)}
          open={calendlyModal}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")!}
        />
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-20" />
                {/* <Battery className="h-8 w-8 text-orange-500" /> */}
                {/* <span className="text-xl font-bold text-purple-700">
                BESS Strategies
              </span> */}
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {[
                  "Home",
                  "Services",
                  "Case Studies",
                  "Team",
                  "Company",
                  "Contact",
                  "FAQs",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                      activeSection === item.toLowerCase().replace(" ", "-")
                        ? "text-orange-500"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  "Home",
                  "Services",
                  "Case Studies",
                  "Team",
                  "Company",
                  "Contact",
                  "FAQs",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 w-full text-left"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-16 bg-gradient-to-br from-purple-50 to-orange-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* Headline 1 */}
                <h1 className="text-4xl md:text-6xl font-bold text-purple-700 mb-6 leading-tight">
                  Energy Storage,{" "}
                  <span className="text-orange-500">
                    Without the Headaches.
                  </span>
                </h1>

                {/* Subline Pain Points */}
                <p className="text-lg text-gray-700 mb-6">
                  We know the challenges are real: underperforming systems,
                  interconnection delays, missed certifications, safety
                  concerns, and improper sizing.{" "}
                  <span className="font-semibold">Sound familiar?</span>
                </p>

                {/* Headline 2 */}
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4">
                  Your Independent Advisor in the Energy Storage Journey.
                </h2>

                {/* Supporting Copy */}
                <p className="text-lg text-gray-700 mb-8">
                  BESS Strategies bridges the gap between problem owners and
                  solution providers. We’re not here to sell you hardware — we
                  ensure you get the right system, the right partners, and the
                  right financial strategy. Our role is to save you time, reduce
                  your risks, and maximize your ROI.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Find Your Solution</span>
                  </button>

                  {/* <button
                    onClick={() => scrollToSection("vendors")}
                    className="border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-purple-700 hover:text-white transition-all"
                  >
                    Join the BESS Network
                  </button> */}

                  <button
                    onClick={() => setCalendlyModal(true)}
                    className="bg-white border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Schedule Consultation</span>
                  </button>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg"
                  alt="Energy Storage Consultation"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-semibold text-purple-700">
                      Expert Guidance
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Independent & Trusted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
                Let's <span className="text-orange-500">Get Started</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to solve your battery energy storage challenges? Schedule
                a consultation or send us your inquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-purple-700 mb-6">
                  Tell Us More About You — Let’s Get Connected.
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                  </div>

                  {/* Role Selection */}
                  <select
                    name="service_of_interest"
                    value={formData.service_of_interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    required
                  >
                    <option value="">Select Your Role</option>
                    <option value="site_owner">Site Owner</option>
                    <option value="vendor">Vendor</option>
                    <option value="consultant">Consultant</option>
                  </select>

                  {/* Short Textbox */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your challenge or interest..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  />

                  {/* CTA Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors
        ${
          loading
            ? "bg-orange-400 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="h-5 w-5" />
                        <span>Connect Me</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-700 mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">Phone</p>
                        {/* <p className="text-gray-600">+1 (555) 123-4567</p> */}
                        <p className="text-gray-600">+1 (510) 320-8334</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">Email</p>
                        <p className="text-gray-600">
                          sales@bessstrategies.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">Office</p>
                        <p className="text-gray-600">
                          5178 Mowry Avenue, Fremont, CA 94538
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">
                    Upcoming Events
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-purple-700">RE+ 2025</p>
                        <p className="text-sm text-gray-600">
                          Visit us at booth #1234
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-purple-700">
                          Battery Show
                        </p>
                        <p className="text-sm text-gray-600">
                          Leading industry discussions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {/* <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
                Our <span className="text-orange-500">Expert Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Independent, expert-driven guidance that saves clients time,
                reduces risks, and maximizes ROI on energy storage investments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors flex items-center space-x-1">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Why Choose BESS Strategies?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-orange-500" />
                    <div className="text-left">
                      <h4 className="font-semibold text-purple-700">
                        Independent
                      </h4>
                      <p className="text-gray-600">Unbiased recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-orange-500" />
                    <div className="text-left">
                      <h4 className="font-semibold text-purple-700">
                        Expert-Driven
                      </h4>
                      <p className="text-gray-600">Deep industry knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-orange-500" />
                    <div className="text-left">
                      <h4 className="font-semibold text-purple-700">
                        ROI Focused
                      </h4>
                      <p className="text-gray-600">Maximize your investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Services setCalendlyModal={setCalendlyModal} scrollToSection={scrollToSection} />

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
                Proven <span className="text-orange-500">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped clients navigate complex energy storage
                challenges and achieve exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="bg-orange-100 px-3 py-1 rounded-full">
                        <span className="text-orange-600 font-semibold text-sm">
                          {study.savings}
                        </span>
                      </div>
                      <button className="text-purple-700 font-semibold hover:text-purple-800 transition-colors flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Battery Agent Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Zap className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Introducing BAMS
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Battery Agentic Model Service - AI-powered intelligence for
                smarter energy storage decisions
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Coming Soon
                </h3>
                <p className="text-white/90 text-lg">
                  Revolutionary AI technology that will transform how you
                  analyze, plan, and optimize battery energy storage systems.
                  Get ready for the future of intelligent energy consulting.
                </p>
              </div>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto space-x-2">
                <Mail className="h-5 w-5" />
                <span>Get Early Access</span>
              </button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* Network Section */}
        <section id="team" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
              Our <span className="text-orange-500">Network of Experts</span>
            </h2>
            <div className="relative bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl shadow-lg p-10 md:p-14">
              <svg
                className="absolute top-6 left-6 w-12 h-12 text-purple-300 opacity-30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6.83A5.17 5.17 0 0 0 7.17 6Zm9.66 0A5.17 5.17 0 0 0 12 11.17V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6.83A5.17 5.17 0 0 0 16.83 6Z" />
              </svg>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed relative z-10">
                “
                <span className="font-medium text-purple-700">
                  BESS Strategies
                </span>{" "}
                brings together a network of seasoned professionals—regulatory
                advisors, technical specialists, and financial strategists—who
                have guided projects across the U.S. and global markets. Our
                strength lies in{" "}
                <span className="font-semibold text-orange-500">
                  collaboration
                </span>
                , where each project benefits from a pool of expertise rather
                than a single perspective.”
              </p>
            </div>
          </div>
        </section>

        {/* <section id="team" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
                Meet Our <span className="text-orange-500">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry veterans with decades of combined experience in energy
                storage, grid integration, and project development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-medium mb-3">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Company Section */}
        <section id="company" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center">
              About <span className="text-orange-500">BESS Strategies</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Mission & Vision - Left */}
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                  Mission & Vision
                </h3>
                <p className="text-lg text-justify">
                  At <strong>BESS Strategies</strong>, our mission is to be the
                  trusted, independent advisor for organizations deploying
                  battery energy storage systems. We believe energy storage is
                  the backbone of the clean energy transition, but the journey
                  from design to deployment is often clouded by compliance
                  hurdles, regulatory delays, and technical uncertainties.
                </p>
                <p className="text-lg font-medium text-gray-800 mt-4">
                  Our vision is clear:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg mt-2">
                  <li>
                    To simplify the complexity of energy storage projects.
                  </li>
                  <li>To open market access for vendors and project owners.</li>
                  <li>
                    To ensure every system is not just installed, but fully
                    certified, reliable, and future-ready.
                  </li>
                </ul>
              </div>

              {/* Our Approach - Right */}
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                  Our Approach
                </h3>
                <p className="text-lg text-justify">
                  The BESS sector demands more than technology—it demands
                  navigation through a maze of regulations, certifications, and
                  operational risks. That’s where we step in.
                </p>
                <p className="text-lg mt-4 text-justify">
                  We work hand-in-hand with system owners, developers, and
                  vendors to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg mt-2">
                  <li>
                    <strong>Decode compliance & regulations:</strong> from fire
                    marshal approvals to interconnection standards.
                  </li>
                  <li>
                    <strong>Streamline certifications:</strong> ensuring smooth
                    paths through testing, UL, and regional authority
                    requirements.
                  </li>
                  <li>
                    <strong>Bridge market gaps:</strong> connecting solution
                    providers with untapped opportunities and customers.
                  </li>
                </ul>
                <p className="text-lg mt-4 text-justify">
                  We are not here to sell hardware. We are here to make your
                  storage project succeed—on time, on budget, and with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
                Frequently Asked{" "}
                <span className="text-orange-500">Questions</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about how BESS Strategies works with
                owners, vendors, and partners.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {[
                {
                  q: "Are you vendor-neutral?",
                  a: "Yes. We don’t sell hardware or take reseller margins. Our role is to align incentives and keep score.",
                },
                {
                  q: "Do you replace the engineer of record?",
                  a: "No. We coordinate scope, evidence, and risk so the EOR can stamp with confidence.",
                },
                {
                  q: "Can you guarantee ITC eligibility or interconnection approval?",
                  a: "No. We guide the process and evidence. Approvals rest with agencies and utilities.",
                },
                {
                  q: "Do you work with tribal entities and public sector owners?",
                  a: "Yes. We tailor procurement, compliance, and engagement to AHJ requirements and community priorities.",
                },
                {
                  q: "Do you do detailed design or PE stamping?",
                  a: "No. We collaborate with your design team and EOR.",
                },
                {
                  q: "What geographies do you cover?",
                  a: "Primarily U.S.; remote support globally where codes and language permit.",
                },
                {
                  q: "What if my project is at idea stage?",
                  a: "Start with a Feasibility & Options Brief to right-size and clarify path.",
                },
                {
                  q: "How do you charge?",
                  a: "Fixed scope or retainer with defined outputs and cadence.",
                },
                {
                  q: "Do you have case studies?",
                  a: "Not yet. We focus on transparent, verifiable deliverables and references when available.",
                },
                {
                  q: "Do you offer project-based packages?",
                  a: "Yes, see our Advisory Packages.",
                },
                {
                  q: "Do vendors pay for membership?",
                  a: "Yes, see our Membership Tiers.",
                },
                {
                  q: "How does Brag Tech choose who to feature?",
                  a: "We assess credibility, clarity of offering, and fit for our audience. Quality over volume.",
                },
                {
                  q: "Will Brag Tech do paid ads or endorsements?",
                  a: "No paid endorsements. We prioritize earned media and factual positioning.",
                },
                {
                  q: "How do you handle confidentiality?",
                  a: "We sign NDAs and maintain strict separation between owner and vendor data.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
                >
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-purple-700">
                    {faq.q}
                    <span className="ml-4 text-orange-500 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src={logo} alt="logo" className="h-20" />
                  {/* <Battery className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">BESS Strategies</span> */}
                </div>
                <p className="text-purple-200">
                  Expert guidance for battery energy storage systems.
                  Independent, trusted, results-driven.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-purple-200">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Feasibility Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Incentive Advisory
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Project Strategy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Risk Mitigation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-purple-200">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-purple-200">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300">
              <p>&copy; 2025 BESS Strategies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Countdown>
  );
}

export default App;
