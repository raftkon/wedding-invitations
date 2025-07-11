import { db } from "@/lib/db";
import { ModernMinimalistTemplate } from "@/components/templates/modern-minimalist";
import { notFound } from "next/navigation";
import { RusticRomanceTemplate } from "@/components/templates/rustic-romance";
import { ClassicEleganceTemplate } from "@/components/templates/classic-elegance";

export async function generateStaticParams() {
  const weddings = await db.wedding.findMany({ select: { id: true } });
  return weddings.map((w) => ({ id: w.id }));
}

export default async function WeddingPage({
  params,
}: {
  params: { id: string };
}) {
  const wedding = await db.wedding.findUnique({
    where: { id: params.id },
  });
  if (!wedding) return notFound();
  const data = {
    ...wedding,
    venueCoords: wedding.venueCoords as { lng: number; lat: number },
  };

  switch (wedding.template) {
    case "modern_minimalist":
      return <ModernMinimalistTemplate data={data} />;
    case "classic_elegance":
      return <ClassicEleganceTemplate data={data} />;
    case "rustic_romance":
      return <RusticRomanceTemplate data={data} />;
    default:
      return <div>Invalid template</div>;
  }
}
