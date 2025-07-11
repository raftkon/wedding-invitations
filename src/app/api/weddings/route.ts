import { convertLocalStringToUTC } from "@/lib/date";
import { db } from "@/lib/db";
import { WeddingSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const values = await req.json();
    const validatedValues = WeddingSchema.safeParse(values);
    console.log({values,validatedValues})
    if (!validatedValues.success) {

      return NextResponse.json({ error: "Invalid fields",data:validatedValues.error.errors });
    }

    console.log("!@######################@@@@@@@@@@@!");
    const wedding = await db.wedding.create({
      data:{...validatedValues.data}
    });
    console.log({ wedding });
    revalidatePath(`/weddings/w/${wedding.id}`);
    return NextResponse.json({ success: true, data: wedding });
  } catch (error) {
    console.log({ error });
  }
};
