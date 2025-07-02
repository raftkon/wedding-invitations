import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimestampToGreek(timestamp: string) {
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat("el-GR", {
    weekday: "short", // e.g. Τρί
    day: "2-digit", // e.g. 12
    month: "long", // e.g. Μαΐου
    year: "numeric", // e.g. 2020
    hour: "2-digit", // e.g. 02
    minute: "2-digit", // e.g. 50
    timeZone: "Europe/Athens",
  }).format(date);
}

export function formatTimeToGreek(timestamp: string) {
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat("el-GR", {
    hour: "2-digit", // e.g. 02
    minute: "2-digit", // e.g. 50
    timeZone: "Europe/Athens",
  }).format(date);
}

export function formatDateToGreek(timestamp: string | Date) {
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat("el-GR", {
    weekday: "short", // e.g. Τρί
    day: "2-digit", // e.g. 12
    month: "long", // e.g. Μαΐου
    year: "numeric", // e.g. 2020
  }).format(date);
}
