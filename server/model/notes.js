const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Notes MUST belong to a program

// find ALL notes
const findAllNotes = async () => {
    return await prisma.programNotes.findMany();
};

// find notes by PROGRAM ID 
const findNotesByProgram = async (programId) => {

    return await prisma.programNotes.findMany({
        where: {
            programId: programId
        }
    })
    .then((notes)=>notes)
    .catch((err)=> { throw err });
};

// find notes by NOTE ID 
const findUniqueNote = async (noteId) => {
    
    return await prisma.programNotes.findUnique({
        where: {
            id: noteId
        }
    })
    .then((note)=>note)
    .catch((err)=> { throw err });
};

// create a new note
const createNote = async (programNote) => {
    return await prisma.programNotes.create({
        data: {
            Program: {
                connect: {
                    id: programNote.programId
                }
            },
            comment: programNote.comment,
            timestamp: programNote.timestamp,            
        }
    })
}

// update notes
const updateNote = async (noteId, update) => {
    return await prisma.programNotes.update({
        where: {
            id: noteId,
        },
        data: {
            Program: {
                connect: {
                    id: update.programId
                }
            },
            comment: update.comment,
        },
    })
};

module.exports = { findAllNotes, findNotesByProgram, findUniqueNote, createNote, updateNote }