-- CreateTable
CREATE TABLE `MasteryCriteria` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `requiredTrials` INT NOT NULL,
    `requiredCorrect` INT NOT NULL,
    `currentCorrect` INT,
    `currentTrials` INT,
    `programId` INT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MasteryCriteria` ADD FOREIGN KEY (`programId`) REFERENCES `Program`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
