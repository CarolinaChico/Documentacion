/*
  Warnings:

  - You are about to drop the column `fecha_nacimiento` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `fechaNacimiento` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "idUsuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("apellido", "contrasena", "idUsuario", "nombre", "usuario") SELECT "apellido", "contrasena", "idUsuario", "nombre", "usuario" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_usuario_key" ON "Usuario"("usuario");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
