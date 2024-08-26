/*
  Warnings:

  - You are about to drop the `PopularTours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trips` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PopularTours";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Trips";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url_image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "initial_date" DATETIME NOT NULL,
    "final_date" DATETIME NOT NULL,
    "initial_price" REAL NOT NULL,
    "max_people" INTEGER NOT NULL,
    "min_age" INTEGER NOT NULL,
    "tour_type" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Countries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "travelers_quantity" INTEGER NOT NULL,
    "url_image" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "min_weather" INTEGER NOT NULL,
    "max_weather" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "UserRatings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idTour" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "services" INTEGER NOT NULL,
    "locations" INTEGER NOT NULL,
    "amentities" INTEGER NOT NULL,
    "prices" INTEGER NOT NULL,
    "comfort" INTEGER NOT NULL,
    CONSTRAINT "UserRatings_idTour_fkey" FOREIGN KEY ("idTour") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserRatings_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");
