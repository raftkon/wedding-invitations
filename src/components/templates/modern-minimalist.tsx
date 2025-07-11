"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, Clock, Users, Utensils, Globe } from "lucide-react";
import Link from "next/link";
import { formatDateToGreek, formatTimeToGreek } from "@/lib/utils";
import { z } from "zod";
import { WeddingSchema } from "@/schemas";

type Wedding = z.infer<typeof WeddingSchema>;

const translations = {
  en: {
    backToTemplates: "← Back to Templates",
    ourStory: "Our Story",
    eventDetails: "Event Details",
    ceremony: "Ceremony",
    reception: "Reception",
    gettingThere: "Getting There",
    togetherSince: "Together since 2018",
  },
  gr: {
    backToTemplates: "← Επιστροφή στα Πρότυπα",
    ourStory: "Η Ιστορία μας",
    eventDetails: "Λεπτομέρειες Εκδήλωσης",
    ceremony: "Τελετή",
    reception: "Δεξίωση",
    gettingThere: "Πώς να φτάσετε",
    togetherSince: "Μαζί από το 2018",
  },
};

export function ModernMinimalistTemplate({ data }: { data: Wedding }) {
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
        <div className="text-center mb-20">
          <h1 className="text-6xl font-light text-gray-800 mb-8 tracking-wide">
            {`${data.firstPartnerName.split(" ")[0]} & ${
              data.secondPartnerName.split(" ")[0]
            }`}
          </h1>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Αγαπητοί μας φίλοι, σας περιμένουμε με χαρά στον γάμο μας
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <p className="text-gray-800 font-medium">
                {formatDateToGreek(data.weddingDateTime)}
              </p>
              <p className="text-gray-600 text-sm">2024</p>
            </div>
            {data.ceremonyDateTime && (
              <div className="text-center">
                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                <p className="text-gray-800 font-medium">
                  data.ceremonyDateTime
                  {/* {formatTimeToGreek(data.ceremonyDateTime)} */}
                </p>
                <p className="text-gray-600 text-sm">{t.ceremony}</p>
              </div>
            )}
          </div>
        </div>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                {t.ourStory}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{data.description}</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Heart className="h-16 w-16 mx-auto mb-4 text-amber-500" />
                <p className="text-lg font-light">
                  {`${data.firstPartnerName.split(" ")[0]} & ${
                    data.secondPartnerName.split(" ")[0]
                  }`}
                </p>
                <p className="text-sm">{t.togetherSince}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-800 text-center mb-12">
            {t.eventDetails}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.ceremonyDateTime && (
              <Card className="border-gray-100">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-800 mb-4">
                      {t.ceremony}
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <div>
                        <p className="font-medium">{data.venueName}</p>
                        <p className="text-sm">{data.venueAddress}</p>
                      </div>
                      <div>
                        <p className="font-medium">
                          {formatDateToGreek(data.ceremonyDateTime)}
                        </p>
                        <p className="text-sm">
                          data.ceremonyDateTime
                          {/* {formatTimeToGreek(data.ceremonyDateTime)} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {data.receptionDateTime && (
              <Card className="border-gray-100">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Utensils className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-800 mb-4">
                      {t.reception}
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <div>
                        <p className="font-medium">{data.venueName}</p>
                        <p className="text-sm">{data.venueAddress}</p>
                      </div>
                      <div>
                        <p className="font-medium">
                          {formatDateToGreek(data.receptionDateTime)}
                        </p>
                        <p className="text-sm">
                          data.receptionDateTime
                          {/* {formatTimeToGreek(data.receptionDateTime)} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <section className="mb-20">
          <Card className="border-gray-100 bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light text-gray-800 text-center mb-8">
                {t.gettingThere}
              </h2>
              {data.venueCoords && (
                <p className="text-center text-gray-600 mb-4">
                  Συντεταγμένες: {data.venueCoords.lat}, {data.venueCoords.lng}
                </p>
              )}
              <p className="text-center text-gray-600 mb-2">
                Email: {data.email}
              </p>
              <p className="text-center text-gray-600 mb-2">
                Τηλέφωνο: {data.phone}
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
