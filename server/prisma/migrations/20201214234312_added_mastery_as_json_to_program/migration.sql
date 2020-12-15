/*
  Warnings:

  - You are about to drop the `MasteryCriteria` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Mastery` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `MasteryCriteria` DROP FOREIGN KEY `masterycriteria_ibfk_1`;

-- AlterTable
ALTER TABLE `Program` ADD COLUMN     `Mastery` JSON NOT NULL;

-- DropTable
DROP TABLE `MasteryCriteria`;
