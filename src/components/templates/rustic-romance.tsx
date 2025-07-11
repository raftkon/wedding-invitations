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
import { z } from "zod";
import { formatDateToGreek, formatTimeToGreek } from "@/lib/utils";
import { WeddingSchema } from "@/schemas";

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
export function RusticRomanceTemplate({
  data,
}: {
  data: z.infer<typeof WeddingSchema>;
}) {
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
            {`${data.firstPartnerName} & ${data.secondPartnerName}`}
          </h1>
          <div className="text-orange-600 text-2xl mb-6">♦ ♦ ♦</div>
          <p className="text-xl text-gray-700 mb-8 font-serif italic">
            &quot;{t.twoHearts}&quot;
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-orange-500" />
              <span className="text-lg font-serif">
                {formatDateToGreek(data.weddingDateTime)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mountain className="h-5 w-5 text-orange-500" />
              <span className="text-lg font-serif">{data.venueName}</span>
            </div>
          </div>
        </div>

        {/* Replace remaining static values in ceremony, reception, and venue sections with values from `data` as needed */}
      </main>
    </div>
  );
}
