"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  MapPin,
  Calendar,
  Clock,
  Camera,
  Music,
  Globe,
  MoveLeft,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { formatDateToGreek, formatTimeToGreek } from "@/lib/utils";
import translations from "@/constants/translations.json";
import { z } from "zod";
import { WeddingSchema } from "@/schemas";

type Wedding = z.infer<typeof WeddingSchema>;

export function ClassicEleganceTemplate({ data }: { data: Wedding }) {
  const [language, setLanguage] = useState<"en" | "gr">("gr");
  const searchParams = useSearchParams();
  const t = translations["ClassicEleganceTemplate"][language];

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
            <Link href="/">
              <MoveLeft />
              {t.backToTemplates}
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12 py-16 bg-white rounded-2xl shadow-lg border border-rose-100">
          <div className="w-24 h-24 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-12 w-12 text-rose-600" />
          </div>
          <h1 className="text-5xl font-serif text-gray-800 mb-4">
            {`${data.firstPartnerName} & ${data.secondPartnerName}`}
          </h1>
          <div className="w-32 h-px bg-rose-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-8">{t.togetherWith}</p>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-rose-500" />
              <span className="text-lg">
                {formatDateToGreek(data.weddingDateTime)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-rose-500" />
              <span className="text-lg">{data.venueName}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {data.ceremonyDateTime && (
            <Card className="border-rose-100">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t.ceremony}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>{t.time}:</strong> data.ceremonyDateTime
                      {/* {formatTimeToGreek(data.ceremonyDateTime)} */}
                    </p>
                    <p>
                      <strong>{t.location}:</strong> {data.venueName}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {data.receptionDateTime && (
            <Card className="border-rose-100">
              <CardContent className="p-6">
                <div className="text-center">
                  <Music className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t.reception}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>{t.time}:</strong> data.receptionDateTime
                      {/* {formatTimeToGreek(data.receptionDateTime)} */}
                    </p>
                    <p>
                      <strong>{t.location}:</strong> {data.venueName}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mb-8 border-rose-100">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-6">
              {t.theVenue}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {data.venueName}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {data.venueDetails}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>{t.address}:</strong> {data.venueAddress}
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-rose-100 to-amber-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Camera className="h-12 w-12 mx-auto mb-2" />
                  <p>{data.venueName}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
