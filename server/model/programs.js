const { PrismaClient } = require('@prisma/client');
const { json } = require('express');
const prisma = new PrismaClient();

// make new program
const createProgram = async (program) => {

    return await prisma.program.create({
        data:  {
            Client: {
                connect: {
                    id: program.client_id,
                }
            },     
            name: program.name,
            index: program.index,
            description: program.description,
            category: program.category,
            task: program.task,
            mastery: program.mastery
        }
    });
};

// find all programs 
const findAllPrograms = async () =>{
    return await prisma.program.findMany();
};


// find programs by Client ID
const findProgramByClient = async (clientId) => {

    return await prisma.program.findMany({
        where: {
            clientId: clientId,
        },
        include: {
            ProgramNotes: true,
        }
    })
    .then((program)=>program)
    .catch((err)=>{ throw err });
}

// find program by program ID
const findProgramById = async (programId) => {

    return await prisma.program.findUnique({
        where: {
            id: programId
        },
        include: {
            ProgramNotes: true,
        }
    })
    .then((program) => program)
    .catch((err)=> { throw err });
}

// edit programs
const updateProgram = async (update) => {
    console.log("data: ", update)
    return await prisma.program.update({
        where: {
            id: update.id,
        },
        data: {
            Client: {
                connect: {
                    id: update.clientId,
                }
            },
            name: update.name,
            index: update.index,
            description: update.description,
            category: update.category,
            task: update.task,
            mastery: update.mastery,
        }
    })
}

module.exports = {
    createProgram,
    findAllPrograms,
    findProgramById,
    findProgramByClient,
    updateProgram
}