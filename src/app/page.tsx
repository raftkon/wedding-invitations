"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Heart,
  MapPin,
  Calendar,
  Users,
  Mail,
  Phone,
  Globe,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const translations = {
  en: {
    // Header
    templates: "Templates",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Create Beautiful",
    heroTitleAccent: "Wedding Invitations",
    heroDescription:
      "Design stunning, personalized wedding websites that capture your love story. Share your special day with elegant invitations that your guests will treasure.",
    startCreating: "Start Creating",
    viewTemplates: "View Templates",
    happyCouples: "10,000+ Happy Couples",
    freeToStart: "Free to Start",

    // Templates Section
    templatesTitle: "Choose Your Perfect Template",
    templatesDescription:
      "Select from our collection of beautifully designed templates, each crafted to tell your unique love story.",
    classicElegance: "Classic Elegance",
    classicDescription: "Timeless design with sophisticated typography",
    modernMinimalist: "Modern Minimalist",
    modernDescription: "Clean lines and contemporary aesthetics",
    rusticRomance: "Rustic Romance",
    rusticDescription: "Warm and cozy with natural elements",

    // About Section
    aboutTitle: "About WeddingInvite",
    aboutP1:
      "We believe every love story deserves to be told beautifully. Founded by a team of designers and developers who understand the importance of your special day, WeddingInvite makes it easy to create stunning wedding websites that capture your unique journey together.",
    aboutP2:
      "Our platform combines elegant design with user-friendly tools, allowing you to share your wedding details, love story, and important information with family and friends in a way that's both personal and memorable.",
    aboutP3:
      "From intimate gatherings to grand celebrations, we're here to help you create the perfect digital invitation that sets the tone for your unforgettable day.",
    happyCoupleStat: "Happy Couples",
    templatesStat: "Beautiful Templates",

    // Contact Section
    contactTitle: "Get in Touch",
    contactDescription:
      "Have questions about creating your wedding website? We'd love to help make your special day perfect.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    weddingDate: "Wedding Date (Optional)",
    message: "Message",
    messagePlaceholder:
      "Tell us about your wedding or any questions you have...",
    sendMessage: "Send Message",

    // Footer
    footerDescription:
      "Creating beautiful wedding websites for couples around the world.",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    support: "Support",
    helpCenter: "Help Center",
    contactUs: "Contact Us",
    faq: "FAQ",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved.",
  },
  gr: {
    // Header
    templates: "Πρότυπα",
    about: "Σχετικά",
    contact: "Επικοινωνία",

    // Hero Section
    heroTitle: "Δημιουργήστε Όμορφες",
    heroTitleAccent: "Προσκλήσεις Γάμου",
    heroDescription:
      "Σχεδιάστε εκπληκτικές, εξατομικευμένες ιστοσελίδες γάμου που αποτυπώνουν την ιστορία αγάπης σας. Μοιραστείτε την ξεχωριστή σας μέρα με κομψές προσκλήσεις που οι καλεσμένοι σας θα θησαυρίσουν.",
    startCreating: "Ξεκινήστε τη Δημιουργία",
    viewTemplates: "Δείτε Πρότυπα",
    happyCouples: "10.000+ Ευτυχισμένα Ζευγάρια",
    freeToStart: "Δωρεάν Έναρξη",

    // Templates Section
    templatesTitle: "Επιλέξτε το Τέλειο Πρότυπό σας",
    templatesDescription:
      "Επιλέξτε από τη συλλογή μας όμορφα σχεδιασμένων προτύπων, καθένα από τα οποία είναι κατασκευασμένο για να αφηγηθεί τη μοναδική ιστορία αγάπης σας.",
    classicElegance: "Κλασική Κομψότητα",
    classicDescription: "Διαχρονικός σχεδιασμός με εκλεπτυσμένη τυπογραφία",
    modernMinimalist: "Μοντέρνος Μινιμαλισμός",
    modernDescription: "Καθαρές γραμμές και σύγχρονη αισθητική",
    rusticRomance: "Ρουστίκ Ρομαντισμός",
    rusticDescription: "Ζεστό και άνετο με φυσικά στοιχεία",

    // About Section
    aboutTitle: "Σχετικά με το WeddingInvite",
    aboutP1:
      "Πιστεύουμε ότι κάθε ιστορία αγάπης αξίζει να αφηγηθεί όμορφα. Ιδρυμένη από μια ομάδα σχεδιαστών και προγραμματιστών που κατανοούν τη σημασία της ξεχωριστής σας μέρας, το WeddingInvite κάνει εύκολη τη δημιουργία εκπληκτικών ιστοσελίδων γάμου που αποτυπώνουν το μοναδικό σας ταξίδι μαζί.",
    aboutP2:
      "Η πλατφόρμα μας συνδυάζει κομψό σχεδιασμό με φιλικά προς το χρήστη εργαλεία, επιτρέποντάς σας να μοιραστείτε τις λεπτομέρειες του γάμου σας, την ιστορία αγάπης και σημαντικές πληροφορίες με την οικογένεια και τους φίλους με τρόπο που είναι τόσο προσωπικός όσο και αξιομνημόνευτος.",
    aboutP3:
      "Από οικείες συγκεντρώσεις έως μεγάλους εορτασμούς, είμαστε εδώ για να σας βοηθήσουμε να δημιουργήσετε την τέλεια ψηφιακή πρόσκληση που θα δώσει τον τόνο για την αξέχαστη μέρα σας.",
    happyCoupleStat: "Ευτυχισμένα Ζευγάρια",
    templatesStat: "Όμορφα Πρότυπα",

    // Contact Section
    contactTitle: "Επικοινωνήστε μαζί μας",
    contactDescription:
      "Έχετε ερωτήσεις σχετικά με τη δημιουργία της ιστοσελίδας γάμου σας; Θα θέλαμε να βοηθήσουμε να κάνουμε την ξεχωριστή σας μέρα τέλεια.",
    firstName: "Όνομα",
    lastName: "Επώνυμο",
    email: "Email",
    weddingDate: "Ημερομηνία Γάμου (Προαιρετικό)",
    message: "Μήνυμα",
    messagePlaceholder:
      "Πείτε μας για τον γάμο σας ή οποιεσδήποτε ερωτήσεις έχετε...",
    sendMessage: "Αποστολή Μηνύματος",

    // Footer
    footerDescription:
      "Δημιουργούμε όμορφες ιστοσελίδες γάμου για ζευγάρια σε όλο τον κόσμο.",
    product: "Προϊόν",
    features: "Χαρακτηριστικά",
    pricing: "Τιμολόγηση",
    support: "Υποστήριξη",
    helpCenter: "Κέντρο Βοήθειας",
    contactUs: "Επικοινωνήστε μαζί μας",
    faq: "Συχνές Ερωτήσεις",
    privacyPolicy: "Πολιτική Απορρήτου",
    termsOfService: "Όροι Χρήσης",
    allRightsReserved: "Όλα τα δικαιώματα διατηρούνται.",
  },
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export default function LandingPage() {
  const [language, setLanguage] = useState<"en" | "gr">("gr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "gr" : "en");
  };

  // Add smooth scroll behavior to html
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b border-rose-100 bg-white/80 backdrop-blur-md"
      >
        <Link href="/" className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <Heart className="h-6 w-6 text-rose-400 mr-2" />
            <span className="text-xl font-semibold text-gray-800">
              WeddingInvite
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("templates")}
            className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors"
          >
            {t.templates}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors"
          >
            {t.about}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors"
          >
            {t.contact}
          </motion.button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "ΕΛ" : "EN"}
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "ΕΛ" : "EN"}
            </Button>
          </motion.div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-6 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("templates")}
                  className="text-left text-lg font-medium text-gray-600 hover:text-rose-500 transition-colors py-2"
                >
                  {t.templates}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("about")}
                  className="text-left text-lg font-medium text-gray-600 hover:text-rose-500 transition-colors py-2"
                >
                  {t.about}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-lg font-medium text-gray-600 hover:text-rose-500 transition-colors py-2"
                >
                  {t.contact}
                </motion.button>
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex gap-8 justify-center items-center">
              {/* <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center"> */}
              <motion.div
                variants={fadeInLeft}
                className="flex flex-col justify-center space-y-6 text-center"
              >
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800"
                  >
                    {t.heroTitle}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-rose-500 block"
                    >
                      {t.heroTitleAccent}
                    </motion.span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed"
                  >
                    {t.heroDescription}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex justify-center gap-4"
                >
                  <motion.div variants={scaleOnHover}>
                    <Button
                      size="lg"
                      className="bg-rose-500 hover:bg-rose-600 text-white px-8 w-full sm:w-auto"
                      asChild
                    >
                      <Link href="/create-template">{t.startCreating}</Link>
                    </Button>
                  </motion.div>
                  <motion.div variants={scaleOnHover}>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => scrollToSection("templates")}
                      className="border-rose-200 text-rose-600 hover:bg-rose-50 px-8 bg-transparent w-full sm:w-auto"
                    >
                      {t.viewTemplates}
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex justify-center items-center gap-4 sm:gap-6 text-sm text-gray-500"
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{t.happyCouples}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>{t.freeToStart}</span>
                  </div>
                </motion.div>
              </motion.div>
              {/* <motion.div
                variants={fadeInRight}
                className="mx-auto aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 p-6 md:p-8 lg:order-last max-w-md lg:max-w-none"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full w-full bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-center items-center text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <Heart className="h-12 md:h-16 w-12 md:w-16 text-rose-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    {language === "en" ? "Sarah & James" : "Σάρα & Γιάννης"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === "en" ? "June 15, 2024" : "15 Ιουνίου, 2024"}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {language === "en"
                        ? "Napa Valley, CA"
                        : "Νάπα Βάλεϊ, Καλιφόρνια"}
                    </span>
                  </div>
                </motion.div>
              </motion.div> */}
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section
          id="templates"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
                {t.templatesTitle}
              </h2>
              <p className="max-w-[900px] text-gray-600 text-lg md:text-xl">
                {t.templatesDescription}
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            >
              {/* Template 1 - Classic Elegance */}
              <motion.div variants={fadeInUp}>
                <Link href={`/template/classic-elegance?lang=${language}`}>
                  <motion.div variants={scaleOnHover}>
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-rose-100 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gradient-to-b from-rose-50 to-rose-100 p-4 md:p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-white/20 backdrop-blur-sm"
                            whileHover={{ opacity: 0.3 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="relative z-10">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="w-12 h-12 md:w-16 md:h-16 bg-rose-200 rounded-full flex items-center justify-center mb-4"
                            >
                              <Heart className="h-6 w-6 md:h-8 md:w-8 text-rose-600" />
                            </motion.div>
                            <h3 className="text-lg md:text-2xl font-serif text-gray-800 mb-2">
                              {language === "en"
                                ? "Emma & Michael"
                                : "Έμμα & Μιχάλης"}
                            </h3>
                            <div className="w-12 md:w-16 h-px bg-rose-300 mx-auto mb-3"></div>
                            <p className="text-sm md:text-base text-gray-600 mb-4">
                              {language === "en"
                                ? "September 22, 2024"
                                : "22 Σεπτεμβρίου, 2024"}
                            </p>
                            <div className="flex items-center justify-center text-gray-500 text-xs md:text-sm">
                              <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                              <span>
                                {language === "en"
                                  ? "Tuscany, Italy"
                                  : "Τοσκάνη, Ιταλία"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                            {t.classicElegance}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600">
                            {t.classicDescription}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Template 2 - Modern Minimalist */}
              <motion.div variants={fadeInUp}>
                <Link href={`/template/modern-minimalist?lang=${language}`}>
                  <motion.div variants={scaleOnHover}>
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-amber-100 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-6 flex flex-col justify-center items-center text-center relative">
                          <div className="w-full max-w-xs">
                            <h3 className="text-xl md:text-3xl font-light text-gray-800 mb-4 md:mb-6">
                              {language === "en"
                                ? "Alex & Jordan"
                                : "Άλεξ & Ιορδάνης"}
                            </h3>
                            <div className="space-y-3 md:space-y-4">
                              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm md:text-base">
                                <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                <span>
                                  {language === "en"
                                    ? "October 14, 2024"
                                    : "14 Οκτωβρίου, 2024"}
                                </span>
                              </div>
                              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm md:text-base">
                                <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                                <span>
                                  {language === "en"
                                    ? "Brooklyn, NY"
                                    : "Μπρούκλιν, Νέα Υόρκη"}
                                </span>
                              </div>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="mt-4 md:mt-6 w-10 h-10 md:w-12 md:h-12 bg-amber-200 rounded-full mx-auto flex items-center justify-center"
                            >
                              <Heart className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                            </motion.div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                            {t.modernMinimalist}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600">
                            {t.modernDescription}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Template 3 - Rustic Romance */}
              <motion.div variants={fadeInUp}>
                <Link href={`/template/rustic-romance?lang=${language}`}>
                  <motion.div variants={scaleOnHover}>
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-orange-100 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gradient-to-b from-orange-50 to-amber-50 p-4 md:p-6 flex flex-col justify-center items-center text-center relative">
                          <motion.div
                            whileHover={{ rotate: 5 }}
                            className="border-2 border-orange-200 border-dashed p-4 md:p-6 w-full max-w-xs"
                          >
                            <div className="flex justify-center mb-4">
                              <motion.div
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: "reverse",
                                }}
                              >
                                <Heart className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                              </motion.div>
                            </div>
                            <h3 className="text-lg md:text-2xl font-serif text-gray-800 mb-3">
                              {language === "en"
                                ? "Lily & David"
                                : "Λίλη & Δαβίδ"}
                            </h3>
                            <div className="text-orange-600 text-sm mb-3">
                              ♦ ♦ ♦
                            </div>
                            <p className="text-sm md:text-base text-gray-600 mb-2">
                              {language === "en"
                                ? "November 5, 2024"
                                : "5 Νοεμβρίου, 2024"}
                            </p>
                            <div className="flex items-center justify-center text-gray-500 text-xs md:text-sm">
                              <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                              <span>
                                {language === "en"
                                  ? "Aspen, Colorado"
                                  : "Άσπεν, Κολοράντο"}
                              </span>
                            </div>
                          </motion.div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                            {t.rusticRomance}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600">
                            {t.rusticDescription}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-amber-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
                  {t.aboutTitle}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {t.aboutP1}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {t.aboutP2}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {t.aboutP3}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-6 pt-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold text-rose-500 mb-1">
                      10,000+
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {t.happyCoupleStat}
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold text-rose-500 mb-1">
                      50+
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {t.templatesStat}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInRight} className="mx-auto">
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl p-6 md:p-8 max-w-md">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="h-full w-full bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-center items-center"
                  >
                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 gap-3 md:gap-4 w-full"
                    >
                      <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="aspect-square bg-rose-100 rounded-lg flex items-center justify-center"
                      >
                        <Heart className="h-6 w-6 md:h-8 md:w-8 text-rose-500" />
                      </motion.div>
                      <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="aspect-square bg-amber-100 rounded-lg flex items-center justify-center"
                      >
                        <Calendar className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
                      </motion.div>
                      <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="aspect-square bg-orange-100 rounded-lg flex items-center justify-center"
                      >
                        <MapPin className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                      </motion.div>
                      <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="aspect-square bg-rose-100 rounded-lg flex items-center justify-center"
                      >
                        <Users className="h-6 w-6 md:h-8 md:w-8 text-rose-500" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto">
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-4">
                  {t.contactTitle}
                </h2>
                <p className="text-gray-600 text-lg md:text-xl">
                  {t.contactDescription}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-rose-100">
                  <CardContent className="p-4 md:p-6">
                    <form className="space-y-4 md:space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium text-gray-700"
                          >
                            {t.firstName}
                          </label>
                          <Input
                            id="first-name"
                            placeholder={
                              language === "en"
                                ? "Enter your first name"
                                : "Εισάγετε το όνομά σας"
                            }
                            className="border-rose-200 focus:border-rose-400 transition-colors"
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium text-gray-700"
                          >
                            {t.lastName}
                          </label>
                          <Input
                            id="last-name"
                            placeholder={
                              language === "en"
                                ? "Enter your last name"
                                : "Εισάγετε το επώνυμό σας"
                            }
                            className="border-rose-200 focus:border-rose-400 transition-colors"
                          />
                        </motion.div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t.email}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={
                            language === "en"
                              ? "Enter your email"
                              : "Εισάγετε το email σας"
                          }
                          className="border-rose-200 focus:border-rose-400 transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label
                          htmlFor="wedding-date"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t.weddingDate}
                        </label>
                        <Input
                          id="wedding-date"
                          type="date"
                          className="border-rose-200 focus:border-rose-400 transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t.message}
                        </label>
                        <Textarea
                          id="message"
                          placeholder={t.messagePlaceholder}
                          className="min-h-[120px] border-rose-200 focus:border-rose-400 transition-colors resize-none"
                        />
                      </motion.div>
                      <motion.div variants={scaleOnHover}>
                        <Button
                          type="submit"
                          className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                        >
                          {t.sendMessage}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full py-8 md:py-12 bg-gray-50 border-t border-rose-100"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-rose-400 mr-2" />
                <span className="font-semibold text-gray-800">
                  WeddingInvite
                </span>
              </div>
              <p className="text-sm text-gray-600">{t.footerDescription}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-800">{t.product}</h4>
              <div className="space-y-2 text-sm">
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection("templates")}
                  className="block text-gray-600 hover:text-rose-500 transition-colors text-left"
                >
                  {t.templates}
                </motion.button>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-rose-500 transition-colors"
                >
                  {t.features}
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-rose-500 transition-colors"
                >
                  {t.pricing}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-800">{t.support}</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-rose-500 transition-colors"
                >
                  {t.helpCenter}
                </Link>
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-600 hover:text-rose-500 transition-colors text-left"
                >
                  {t.contactUs}
                </motion.button>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-rose-500 transition-colors"
                >
                  {t.faq}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-800">{t.contact}</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@weddinginvite.com</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>+30 210 123 4567</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-rose-100 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-xs text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} WeddingInvite. {t.allRightsReserved}
            </p>
            <div className="flex gap-4 text-xs">
              <Link
                href="#"
                className="text-gray-500 hover:text-rose-500 transition-colors"
              >
                {t.privacyPolicy}
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-rose-500 transition-colors"
              >
                {t.termsOfService}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
