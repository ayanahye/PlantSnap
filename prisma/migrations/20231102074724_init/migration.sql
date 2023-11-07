-- CreateTable
CREATE TABLE "task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "step" TEXT NOT NULL,
    "order" REAL NOT NULL,
    "title" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "assignd" TEXT NOT NULL,
    "esthour" REAL NOT NULL,
    "acthour" REAL NOT NULL,
    "completed" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL
);
