/*
  Warnings:

  - You are about to drop the column `decha` on the `Cita` table. All the data in the column will be lost.
  - Added the required column `fecha` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cita" (
    "idCita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "pacienteCedula" INTEGER,
    "medicoTarjetaProfesional" INTEGER,
    CONSTRAINT "Cita_pacienteCedula_fkey" FOREIGN KEY ("pacienteCedula") REFERENCES "Paciente" ("cedula") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cita_medicoTarjetaProfesional_fkey" FOREIGN KEY ("medicoTarjetaProfesional") REFERENCES "Medico" ("tarjetaProfesional") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cita" ("idCita", "medicoTarjetaProfesional", "pacienteCedula") SELECT "idCita", "medicoTarjetaProfesional", "pacienteCedula" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
