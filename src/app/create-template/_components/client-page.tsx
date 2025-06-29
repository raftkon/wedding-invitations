"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Heart,
  Globe,
  Calendar,
  MapPin,
  Users,
  Palette,
  Camera,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const translations = {
  en: {
    // Header
    backToHome: "← Back to Home",

    // Page Title
    pageTitle: "Create Your Wedding Template",
    pageDescription:
      "Fill out the form below to create your personalized wedding invitation template. We'll design a beautiful website that tells your unique love story.",

    // Form Sections
    coupleInfo: "Couple Information",
    weddingDetails: "Wedding Details",
    venueInfo: "Venue Information",
    loveStory: "Your Love Story",
    designPreferences: "Design Preferences",
    additionalInfo: "Additional Information",

    // Couple Information
    partner1Name: "Partner 1 Name",
    partner1NamePlaceholder: "Enter first partner's name",
    partner2Name: "Partner 2 Name",
    partner2NamePlaceholder: "Enter second partner's name",
    coupleEmail: "Email Address",
    coupleEmailPlaceholder: "your.email@example.com",
    couplePhone: "Phone Number (Optional)",
    couplePhonePlaceholder: "+1 (555) 123-4567",

    // Wedding Details
    weddingDate: "Wedding Date",
    weddingTime: "Wedding Time",
    weddingTimePlaceholder: "e.g., 4:00 PM",
    estimatedGuests: "Estimated Number of Guests",
    estimatedGuestsPlaceholder: "e.g., 150",

    // Venue Information
    ceremonyVenue: "Ceremony Venue Name",
    ceremonyVenuePlaceholder: "Enter ceremony venue name",
    ceremonyAddress: "Ceremony Address",
    ceremonyAddressPlaceholder: "Full address of ceremony venue",
    ceremonyTime: "Ceremony Time",
    ceremonyTimePlaceholder: "e.g., 4:00 PM",

    receptionVenue: "Reception Venue Name",
    receptionVenuePlaceholder: "Enter reception venue name (if different)",
    receptionAddress: "Reception Address",
    receptionAddressPlaceholder: "Full address of reception venue",
    receptionTime: "Reception Time",
    receptionTimePlaceholder: "e.g., 6:00 PM",

    // Love Story
    howYouMet: "How You Met",
    howYouMetPlaceholder: "Tell us the story of how you first met...",
    relationshipMilestones: "Relationship Milestones",
    relationshipMilestonesPlaceholder:
      "Share important moments in your relationship (first date, engagement, etc.)...",
    specialMessage: "Special Message to Guests",
    specialMessagePlaceholder:
      "A personal message you'd like to share with your wedding guests...",

    // Design Preferences
    templateStyle: "Preferred Template Style",
    selectStyle: "Select a style",
    classicElegance: "Classic Elegance",
    modernMinimalist: "Modern Minimalist",
    rusticRomance: "Rustic Romance",

    colorScheme: "Color Scheme Preference",
    selectColors: "Select color preference",
    rosePink: "Rose & Pink",
    amberGold: "Amber & Gold",
    orangeWarm: "Orange & Warm Tones",
    blueNavy: "Blue & Navy",
    purpleLavender: "Purple & Lavender",
    greenSage: "Green & Sage",

    // Additional Features
    additionalFeatures: "Additional Features",
    includeRSVP: "Include RSVP functionality",
    includePhotoGallery: "Include photo gallery",
    includeGiftRegistry: "Include gift registry links",
    includeAccommodations: "Include accommodation information",
    includeTransportation: "Include transportation details",

    // Additional Information
    specialRequests: "Special Requests or Notes",
    specialRequestsPlaceholder:
      "Any special requests, dietary restrictions info, dress code, or other important details...",

    // Submit
    createTemplate: "Create My Wedding Template",
    processing: "Creating Your Template...",

    // Success Message
    thankYou: "Thank you for your submission!",
    successMessage:
      "We'll create your personalized wedding template and contact you within 24-48 hours with a preview.",

    // Navigation
    ceremony: "Ceremony",
    reception: "Reception",
  },
  gr: {
    // Header
    backToHome: "← Επιστροφή στην Αρχική",

    // Page Title
    pageTitle: "Δημιουργήστε το Πρότυπο Γάμου σας",
    pageDescription:
      "Συμπληρώστε την παρακάτω φόρμα για να δημιουργήσετε το εξατομικευμένο πρότυπο πρόσκλησης γάμου σας. Θα σχεδιάσουμε μια όμορφη ιστοσελίδα που θα αφηγηθεί τη μοναδική ιστορία αγάπης σας.",

    // Form Sections
    coupleInfo: "Στοιχεία Ζευγαριού",
    weddingDetails: "Λεπτομέρειες Γάμου",
    venueInfo: "Πληροφορίες Χώρου",
    loveStory: "Η Ιστορία της Αγάπης σας",
    designPreferences: "Προτιμήσεις Σχεδιασμού",
    additionalInfo: "Επιπλέον Πληροφορίες",

    // Couple Information
    partner1Name: "Όνομα Πρώτου Συντρόφου",
    partner1NamePlaceholder: "Εισάγετε το όνομα του πρώτου συντρόφου",
    partner2Name: "Όνομα Δεύτερου Συντρόφου",
    partner2NamePlaceholder: "Εισάγετε το όνομα του δεύτερου συντρόφου",
    coupleEmail: "Διεύθυνση Email",
    coupleEmailPlaceholder: "το.email.σας@example.com",
    couplePhone: "Αριθμός Τηλεφώνου (Προαιρετικό)",
    couplePhonePlaceholder: "+30 210 123 4567",

    // Wedding Details
    weddingDate: "Ημερομηνία Γάμου",
    weddingTime: "Ώρα Γάμου",
    weddingTimePlaceholder: "π.χ., 16:00",
    estimatedGuests: "Εκτιμώμενος Αριθμός Καλεσμένων",
    estimatedGuestsPlaceholder: "π.χ., 150",

    // Venue Information
    ceremonyVenue: "Όνομα Χώρου Τελετής",
    ceremonyVenuePlaceholder: "Εισάγετε το όνομα του χώρου τελετής",
    ceremonyAddress: "Διεύθυνση Τελετής",
    ceremonyAddressPlaceholder: "Πλήρης διεύθυνση του χώρου τελετής",
    ceremonyTime: "Ώρα Τελετής",
    ceremonyTimePlaceholder: "π.χ., 16:00",

    receptionVenue: "Όνομα Χώρου Δεξίωσης",
    receptionVenuePlaceholder:
      "Εισάγετε το όνομα του χώρου δεξίωσης (αν διαφέρει)",
    receptionAddress: "Διεύθυνση Δεξίωσης",
    receptionAddressPlaceholder: "Πλήρης διεύθυνση του χώρου δεξίωσης",
    receptionTime: "Ώρα Δεξίωσης",
    receptionTimePlaceholder: "π.χ., 18:00",

    // Love Story
    howYouMet: "Πώς Γνωριστήκατε",
    howYouMetPlaceholder:
      "Πείτε μας την ιστορία του πώς γνωριστήκατε για πρώτη φορά...",
    relationshipMilestones: "Σημαντικές Στιγμές της Σχέσης",
    relationshipMilestonesPlaceholder:
      "Μοιραστείτε σημαντικές στιγμές της σχέσης σας (πρώτο ραντεβού, αρραβώνας, κλπ.)...",
    specialMessage: "Ειδικό Μήνυμα στους Καλεσμένους",
    specialMessagePlaceholder:
      "Ένα προσωπικό μήνυμα που θα θέλατε να μοιραστείτε με τους καλεσμένους του γάμου σας...",

    // Design Preferences
    templateStyle: "Προτιμώμενο Στυλ Προτύπου",
    selectStyle: "Επιλέξτε στυλ",
    classicElegance: "Κλασική Κομψότητα",
    modernMinimalist: "Μοντέρνος Μινιμαλισμός",
    rusticRomance: "Ρουστίκ Ρομαντισμός",

    colorScheme: "Προτίμηση Χρωματικής Παλέτας",
    selectColors: "Επιλέξτε χρωματική προτίμηση",
    rosePink: "Ροζ & Ρόδινο",
    amberGold: "Κεχριμπάρι & Χρυσό",
    orangeWarm: "Πορτοκαλί & Ζεστοί Τόνοι",
    blueNavy: "Μπλε & Ναυτικό Μπλε",
    purpleLavender: "Μωβ & Λεβάντα",
    greenSage: "Πράσινο & Φασκόμηλο",

    // Additional Features
    additionalFeatures: "Επιπλέον Χαρακτηριστικά",
    includeRSVP: "Συμπερίληψη λειτουργίας επιβεβαίωσης παρουσίας",
    includePhotoGallery: "Συμπερίληψη γκαλερί φωτογραφιών",
    includeGiftRegistry: "Συμπερίληψη συνδέσμων καταλόγου δώρων",
    includeAccommodations: "Συμπερίληψη πληροφοριών διαμονής",
    includeTransportation: "Συμπερίληψη λεπτομερειών μεταφοράς",

    // Additional Information
    specialRequests: "Ειδικά Αιτήματα ή Σημειώσεις",
    specialRequestsPlaceholder:
      "Οποιαδήποτε ειδικά αιτήματα, πληροφορίες διατροφικών περιορισμών, κώδικας ντυσίματος ή άλλες σημαντικές λεπτομέρειες...",

    // Submit
    createTemplate: "Δημιουργήστε το Πρότυπο Γάμου μου",
    processing: "Δημιουργία του Προτύπου σας...",

    // Success Message
    thankYou: "Ευχαριστούμε για την υποβολή σας!",
    successMessage:
      "Θα δημιουργήσουμε το εξατομικευμένο πρότυπο γάμου σας και θα επικοινωνήσουμε μαζί σας εντός 24-48 ωρών με μια προεπισκόπηση.",

    // Navigation
    ceremony: "Τελετή",
    reception: "Δεξίωση",
  },
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
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
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export function CreateTemplatePage() {
  const [language, setLanguage] = useState<"en" | "gr">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partner1Name: "",
    partner2Name: "",
    email: "",
    phone: "",
    weddingDate: "",
    weddingTime: "",
    estimatedGuests: "",
    ceremonyVenue: "",
    ceremonyAddress: "",
    ceremonyTime: "",
    receptionVenue: "",
    receptionAddress: "",
    receptionTime: "",
    howYouMet: "",
    relationshipMilestones: "",
    specialMessage: "",
    templateStyle: "",
    colorScheme: "",
    includeRSVP: false,
    includePhotoGallery: false,
    includeGiftRegistry: false,
    includeAccommodations: false,
    includeTransportation: false,
    specialRequests: "",
  });

  const t = translations[language];

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "gr" : "en");
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto border-rose-100">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t.thankYou}
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                {t.successMessage}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-rose-500 hover:bg-rose-600 text-white"
                >
                  <Link href="/">{t.backToHome}</Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

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
        <div className="ml-auto hidden md:flex items-center gap-4">
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              asChild
              className="border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
            >
              <Link href="/">{t.backToHome}</Link>
            </Button>
          </motion.div>
        </div>

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
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    asChild
                    className="w-full justify-start border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/">{t.backToHome}</Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.pageTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.pageDescription}
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6 md:space-y-8"
          >
            {/* Couple Information */}
            <motion.div variants={fadeInUp}>
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                    <Users className="h-5 w-5" />
                    {t.coupleInfo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="partner1Name">{t.partner1Name}</Label>
                      <Input
                        id="partner1Name"
                        value={formData.partner1Name}
                        onChange={(e) =>
                          handleInputChange("partner1Name", e.target.value)
                        }
                        placeholder={t.partner1NamePlaceholder}
                        required
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="partner2Name">{t.partner2Name}</Label>
                      <Input
                        id="partner2Name"
                        value={formData.partner2Name}
                        onChange={(e) =>
                          handleInputChange("partner2Name", e.target.value)
                        }
                        placeholder={t.partner2NamePlaceholder}
                        required
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                  </div>
                  <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="email">{t.coupleEmail}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder={t.coupleEmailPlaceholder}
                        required
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="phone">{t.couplePhone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder={t.couplePhonePlaceholder}
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Wedding Details */}
            <motion.div variants={fadeInUp}>
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                    <Calendar className="h-5 w-5" />
                    {t.weddingDetails}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="weddingDate">{t.weddingDate}</Label>
                      <Input
                        id="weddingDate"
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) =>
                          handleInputChange("weddingDate", e.target.value)
                        }
                        required
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="weddingTime">{t.weddingTime}</Label>
                      <Input
                        id="weddingTime"
                        value={formData.weddingTime}
                        onChange={(e) =>
                          handleInputChange("weddingTime", e.target.value)
                        }
                        placeholder={t.weddingTimePlaceholder}
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                    <motion.div
                      variants={scaleOnHover}
                      className="space-y-2 sm:col-span-2 lg:col-span-1"
                    >
                      <Label htmlFor="estimatedGuests">
                        {t.estimatedGuests}
                      </Label>
                      <Input
                        id="estimatedGuests"
                        type="number"
                        value={formData.estimatedGuests}
                        onChange={(e) =>
                          handleInputChange("estimatedGuests", e.target.value)
                        }
                        placeholder={t.estimatedGuestsPlaceholder}
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Venue Information */}
            <motion.div variants={fadeInUp}>
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                    <MapPin className="h-5 w-5" />
                    {t.venueInfo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                      {t.ceremony}
                    </h4>
                    <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                      <motion.div variants={scaleOnHover} className="space-y-2">
                        <Label htmlFor="ceremonyVenue">{t.ceremonyVenue}</Label>
                        <Input
                          id="ceremonyVenue"
                          value={formData.ceremonyVenue}
                          onChange={(e) =>
                            handleInputChange("ceremonyVenue", e.target.value)
                          }
                          placeholder={t.ceremonyVenuePlaceholder}
                          required
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </motion.div>
                      <motion.div variants={scaleOnHover} className="space-y-2">
                        <Label htmlFor="ceremonyTime">{t.ceremonyTime}</Label>
                        <Input
                          id="ceremonyTime"
                          value={formData.ceremonyTime}
                          onChange={(e) =>
                            handleInputChange("ceremonyTime", e.target.value)
                          }
                          placeholder={t.ceremonyTimePlaceholder}
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </motion.div>
                    </div>
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="ceremonyAddress">
                        {t.ceremonyAddress}
                      </Label>
                      <Input
                        id="ceremonyAddress"
                        value={formData.ceremonyAddress}
                        onChange={(e) =>
                          handleInputChange("ceremonyAddress", e.target.value)
                        }
                        placeholder={t.ceremonyAddressPlaceholder}
                        required
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                      {t.reception}
                    </h4>
                    <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                      <motion.div variants={scaleOnHover} className="space-y-2">
                        <Label htmlFor="receptionVenue">
                          {t.receptionVenue}
                        </Label>
                        <Input
                          id="receptionVenue"
                          value={formData.receptionVenue}
                          onChange={(e) =>
                            handleInputChange("receptionVenue", e.target.value)
                          }
                          placeholder={t.receptionVenuePlaceholder}
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </motion.div>
                      <motion.div variants={scaleOnHover} className="space-y-2">
                        <Label htmlFor="receptionTime">{t.receptionTime}</Label>
                        <Input
                          id="receptionTime"
                          value={formData.receptionTime}
                          onChange={(e) =>
                            handleInputChange("receptionTime", e.target.value)
                          }
                          placeholder={t.receptionTimePlaceholder}
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </motion.div>
                    </div>
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="receptionAddress">
                        {t.receptionAddress}
                      </Label>
                      <Input
                        id="receptionAddress"
                        value={formData.receptionAddress}
                        onChange={(e) =>
                          handleInputChange("receptionAddress", e.target.value)
                        }
                        placeholder={t.receptionAddressPlaceholder}
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Love Story */}
            <motion.div variants={fadeInUp}>
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                    <Heart className="h-5 w-5" />
                    {t.loveStory}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <motion.div variants={scaleOnHover} className="space-y-2">
                    <Label htmlFor="howYouMet">{t.howYouMet}</Label>
                    <Textarea
                      id="howYouMet"
                      value={formData.howYouMet}
                      onChange={(e) =>
                        handleInputChange("howYouMet", e.target.value)
                      }
                      placeholder={t.howYouMetPlaceholder}
                      className="min-h-[100px] border-rose-200 focus:border-rose-400 resize-none"
                    />
                  </motion.div>
                  <motion.div variants={scaleOnHover} className="space-y-2">
                    <Label htmlFor="relationshipMilestones">
                      {t.relationshipMilestones}
                    </Label>
                    <Textarea
                      id="relationshipMilestones"
                      value={formData.relationshipMilestones}
                      onChange={(e) =>
                        handleInputChange(
                          "relationshipMilestones",
                          e.target.value
                        )
                      }
                      placeholder={t.relationshipMilestonesPlaceholder}
                      className="min-h-[100px] border-rose-200 focus:border-rose-400 resize-none"
                    />
                  </motion.div>
                  <motion.div variants={scaleOnHover} className="space-y-2">
                    <Label htmlFor="specialMessage">{t.specialMessage}</Label>
                    <Textarea
                      id="specialMessage"
                      value={formData.specialMessage}
                      onChange={(e) =>
                        handleInputChange("specialMessage", e.target.value)
                      }
                      placeholder={t.specialMessagePlaceholder}
                      className="min-h-[100px] border-rose-200 focus:border-rose-400 resize-none"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Design Preferences */}
            <motion.div variants={fadeInUp}>
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                    <Palette className="h-5 w-5" />
                    {t.designPreferences}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="templateStyle">{t.templateStyle}</Label>
                      <Select
                        value={formData.templateStyle}
                        onValueChange={(value) =>
                          handleInputChange("templateStyle", value)
                        }
                      >
                        <SelectTrigger className="border-rose-200 focus:border-rose-400">
                          <SelectValue placeholder={t.selectStyle} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="classic">
                            {t.classicElegance}
                          </SelectItem>
                          <SelectItem value="modern">
                            {t.modernMinimalist}
                          </SelectItem>
                          <SelectItem value="rustic">
                            {t.rusticRomance}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                    <motion.div variants={scaleOnHover} className="space-y-2">
                      <Label htmlFor="colorScheme">{t.colorScheme}</Label>
                      <Select
                        value={formData.colorScheme}
                        onValueChange={(value) =>
                          handleInputChange("colorScheme", value)
                        }
                      >
                        <SelectTrigger className="border-rose-200 focus:border-rose-400">
                          <SelectValue placeholder={t.selectColors} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rose">{t.rosePink}</SelectItem>
                          <SelectItem value="amber">{t.amberGold}</SelectItem>
                          <SelectItem value="orange">{t.orangeWarm}</SelectItem>
                          <SelectItem value="blue">{t.blueNavy}</SelectItem>
                          <SelectItem value="purple">
                            {t.purpleLavender}
                          </SelectItem>
                          <SelectItem value="green">{t.greenSage}</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <Label>{t.additionalFeatures}</Label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id="includeRSVP"
                          checked={formData.includeRSVP}
                          onCheckedChange={(checked) =>
                            handleInputChange("includeRSVP", checked as boolean)
                          }
                        />
                        <Label
                          htmlFor="includeRSVP"
                          className="text-sm font-normal cursor-pointer"
                        >
                          {t.includeRSVP}
                        </Label>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id="includePhotoGallery"
                          checked={formData.includePhotoGallery}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "includePhotoGallery",
                              checked as boolean
                            )
                          }
                        />
                        <Label
                          htmlFor="includePhotoGallery"
                          className="text-sm font-normal cursor-pointer"
                        >
                          {t.includePhotoGallery}
                        </Label>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id="includeGiftRegistry"
                          checked={formData.includeGiftRegistry}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "includeGiftRegistry",
                              checked as boolean
                            )
                          }
                        />
                        <Label
                          htmlFor="includeGiftRegistry"
                          className="text-sm font-normal cursor-pointer"
                        >
                          {t.includeGiftRegistry}
                        </Label>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id="includeAccommodations"
                          checked={formData.includeAccommodations}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "includeAccommodations",
                              checked as boolean
                            )
                          }
                        />
                        <Label
                          htmlFor="includeAccommodations"
                          className="text-sm font-normal cursor-pointer"
                        >
                          {t.includeAccommodations}
                        </Label>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 sm:col-span-2"
                      >
                        <Checkbox
                          id="includeTransportation"
                          checked={formData.includeTransportation}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "includeTransportation",
                              checked as boolean
                            )
                          }
                        />
                        <Label
                          htmlFor="includeTransportation"
                          className="text-sm font-normal cursor-pointer"
                        >
                          {t.includeTransportation}
                        </Label>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Information */}
            <motion.div variants={fadeInUp}>
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                    <Camera className="h-5 w-5" />
                    {t.additionalInfo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div variants={scaleOnHover} className="space-y-2">
                    <Label htmlFor="specialRequests">{t.specialRequests}</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      placeholder={t.specialRequestsPlaceholder}
                      className="min-h-[120px] border-rose-200 focus:border-rose-400 resize-none"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-6 md:pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 md:px-12 py-3 text-base md:text-lg w-full sm:w-auto"
              >
                {isSubmitting ? t.processing : t.createTemplate}
              </Button>
            </motion.div>
          </motion.div>
        </form>
      </main>
    </div>
  );
}
