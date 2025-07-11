-- CreateEnum
CREATE TYPE "Template" AS ENUM ('classic_elegance', 'modern_minimalist', 'rustic_romance');

-- AlterTable
ALTER TABLE "Wedding" ADD COLUMN     "template" "Template" NOT NULL DEFAULT 'classic_elegance';
