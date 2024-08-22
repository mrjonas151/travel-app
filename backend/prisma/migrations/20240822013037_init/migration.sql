-- CreateTable
CREATE TABLE "Trips" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "destination" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "travel_time" TEXT NOT NULL,
    "total_value" REAL NOT NULL,
    "tour_type" TEXT NOT NULL,
    "reviews" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Trips_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "last_name" TEXT,
    "date_of_include" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
