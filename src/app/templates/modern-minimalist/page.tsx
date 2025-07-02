import { ModernMinimalistTemplate } from "@/components/templates/modern-minimalist";
import React, { Suspense } from "react";

const INVITATION = {
  name1: "Μιχάλης Βασιλείου",
  name2: "Έμμα Σερέτη",
  email: "my@email.com",
  phone: "00306987654321",
  date: "2024-09-22",
  social_media: "a@social",
  description: "ena mikro description gia th mikrh mas efarmogh",
  reception_time: "2024-09-22T12:34",
  ceremony_time: "2024-09-22T21:43",
  venue_name: "ENA VENUE",
  venue_address: "ENA ADDRESS",
  venue_coordinates: "(12,32)",
  template: "modern-minimalist",
};

export default function Page() {
  return (
    <Suspense>
      <ModernMinimalistTemplate data={INVITATION} />
    </Suspense>
  );
}
