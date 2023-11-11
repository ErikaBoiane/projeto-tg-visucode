/*
  Warnings:

  - Added the required column `cod_barras` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ingredient" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "energetic" INTEGER NOT NULL,
    "protein" DECIMAL NOT NULL,
    "carb" DECIMAL NOT NULL,
    "fat" DECIMAL NOT NULL,
    "sodium" DECIMAL NOT NULL,
    "cod_barras" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL
);
INSERT INTO "new_products" ("carb", "created_at", "energetic", "fat", "id", "ingredient", "name", "protein", "quantity", "sodium") SELECT "carb", "created_at", "energetic", "fat", "id", "ingredient", "name", "protein", "quantity", "sodium" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
