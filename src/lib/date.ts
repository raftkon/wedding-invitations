// lib/date.ts
import { formatInTimeZone, toZonedTime, fromZonedTime } from "date-fns-tz";

const GREECE_TIMEZONE = "Europe/Athens";

/**
 * Converts a datetime-local string (e.g. "2025-09-21T14:00") — interpreted as Greece time — into a UTC Date
 */
export function convertLocalStringToUTC(localDateTime: string | Date): Date {
  return fromZonedTime(localDateTime, GREECE_TIMEZONE);
}

/**
 * Converts a UTC date to a Date object representing Greece local time
 */
export function convertUTCToGreece(utcDate: Date): Date {
  return toZonedTime(utcDate, GREECE_TIMEZONE);
}

/**
 * Formats a UTC date to a readable string in Greece timezone
 */
export function formatDateToGreekTimeString(
  utcDate: Date,
  pattern = "dd/MM/yyyy HH:mm"
): string {
  return formatInTimeZone(utcDate, GREECE_TIMEZONE, pattern);
}

/**
 * Validates whether a date is a valid date
 */
export function isValidDate(value: unknown): boolean {
  if (typeof value === "string" || value instanceof Date) {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  return false;
}
