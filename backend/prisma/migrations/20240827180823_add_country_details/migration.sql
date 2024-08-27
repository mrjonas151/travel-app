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
    "overview_country" TEXT NOT NULL DEFAULT 'No overview available',
    "overview_country_curiosities" TEXT NOT NULL DEFAULT 'No curiosities available',
    "language" TEXT NOT NULL DEFAULT 'Unknown',
    "currency" TEXT NOT NULL DEFAULT 'Unknown',
    "area" TEXT NOT NULL DEFAULT 'Unknown',
    "population" TEXT NOT NULL DEFAULT 'Unknown',
    "time_zone" TEXT NOT NULL DEFAULT 'Unknown',
    "time_to_travel" TEXT NOT NULL DEFAULT 'Unknown'
);
INSERT INTO "new_Countries" (
    "id", 
    "latitude", 
    "longitude", 
    "max_weather", 
    "min_weather", 
    "name", 
    "travelers_quantity", 
    "url_image",
    "overview_country",
    "overview_country_curiosities",
    "language",
    "currency",
    "area",
    "population",
    "time_zone",
    "time_to_travel"
) SELECT 
    "id", 
    "latitude", 
    "longitude", 
    "max_weather", 
    "min_weather", 
    "name", 
    "travelers_quantity", 
    "url_image",
    'No overview available',
    'No curiosities available',
    'Unknown',
    'Unknown',
    'Unknown',
    'Unknown',
    'Unknown',
    'Unknown'
FROM "Countries";
DROP TABLE "Countries";
ALTER TABLE "new_Countries" RENAME TO "Countries";
CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
