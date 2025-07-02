-- CreateTable
CREATE TABLE "Invitation" (
    "id" TEXT NOT NULL,
    "name1" TEXT NOT NULL,
    "name2" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "social_media" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reception_time" TEXT NOT NULL,
    "ceremony_time" TEXT NOT NULL,
    "venue_name" TEXT NOT NULL,
    "venue_address" TEXT NOT NULL,
    "venue_coordinates" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);
