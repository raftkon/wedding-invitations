import { convertLocalStringToUTC } from "@/lib/date";
import { db } from "@/lib/db";
import { WeddingSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { formSchema } from "./new2/page";

export const POST = async (req: NextRequest) => {
  const values = await req.json();
  console.log({ values });
  const validatedValues = formSchema.safeParse(values);
  // const validatedValues = WeddingSchema.safeParse(values);
  console.log({ validatedValues, error: validatedValues.error });
  if (!validatedValues.success) {
    return NextResponse.json({
      error: true,
      success: false,
      data: validatedValues.error,
    });
  }
  const wedding = await db.wedding.create({
    data: {
      ...validatedValues.data,
      weddingDateTime: convertLocalStringToUTC(validatedValues.data.date),
    },
  });
  console.log({ wedding });
  // revalidatePath(`/templates/t/${wedding.id}`);
  return NextResponse.json({ success: true, data: wedding, error: false });
};

export const GET = async () => {
  return NextResponse.json("HELLO");
};
