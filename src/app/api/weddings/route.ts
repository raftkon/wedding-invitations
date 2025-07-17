import { convertLocalStringToUTC } from "@/lib/date";
import { db } from "@/lib/db";
import { formatZodError } from "@/lib/zod-error";
import { formSchema, WeddingSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import type { Template } from "@prisma/client";

export const POST = async (req: NextRequest) => {
  try {
    const values = await req.json();
    const validatedValues = formSchema.safeParse({
      ...values,
      date: new Date(values.date),
    });
    console.log({
      values,
      // validatedValues,
      error: validatedValues.error?.flatten().fieldErrors,
    });
    if (!validatedValues.success) {
      return NextResponse.json({
        success: false,
        data: null,
        error: formatZodError(validatedValues.error),
      });
    }
    const convertedDate = convertLocalStringToUTC(validatedValues.data.date);
    delete validatedValues.data.username;
    delete validatedValues.data.date;
    const wedding = await db.wedding.create({
      data: {
        ...validatedValues.data,
        weddingDateTime: convertedDate,
      },
    });
    console.log({ wedding });
    revalidatePath(`/weddings/w/${wedding.id}`);
    return NextResponse.json({ success: true, data: wedding, error: null });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false, data: null, error: error });
  }
};
