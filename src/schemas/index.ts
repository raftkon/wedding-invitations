import {z} from "zod"
import { isValidDate } from "@/lib/date";

export const WeddingSchema = z.object({
  firstPartnerName: z.string().min(1),
  secondPartnerName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  weddingDateTime: z.coerce.date(),
  // weddingDateTime: z.string().refine(isValidDate, { message: "Invalid wedding date" }),

  ceremonyDateTime: z.coerce.date().nullable(),
  ceremonyDuration: z.coerce.number().int().min(0).nullable(),
  receptionDateTime: z.coerce.date().nullable(),
  receptionDuration: z.coerce.number().int().min(0).nullable(),

  venueName: z.string().nullable(),
  venueAddress: z.string().nullable(),
  venueCoords: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .nullable(),
  venueDetails: z.string().nullable(),

  description: z.string().nullable(),
});