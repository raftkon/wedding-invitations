/*
  Warnings:

  - You are about to drop the `Invitation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Invitation";

-- CreateTable
CREATE TABLE "Wedding" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstPartnerName" TEXT NOT NULL,
    "secondPartnerName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "weddingDateTime" TIMESTAMP(3) NOT NULL,
    "ceremonyDateTime" TIMESTAMP(3),
    "ceremonyDuration" INTEGER,
    "receptionDateTime" TIMESTAMP(3),
    "receptionDuration" INTEGER,
    "venueName" TEXT,
    "venueAddress" TEXT,
    "venueCoords" JSONB,
    "venueDetails" TEXT,
    "description" TEXT,

    CONSTRAINT "Wedding_pkey" PRIMARY KEY ("id")
);
