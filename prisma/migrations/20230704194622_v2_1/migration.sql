/*
  Warnings:

  - Added the required column `telefono` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "cedula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "telefono" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("apellido", "cedula", "fechaNacimiento", "nombre") SELECT "apellido", "cedula", "fechaNacimiento", "nombre" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
