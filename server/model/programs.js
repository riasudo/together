const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// make new program
const createProgram = async (program) => {

    return await prisma.program.create({
        data:  {
            client_id: program.client_id,
            name: program.name,
            index: program.index,
            description: program.description,
            category: program.category,
            task: program.task,
            mastery: program.Mastery
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
        }
    })
    .then((program) => program)
    .catch((err)=> { throw err });
}

// edit programs
const updateProgram = async (programId, update) => {

    return await prisma.program.update({
        where: {
            id: programId,
        },
        data: {
            client_id: update.client_id,
            name: update.name,
            index: update.index,
            description: update.description,
            category: update.category,
            task: update.task,
            mastery: update.Mastery
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