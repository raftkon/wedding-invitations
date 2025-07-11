import { convertLocalStringToUTC } from "@/lib/date";
import { db } from "@/lib/db";
import { WeddingSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const values = await req.json();
  console.log({values})
  const validatedValues = WeddingSchema.safeParse(values);
  if (!validatedValues.success) {
    return NextResponse.json({ error: "Invalid fields" });
  }
  const wedding = await db.wedding.create({
    data: {
      ...validatedValues.data,
      weddingDateTime: convertLocalStringToUTC(
        validatedValues.data.weddingDateTime
      ),
      ceremonyDateTime: validatedValues.data.ceremonyDateTime
        ? convertLocalStringToUTC(validatedValues.data.ceremonyDateTime)
        : undefined,
      receptionDateTime: validatedValues.data.receptionDateTime
        ? convertLocalStringToUTC(validatedValues.data.receptionDateTime)
        : undefined,
    },
  });
  revalidatePath(`/templates/t/${wedding.id}`);
  return NextResponse.json({ success: true, data: wedding });
};

export const GET = async () =>{
  return NextResponse.json("HELLO")
}