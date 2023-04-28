-- CreateTable
CREATE TABLE "Folha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "horas" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL
);
