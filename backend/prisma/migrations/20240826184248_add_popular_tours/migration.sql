/*
  Warnings:

  - You are about to drop the column `tour_type` on the `Tour` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url_image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "initial_date" DATETIME NOT NULL,
    "final_date" DATETIME NOT NULL,
    "initial_price" REAL NOT NULL,
    "max_people" INTEGER NOT NULL,
    "min_age" INTEGER NOT NULL,
    "overview_city" TEXT NOT NULL,
    "overview_curiosities" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "averageRating" REAL NOT NULL,
    "categoryId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "Tour_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tour_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tour" ("averageRating", "categoryId", "city", "countryId", "final_date", "id", "initial_date", "initial_price", "latitude", "longitude", "max_people", "min_age", "overview_city", "overview_curiosities", "title", "url_image") SELECT "averageRating", "categoryId", "city", "countryId", "final_date", "id", "initial_date", "initial_price", "latitude", "longitude", "max_people", "min_age", "overview_city", "overview_curiosities", "title", "url_image" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
