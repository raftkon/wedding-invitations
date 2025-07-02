"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  MapPin,
  Calendar,
  Clock,
  Users,
  Utensils,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { formatDateToGreek, formatTimeToGreek } from "@/lib/utils";

const translations = {
  en: {
    backToTemplates: "← Back to Templates",
    ourStory: "Our Story",
    storyP1:
      "We met in 2018 at a design conference in Manhattan. Alex was presenting on sustainable architecture, and Jordan was there covering the event for a tech blog.",
    storyP2:
      "What started as a professional interview over coffee turned into hours of conversation about everything from urban planning to our shared love of vintage vinyl records.",
    storyP3:
      "Five years later, we're ready to start the next chapter of our story together, and we can't imagine celebrating without the people who mean the most to us.",
    eventDetails: "Event Details",
    ceremony: "Ceremony",
    reception: "Reception",
    gettingThere: "Getting There",
    transportation: "Transportation",
    accommodations: "Accommodations",
    joinUs: "Join Us",
    joinUsText:
      "We're excited to celebrate this special day with our closest family and friends. Please let us know if you can make it by September 1st, 2024.",
    rsvp: "RSVP",
    templatePreview: "This is a preview of the Modern Minimalist template",
    createYourOwn: "Create Your Own Wedding Website",
    togetherSince: "Together since 2018",
  },
  gr: {
    backToTemplates: "← Επιστροφή στα Πρότυπα",
    ourStory: "Η Ιστορία μας",
    storyP1:
      "Γνωριστήκαμε το 2018 σε ένα συνέδριο σχεδιασμού στο Μανχάταν. Ο Άλεξ παρουσίαζε για τη βιώσιμη αρχιτεκτονική, και ο Ιορδάνης ήταν εκεί για να καλύψει την εκδήλωση για ένα τεχνολογικό blog.",
    storyP2:
      "Αυτό που ξεκίνησε ως μια επαγγελματική συνέντευξη με καφέ μετατράπηκε σε ώρες συζήτησης για τα πάντα, από τον αστικό σχεδιασμό μέχρι την κοινή μας αγάπη για vintage βινύλια.",
    storyP3:
      "Πέντε χρόνια αργότερα, είμαστε έτοιμοι να ξεκινήσουμε το επόμενο κεφάλαιο της ιστορίας μας μαζί, και δεν μπορούμε να φανταστούμε να γιορτάσουμε χωρίς τους ανθρώπους που σημαίνουν τα περισσότερα για εμάς.",
    eventDetails: "Λεπτομέρειες Εκδήλωσης",
    ceremony: "Τελετή",
    reception: "Δεξίωση",
    gettingThere: "Πώς να φτάσετε",
    transportation: "Μεταφορά",
    accommodations: "Διαμονή",
    joinUs: "Ελάτε μαζί μας",
    joinUsText:
      "Είμαστε ενθουσιασμένοι να γιορτάσουμε αυτή την ξεχωριστή μέρα με την πιο στενή οικογένεια και φίλους μας. Παρακαλούμε ενημερώστε μας αν μπορείτε να έρθετε έως την 1η Σεπτεμβρίου 2024.",
    rsvp: "Επιβεβαίωση Παρουσίας",
    templatePreview:
      "Αυτή είναι μια προεπισκόπηση του προτύπου Μοντέρνος Μινιμαλισμός",
    createYourOwn: "Δημιουργήστε τη Δική σας Ιστοσελίδα Γάμου",
    togetherSince: "Μαζί από το 2018",
  },
};

interface Props {
  id?: string;
  name1: string;
  name2: string;
  email: string;
  phone: string;
  date: Date | string;
  social_media: string;
  description: string;
  reception_time: string;
  ceremony_time: string;
  venue_name: string;
  venue_address: string;
  venue_coordinates: string;
  template: string;
}

export function ModernMinimalistTemplate({ data }: { data: Props }) {
  const [language, setLanguage] = useState<"en" | "gr">("gr");
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-100">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-6 w-6 text-amber-500 mr-2" />
          <span className="text-xl font-semibold text-gray-800">
            WeddingInvite
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "ΕΛ" : "EN"}
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            <Link href="/">{t.backToTemplates}</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-light text-gray-800 mb-8 tracking-wide">
            {/* {language === "en" ? "Alex & Jordan" : "Άλεξ & Ιορδάνης"} */}
            {`${data.name1.split(" ")[0]} & ${data.name2.split(" ")[0]}`}
          </h1>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Αγαπητοί μου φίλοι, παντρευόμαστε και θα χαιρόμασταν να έρθετε μαζί
            μας
            {/* We&apos;re getting married and we&apos;d love for you to join us */}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <p className="text-gray-800 font-medium">
                {/* {language === "en" ? "October 14" : "14 Οκτωβρίου"} */}
                {formatDateToGreek(data.date)}
              </p>
              <p className="text-gray-600 text-sm">2024</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <p className="text-gray-800 font-medium">
                {formatTimeToGreek(data.ceremony_time)}
              </p>
              <p className="text-gray-600 text-sm">{t.ceremony}</p>
            </div>
            {/* <div className="text-center">
              <MapPin className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <p className="text-gray-800 font-medium">Brooklyn</p>
              <p className="text-gray-600 text-sm">
                {language === "en" ? "New York" : "Νέα Υόρκη"}
              </p>
            </div> */}
          </div>
        </div>

        {/* About Us */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                {t.ourStory}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{data.description}</p>
                {/* <p>{t.storyP2}</p> */}
                {/* <p>{t.storyP3}</p> */}
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Heart className="h-16 w-16 mx-auto mb-4 text-amber-500" />
                <p className="text-lg font-light">
                  {/* {language === "en" ? "Alex & Jordan" : "Άλεξ & Ιορδάνης"} */}
                  {`${data.name1.split(" ")[0]} & ${data.name2.split(" ")[0]}`}
                </p>
                <p className="text-sm">{t.togetherSince}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-800 text-center mb-12">
            {t.eventDetails}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-100">
              <CardContent className="p-8">
                <div className="text-center">
                  <Users className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {t.ceremony}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <p className="font-medium">{data.venue_name}</p>
                      <p className="text-sm">
                        {/* 990 Washington Ave,{" "}
                        {language === "en"
                          ? "Brooklyn, NY 11225"
                          : "Μπρούκλιν, Νέα Υόρκη 11225"} */}
                        {data.venue_address}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">
                        {/* {language === "en"
                          ? "October 14, 2024"
                          : "14 Οκτωβρίου, 2024"} */}
                        {formatDateToGreek(data.ceremony_time)}
                      </p>
                      <p className="text-sm">
                        {formatTimeToGreek(data.ceremony_time)}
                      </p>
                      {/* <p className="text-sm">5:00 PM - 6:00 PM</p> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-100">
              <CardContent className="p-8">
                <div className="text-center">
                  <Utensils className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {t.reception}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <p className="font-medium">{data.venue_name}</p>
                      {/* <p className="font-medium">The Green Building</p> */}
                      <p className="text-sm">
                        {data.venue_address}
                        {/* 452 Union St,{" "}
                        {language === "en"
                          ? "Brooklyn, NY 11231"
                          : "Μπρούκλιν, Νέα Υόρκη 11231"} */}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">
                        {/* {language === "en"
                          ? "October 14, 2024"
                          : "14 Οκτωβρίου, 2024"} */}
                        {formatDateToGreek(data.reception_time)}
                      </p>
                      <p className="text-sm">
                        {formatTimeToGreek(data.reception_time)}
                      </p>
                      {/* <p className="text-sm">7:00 PM - 12:00 AM</p> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Location Info */}
        <section className="mb-20">
          <Card className="border-gray-100 bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
                {t.gettingThere}
              </h2>
              <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
                {data.venue_coordinates}
              </h2>
              <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
                Social: {data.social_media}
              </h2>
              <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
                email: {data.email}
              </h2>
              <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
                phone: {data.phone}
              </h2>

              {/* <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    {t.transportation}
                  </h3>
                  <div className="space-y-3 text-gray-600 text-sm">
                    <p>
                      <strong>Subway:</strong> Take the B/Q to Prospect Park or
                      2/3 to Eastern Parkway
                    </p>
                    <p>
                      <strong>Parking:</strong> Street parking available, arrive
                      early
                    </p>
                    <p>
                      <strong>Rideshare:</strong> Uber and Lyft pickup zones
                      marked
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    {t.accommodations}
                  </h3>
                  <div className="space-y-3 text-gray-600 text-sm">
                    <p>
                      <strong>Hotel Le Bleu:</strong> 370 4th Ave, Brooklyn (10
                      min drive)
                    </p>
                    <p>
                      <strong>Nu Hotel:</strong> 85 Smith St, Brooklyn (15 min
                      drive)
                    </p>
                    <p>
                      <strong>Manhattan Hotels:</strong> 30-45 min by subway
                    </p>
                  </div>
                </div>
              </div> */}
            </CardContent>
          </Card>
        </section>

        {/* RSVP */}
        {/* <section className="text-center mb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              {t.joinUs}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{t.joinUsText}</p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-3 text-lg font-light"
            >
              {t.rsvp}
            </Button>
          </div>
        </section> */}

        {/* Template Info */}
        {/* <div className="text-center py-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-4">{t.templatePreview}</p>
          <Button
            asChild
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            <Link href="/">{t.createYourOwn}</Link>
          </Button>
        </div> */}
      </main>
    </div>
  );
}
