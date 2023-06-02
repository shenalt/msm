-- CreateTable
CREATE TABLE "Show" (
    "showId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "spotifyLink" TEXT NOT NULL,
    "podcast" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cast" (
    "castId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "headshot" TEXT NOT NULL,
    "podcast" TEXT NOT NULL,
    "showId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Show_showId_key" ON "Show"("showId");

-- CreateIndex
CREATE UNIQUE INDEX "Cast_castId_key" ON "Cast"("castId");

-- AddForeignKey
ALTER TABLE "Cast" ADD CONSTRAINT "Cast_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("showId") ON DELETE RESTRICT ON UPDATE CASCADE;
