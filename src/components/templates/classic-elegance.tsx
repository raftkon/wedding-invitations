"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  MapPin,
  Calendar,
  Clock,
  Gift,
  Camera,
  Music,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const translations = {
  en: {
    backToTemplates: "← Back to Templates",
    ourLoveStory: "Our Love Story",
    storyText:
      "We met on a rainy Tuesday in a small coffee shop in Florence. Michael was reading Dante, and Emma was sketching the view from the window. A spilled cappuccino brought us together, and we've been inseparable ever since.",
    firstMeeting: "First Meeting",
    engagement: "Engagement",
    ceremony: "Ceremony",
    reception: "Reception",
    time: "Time",
    location: "Location",
    address: "Address",
    dinner: "Dinner",
    dancing: "Dancing",
    theVenue: "The Venue",
    venueDescription:
      "Nestled in the heart of Tuscany's wine country, Villa Bellacorte is a 16th-century estate surrounded by rolling hills and vineyards. The villa offers breathtaking views of the Chianti landscape and provides the perfect romantic setting for our special day.",
    gettingThere: "Getting There",
    parking: "Parking",
    accommodation: "Accommodation",
    pleaseJoinUs: "Please Join Us",
    joinUsText:
      "Your presence would make our day complete. Please let us know if you'll be able to celebrate with us.",
    respondBy: "Kindly respond by August 15, 2024",
    rsvpNow: "RSVP Now",
    templatePreview: "This is a preview of the Classic Elegance template",
    createYourOwn: "Create Your Own Wedding Website",
    togetherWith:
      "Together with our families, we invite you to celebrate our wedding",
  },
  gr: {
    backToTemplates: "← Επιστροφή στα Πρότυπα",
    ourLoveStory: "Η Ιστορία της Αγάπης μας",
    storyText:
      "Γνωριστήκαμε μια βροχερή Τρίτη σε ένα μικρό καφενείο στη Φλωρεντία. Ο Μιχάλης διάβαζε Δάντη, και η Έμμα σκιτσάριζε τη θέα από το παράθυρο. Ένας χυμένος καπουτσίνο μας ένωσε, και από τότε είμαστε αχώριστοι.",
    firstMeeting: "Πρώτη Συνάντηση",
    engagement: "Αρραβώνας",
    ceremony: "Τελετή",
    reception: "Δεξίωση",
    time: "Ώρα",
    location: "Τοποθεσία",
    address: "Διεύθυνση",
    dinner: "Δείπνο",
    dancing: "Χορός",
    theVenue: "Ο Χώρος",
    venueDescription:
      "Φωλιασμένη στην καρδιά της αμπελουργικής περιοχής της Τοσκάνης, η Villa Bellacorte είναι ένα κτήμα του 16ου αιώνα περιτριγυρισμένο από κυματιστούς λόφους και αμπελώνες. Η βίλα προσφέρει εκπληκτική θέα στο τοπίο του Chianti και παρέχει το τέλειο ρομαντικό σκηνικό για την ξεχωριστή μας μέρα.",
    gettingThere: "Πώς να φτάσετε",
    parking: "Πάρκινγκ",
    accommodation: "Διαμονή",
    pleaseJoinUs: "Παρακαλούμε Ελάτε μαζί μας",
    joinUsText:
      "Η παρουσία σας θα έκανε τη μέρα μας ολοκληρωμένη. Παρακαλούμε ενημερώστε μας αν θα μπορέσετε να γιορτάσετε μαζί μας.",
    respondBy: "Παρακαλούμε απαντήστε έως τις 15 Αυγούστου 2024",
    rsvpNow: "Επιβεβαίωση Παρουσίας",
    templatePreview:
      "Αυτή είναι μια προεπισκόπηση του προτύπου Κλασική Κομψότητα",
    createYourOwn: "Δημιουργήστε τη Δική σας Ιστοσελίδα Γάμου",
    togetherWith:
      "Μαζί με τις οικογένειές μας, σας προσκαλούμε να γιορτάσετε τον γάμο μας",
  },
};

export function ClassicEleganceTemplate() {
  const [language, setLanguage] = useState<"en" | "gr">("en");
  const searchParams = useSearchParams();
  const t = translations[language];

  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam === "gr" || langParam === "en") {
      setLanguage(langParam);
    }
  }, [searchParams]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "gr" : "en");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-rose-200 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-6 w-6 text-rose-400 mr-2" />
          <span className="text-xl font-semibold text-gray-800">
            WeddingInvite
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 border-rose-200 text-rose-600 hover:bg-rose-50"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "ΕΛ" : "EN"}
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-rose-200 text-rose-600 hover:bg-rose-50"
          >
            <Link href="/">{t.backToTemplates}</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 py-16 bg-white rounded-2xl shadow-lg border border-rose-100">
          <div className="w-24 h-24 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-12 w-12 text-rose-600" />
          </div>
          <h1 className="text-5xl font-serif text-gray-800 mb-4">
            {language === "en" ? "Emma & Michael" : "Έμμα & Μιχάλης"}
          </h1>
          <div className="w-32 h-px bg-rose-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-8">{t.togetherWith}</p>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-rose-500" />
              <span className="text-lg">
                {language === "en"
                  ? "September 22, 2024"
                  : "22 Σεπτεμβρίου, 2024"}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-rose-500" />
              <span className="text-lg">
                {language === "en"
                  ? "Villa Bellacorte, Tuscany, Italy"
                  : "Villa Bellacorte, Τοσκάνη, Ιταλία"}
              </span>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <Card className="mb-8 border-rose-100">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-6">
              {t.ourLoveStory}
            </h2>
            <div className="prose prose-rose max-w-none text-gray-600 leading-relaxed">
              <p className="text-center mb-6">&quot;{t.storyText}&quot;</p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {t.firstMeeting}
                  </h3>
                  <p className="text-sm">
                    {language === "en"
                      ? "Café Rivoire, Florence"
                      : "Καφέ Rivoire, Φλωρεντία"}
                    <br />
                    {language === "en" ? "March 15, 2019" : "15 Μαρτίου, 2019"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {t.engagement}
                  </h3>
                  <p className="text-sm">
                    {language === "en"
                      ? "Ponte Vecchio, Florence"
                      : "Ponte Vecchio, Φλωρεντία"}
                    <br />
                    {language === "en"
                      ? "December 24, 2023"
                      : "24 Δεκεμβρίου, 2023"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wedding Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-rose-100">
            <CardContent className="p-6">
              <div className="text-center">
                <Clock className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t.ceremony}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>{t.time}:</strong>{" "}
                    {language === "en" ? "4:00 PM" : "16:00"}
                  </p>
                  <p>
                    <strong>{t.location}:</strong>{" "}
                    {language === "en"
                      ? "Villa Bellacorte Gardens"
                      : "Κήποι Villa Bellacorte"}
                  </p>
                  <p>
                    <strong>{t.address}:</strong> Via del Chianti, 50022 Greve
                    in Chianti FI, {language === "en" ? "Italy" : "Ιταλία"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-rose-100">
            <CardContent className="p-6">
              <div className="text-center">
                <Music className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t.reception}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>{t.time}:</strong>{" "}
                    {language === "en" ? "6:00 PM" : "18:00"}
                  </p>
                  <p>
                    <strong>{t.location}:</strong>{" "}
                    {language === "en"
                      ? "Villa Bellacorte Terrace"
                      : "Βεράντα Villa Bellacorte"}
                  </p>
                  <p>
                    <strong>{t.dinner}:</strong>{" "}
                    {language === "en" ? "7:30 PM" : "19:30"}
                  </p>
                  <p>
                    <strong>{t.dancing}:</strong>{" "}
                    {language === "en"
                      ? "9:00 PM onwards"
                      : "από 21:00 και μετά"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <Card className="mb-8 border-rose-100">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-6">
              {t.theVenue}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Villa Bellacorte
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t.venueDescription}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>{t.gettingThere}:</strong>{" "}
                    {language === "en"
                      ? "45 minutes from Florence"
                      : "45 λεπτά από τη Φλωρεντία"}
                  </p>
                  <p>
                    <strong>{t.parking}:</strong>{" "}
                    {language === "en"
                      ? "Available on-site"
                      : "Διαθέσιμο στο χώρο"}
                  </p>
                  <p>
                    <strong>{t.accommodation}:</strong>{" "}
                    {language === "en"
                      ? "Nearby hotels listed below"
                      : "Κοντινά ξενοδοχεία παρακάτω"}
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-rose-100 to-amber-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Camera className="h-12 w-12 mx-auto mb-2" />
                  <p>Villa Bellacorte</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RSVP */}
        <Card className="mb-8 border-rose-100 bg-gradient-to-r from-rose-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              {t.pleaseJoinUs}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.joinUsText}
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">{t.respondBy}</p>
              <Button
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white px-8"
              >
                {t.rsvpNow}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Template Info */}
        <div className="text-center py-8 border-t border-rose-200">
          <p className="text-gray-500 text-sm mb-4">{t.templatePreview}</p>
          <Button asChild className="bg-rose-500 hover:bg-rose-600 text-white">
            <Link href="/">{t.createYourOwn}</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
