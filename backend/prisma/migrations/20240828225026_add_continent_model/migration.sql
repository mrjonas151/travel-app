CREATE TABLE "Continents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Countries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "travelers_quantity" INTEGER NOT NULL,
    "url_image" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "min_weather" INTEGER NOT NULL,
    "max_weather" INTEGER NOT NULL,
    "overview_country" TEXT,
    "overview_country_curiosities" TEXT,
    "language" TEXT,
    "currency" TEXT,
    "area" TEXT,
    "population" TEXT,
    "time_zone" TEXT,
    "time_to_travel" TEXT,
    "continentId" TEXT NOT NULL, 
    CONSTRAINT "Countries_continentId_fkey" FOREIGN KEY ("continentId") REFERENCES "Continents" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO "new_Countries" ("area", "currency", "id", "language", "latitude", "longitude", "max_weather", "min_weather", "name", "overview_country", "overview_country_curiosities", "population", "time_to_travel", "time_zone", "travelers_quantity", "url_image", "continentId")
SELECT "area", "currency", "id", "language", "latitude", "longitude", "max_weather", "min_weather", "name", "overview_country", "overview_country_curiosities", "population", "time_to_travel", "time_zone", "travelers_quantity", "url_image", '1' -- Ajuste o valor de '1' conforme necessário
FROM "Countries";

DROP TABLE "Countries";
ALTER TABLE "new_Countries" RENAME TO "Countries";

CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

CREATE UNIQUE INDEX "Continents_name_key" ON "Continents"("name");
