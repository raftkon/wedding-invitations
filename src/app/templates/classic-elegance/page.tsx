import { ClassicEleganceTemplate } from "@/components/templates/classic-elegance";
import React, { Suspense } from "react";
const data = {
  firstPartner: "Μιχάλης Βασιλείου",
  secondPartner: "Έμμα Σερέτη",
  email: "my@email.com",
  phone: "00306987654321",
  date: "2024-09-22T16:00",
  invites: "150",
  ceremony: {
    name: "Κήποι Villa Bellacorte",
    date: "2024-09-22T16:00",
  },
  reception: {
    name: "Βεράντα Villa Bellacorte",
    date: "2024-09-22T18:00",
    dinner: "2024-09-22T19:30",
  },
  location: {
    name: "Villa Bellacorte",
    country: "Ιταλία",
    city: "Τοσκάνη",
    description:
      "Φωλιασμένη στην καρδιά της αμπελουργικής περιοχής της Τοσκάνης, η Villa Bellacorte είναι ένα κτήμα του 16ου αιώνα περιτριγυρισμένο από κυματιστούς λόφους και αμπελώνες. Η βίλα προσφέρει εκπληκτική θέα στο τοπίο του Chianti και παρέχει το τέλειο ρομαντικό σκηνικό για την ξεχωριστή μας μέρα.",
    address: "Via del Chianti, 50022 Greve in Chianti FI, Ιταλία",
    coordinates: "(12.34, 43.21)",
    parking: "Διαθέσιμο στο χώρο",
    photoUrl: "",
  },
};
export default function Page() {
  return (
    <Suspense>
      <ClassicEleganceTemplate data={data} />
    </Suspense>
  );
}
