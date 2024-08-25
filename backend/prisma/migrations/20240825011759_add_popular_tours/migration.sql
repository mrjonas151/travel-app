-- CreateTable
CREATE TABLE "PopularTours" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
