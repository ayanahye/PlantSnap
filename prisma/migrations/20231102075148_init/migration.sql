-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "step" TEXT NOT NULL,
    "order" REAL NOT NULL,
    "title" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "assignd" TEXT,
    "esthour" REAL,
    "acthour" REAL,
    "completed" TEXT,
    "start" INTEGER,
    "end" INTEGER
);
INSERT INTO "new_task" ("acthour", "assignd", "completed", "end", "esthour", "id", "level", "order", "start", "step", "title") SELECT "acthour", "assignd", "completed", "end", "esthour", "id", "level", "order", "start", "step", "title" FROM "task";
DROP TABLE "task";
ALTER TABLE "new_task" RENAME TO "task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
