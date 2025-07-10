import {z} from "zod"
import { isValidDate } from "@/lib/date";

export const weddingSchema = z.object({
  firstPartnerName: z.string().min(1),
  secondPartnerName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  weddingDateTime: z.string().refine(isValidDate, { message: "Invalid wedding date" }),

  ceremonyDateTime: z.string().optional(),
  ceremonyDuration: z.coerce.number().int().min(0).optional(),
  receptionDateTime: z.string().optional(),
  receptionDuration: z.coerce.number().int().min(0).optional(),

  venueName: z.string().optional(),
  venueAddress: z.string().optional(),
  venueCoords: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .optional(),
  venueDetails: z.string().optional(),

  description: z.string().optional(),
});