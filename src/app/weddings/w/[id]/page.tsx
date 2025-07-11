import { db } from "@/lib/db";
import { ModernMinimalistTemplate } from "@/components/templates/modern-minimalist";
import { notFound } from "next/navigation";

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

  return (
    <ModernMinimalistTemplate
      data={{
        ...wedding,
        venueCoords: wedding.venueCoords as { lng: number; lat: number },
      }}
    />
  );
}
