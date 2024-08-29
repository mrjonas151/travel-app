-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserRatings" (
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserRatings_idTour_fkey" FOREIGN KEY ("idTour") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserRatings_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserRatings" ("amentities", "comfort", "id", "idTour", "idUser", "locations", "prices", "services", "user_email", "user_name") SELECT "amentities", "comfort", "id", "idTour", "idUser", "locations", "prices", "services", "user_email", "user_name" FROM "UserRatings";
DROP TABLE "UserRatings";
ALTER TABLE "new_UserRatings" RENAME TO "UserRatings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
