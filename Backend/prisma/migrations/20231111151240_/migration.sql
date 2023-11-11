/*
  Warnings:

  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "produtos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ingredient" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "energetic" INTEGER NOT NULL,
    "protein" DECIMAL NOT NULL,
    "carb" DECIMAL NOT NULL,
    "fat" DECIMAL NOT NULL,
    "sodium" DECIMAL NOT NULL,
    "created_at" DATETIME NOT NULL
);
