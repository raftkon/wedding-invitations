"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Calendar,
  Clock,
  TreePine,
  Mountain,
  Camera,
} from "lucide-react";
import Link from "next/link";

const translations = {
  en: {
    backToTemplates: "← Back to Templates",
    ourJourney: "Our Journey Together",
    firstMet: "First Met",
    firstAdventure: "First Adventure",
    engaged: "Engaged",
    journeyText:
      "From that first hike where we got completely lost (but found each other), to countless adventures under starlit skies, our love has grown stronger with every mountain we've climbed together.",
    ceremony: "Ceremony",
    reception: "Reception",
    time: "Time",
    location: "Location",
    dressCode: "Dress Code",
    warmLayers: "(Warm layers recommended)",
    dinner: "Dinner",
    dancing: "Dancing",
    mountainSetting: "The Mountain Setting",
    venueDescription:
      "Nestled in the heart of the Colorado Rockies, Aspen Grove Resort offers breathtaking mountain views and the perfect rustic setting for our special day. The venue features a beautiful outdoor ceremony space surrounded by towering pines and a cozy lodge for our reception.",
    address: "Address",
    altitude: "Altitude",
    parking: "Parking",
    travelStay: "Travel & Stay",
    gettingThere: "Getting There",
    whereToStay: "Where to Stay",
    joinOurAdventure: "Join Our Adventure",
    adventureText:
      "We can't wait to celebrate with you among the mountains we love so much. Your presence would make our day absolutely perfect.",
    respondBy: "Please respond by September 15, 2024",
    rsvpMountain: "RSVP for Our Mountain Wedding",
    templatePreview: "This is a preview of the Rustic Romance template",
    createYourOwn: "Create Your Own Wedding Website",
    twoHearts: "Two hearts, one love, forever intertwined",
  },
  gr: {
    backToTemplates: "← Επιστροφή στα Πρότυπα",
    ourJourney: "Το Ταξίδι μας Μαζί",
    firstMet: "Πρώτη Συνάντηση",
    firstAdventure: "Πρώτη Περιπέτεια",
    engaged: "Αρραβώνας",
    journeyText:
      "Από εκείνη την πρώτη πεζοπορία όπου χαθήκαμε εντελώς (αλλά βρήκαμε ο ένας τον άλλον), μέχρι αμέτρητες περιπέτειες κάτω από έναστρους ουρανούς, η αγάπη μας έχει γίνει πιο δυνατή με κάθε βουνό που έχουμε ανέβει μαζί.",
    ceremony: "Τελετή",
    reception: "Δεξίωση",
    time: "Ώρα",
    location: "Τοποθεσία",
    dressCode: "Κώδικας Ντυσίματος",
    warmLayers: "(Συνιστώνται ζεστά ρούχα)",
    dinner: "Δείπνο",
    dancing: "Χορός",
    mountainSetting: "Το Βουνίσιο Σκηνικό",
    venueDescription:
      "Φωλιασμένο στην καρδιά των Rocky Mountains του Κολοράντο, το Aspen Grove Resort προσφέρει εκπληκτική θέα στα βουνά και το τέλειο ρουστίκ σκηνικό για την ξεχωριστή μας μέρα. Ο χώρος διαθέτει έναν όμορφο υπαίθριο χώρο τελετής περιτριγυρισμένο από ψηλά πεύκα και ένα άνετο lodge για τη δεξίωσή μας.",
    address: "Διεύθυνση",
    altitude: "Υψόμετρο",
    parking: "Πάρκινγκ",
    travelStay: "Ταξίδι & Διαμονή",
    gettingThere: "Πώς να φτάσετε",
    whereToStay: "Πού να μείνετε",
    joinOurAdventure: "Ελάτε στην Περιπέτειά μας",
    adventureText:
      "Ανυπομονούμε να γιορτάσουμε μαζί σας ανάμεσα στα βουνά που αγαπάμε τόσο πολύ. Η παρουσία σας θα έκανε τη μέρα μας απολύτως τέλεια.",
    respondBy: "Παρακαλούμε απαντήστε έως τις 15 Σεπτεμβρίου 2024",
    rsvpMountain: "Επιβεβαίωση για τον Βουνίσιο Γάμο μας",
    templatePreview:
      "Αυτή είναι μια προεπισκόπηση του προτύπου Ρουστίκ Ρομαντισμός",
    createYourOwn: "Δημιουργήστε τη Δική σας Ιστοσελίδα Γάμου",
    twoHearts: "Δύο καρδιές, μία αγάπη, για πάντα ενωμένες",
  },
};

export function RusticRomanceTemplate() {
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-orange-200 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-6 w-6 text-orange-500 mr-2" />
          <span className="text-xl font-semibold text-gray-800">
            WeddingInvite
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "ΕΛ" : "EN"}
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/">{t.backToTemplates}</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 py-16 bg-white rounded-2xl shadow-lg border-2 border-orange-200 border-dashed relative">
          <div className="absolute top-4 left-4 text-orange-300">♦</div>
          <div className="absolute top-4 right-4 text-orange-300">♦</div>
          <div className="absolute bottom-4 left-4 text-orange-300">♦</div>
          <div className="absolute bottom-4 right-4 text-orange-300">♦</div>

          <div className="flex justify-center mb-6">
            <Heart className="h-16 w-16 text-orange-500" />
          </div>
          <h1 className="text-5xl font-serif text-gray-800 mb-4">
            {language === "en" ? "Lily & David" : "Λίλη & Δαβίδ"}
          </h1>
          <div className="text-orange-600 text-2xl mb-6">♦ ♦ ♦</div>
          <p className="text-xl text-gray-700 mb-8 font-serif italic">
            "{t.twoHearts}"
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-orange-500" />
              <span className="text-lg font-serif">
                {language === "en" ? "November 5th, 2024" : "5 Νοεμβρίου, 2024"}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mountain className="h-5 w-5 text-orange-500" />
              <span className="text-lg font-serif">
                {language === "en" ? "Aspen, Colorado" : "Άσπεν, Κολοράντο"}
              </span>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <Card className="mb-8 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
              {t.ourJourney}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center mx-auto border-2 border-orange-300">
                  <Heart className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">
                    {t.firstMet}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Mountain hiking trail
                    <br />
                    Summer 2020
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center mx-auto border-2 border-orange-300">
                  <TreePine className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">
                    {t.firstAdventure}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Camping in Yellowstone
                    <br />
                    Fall 2020
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center mx-auto border-2 border-orange-300">
                  <Mountain className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">
                    {t.engaged}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Rocky Mountain Peak
                    <br />
                    Spring 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic font-serif leading-relaxed max-w-2xl mx-auto">
                "{t.journeyText}"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Wedding Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-orange-200 bg-white">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                {t.ceremony}
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>{t.time}:</strong> 3:30 PM
                </p>
                <p>
                  <strong>{t.location}:</strong> Aspen Grove Meadow
                </p>
                <p>
                  <strong>{t.dressCode}:</strong> Mountain Formal
                </p>
                <p className="text-sm italic">{t.warmLayers}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white">
            <CardContent className="p-6 text-center">
              <TreePine className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                {t.reception}
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>{t.time}:</strong> 5:00 PM
                </p>
                <p>
                  <strong>{t.location}:</strong> Pine Lodge
                </p>
                <p>
                  <strong>{t.dinner}:</strong> 6:30 PM
                </p>
                <p>
                  <strong>{t.dancing}:</strong> Under the stars
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Venue Information */}
        <Card className="mb-8 border-orange-200">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
              {t.mountainSetting}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-serif text-gray-800 mb-4">
                  Aspen Grove Resort
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t.venueDescription}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>{t.address}:</strong> 1234 Mountain View Drive,
                    Aspen, CO 81611
                  </p>
                  <p>
                    <strong>{t.altitude}:</strong> 8,000 feet (dress warmly!)
                  </p>
                  <p>
                    <strong>{t.parking}:</strong> Complimentary valet service
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center border-2 border-orange-200 border-dashed">
                <div className="text-center text-gray-600">
                  <Camera className="h-12 w-12 mx-auto mb-2 text-orange-500" />
                  <p className="font-serif">Mountain Vista View</p>
                  <p className="text-sm">Aspen Grove Resort</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Travel & Accommodations */}
        <Card className="mb-8 border-orange-200 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
              {t.travelStay}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-serif text-gray-800 mb-4">
                  {t.gettingThere}
                </h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>
                    <strong>Fly into:</strong> Aspen/Pitkin County Airport (ASE)
                    - 15 minutes
                  </p>
                  <p>
                    <strong>Alternative:</strong> Denver International (DEN) - 4
                    hour drive
                  </p>
                  <p>
                    <strong>Shuttle Service:</strong> Available from both
                    airports
                  </p>
                  <p>
                    <strong>Car Rental:</strong> Recommended for exploring the
                    area
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-800 mb-4">
                  {t.whereToStay}
                </h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>
                    <strong>Aspen Grove Resort:</strong> On-site cabins
                    available
                  </p>
                  <p>
                    <strong>The Little Nell:</strong> Luxury option in downtown
                    Aspen
                  </p>
                  <p>
                    <strong>Hotel Aspen:</strong> Mid-range, great mountain
                    views
                  </p>
                  <p>
                    <strong>Group Rate:</strong> Contact us for special pricing
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RSVP */}
        <Card className="mb-8 border-2 border-orange-300 border-dashed bg-white">
          <CardContent className="p-8 text-center">
            <div className="text-orange-600 text-3xl mb-4">♦ ♦ ♦</div>
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              {t.joinOurAdventure}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-serif italic">
              "{t.adventureText}"
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">{t.respondBy}</p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 font-serif"
              >
                {t.rsvpMountain}
              </Button>
            </div>
            <div className="text-orange-600 text-3xl mt-4">♦ ♦ ♦</div>
          </CardContent>
        </Card>

        {/* Template Info */}
        <div className="text-center py-8 border-t border-orange-200">
          <p className="text-gray-500 text-sm mb-4">{t.templatePreview}</p>
          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <Link href="/">{t.createYourOwn}</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
