/*
  Warnings:

  - Added the required column `url_image` to the `PopularTours` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PopularTours" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url_image" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "stars" REAL NOT NULL,
    "reviews" INTEGER NOT NULL,
    "days" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "date_of_include" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_PopularTours" ("city", "country", "date_of_include", "days", "id", "price", "reviews", "stars", "title", "updated_at") SELECT "city", "country", "date_of_include", "days", "id", "price", "reviews", "stars", "title", "updated_at" FROM "PopularTours";
DROP TABLE "PopularTours";
ALTER TABLE "new_PopularTours" RENAME TO "PopularTours";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
