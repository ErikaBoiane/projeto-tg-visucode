/*
  Warnings:

  - You are about to drop the column `title` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `carb` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energetic` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredient` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produtos" (
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
INSERT INTO "new_produtos" ("created_at", "id") SELECT "created_at", "id" FROM "produtos";
DROP TABLE "produtos";
ALTER TABLE "new_produtos" RENAME TO "produtos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
