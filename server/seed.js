const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const clientData = require("./seed_data/clients");
const programData = require("./seed_data/programs");
const notesData = require("./seed_data/programNotes");

// Insert Sample Clients from Seed_data
const insertAllClients = async () => {

    clientData.forEach(async (client) =>{

        await prisma.client.create({
            data: {
                first_name: client.first_name,
                last_name: client.last_name,
                dob: client.dob,
                address: client.address,
                country: client.country,
                phone: client.phone,
                
            }
        }).then((res)=>console.log(res));
    })
}

// insertAllClients().then((res)=>console.log(res));

// Insert Sample Programs from Seed_data
const insertAllPrograms = async () => {

    programData.forEach(async (item)=>{

        await prisma.program.create({
            data: {
                name: item.name,
                index: item.index,
                category: item.category,
                description: item.description,
                task: item.task,
                mastery: item.mastery,
                Client: {
                    connect: {
                        id: item.client_id
                    }
                }
            }
        }).then((res)=> console.log(res)).catch((err)=>console.log(err));
    })
}

// insertAllPrograms().then((res)=>console.log(res));

// Insert Sample Program notes from seed_data
const insertProgramNotes = async () => {
    notesData.forEach(async (note)=>{

        await prisma.programNotes.create({
            data: {
                comment: note.comment,
                timestamp: note.timestamp,
                Program: {
                    connect: {
                        id: note.programId
                    }
                }
            }
        }).then((res)=> console.log(res)).catch((err)=>console.log(err));
    })
}

//  insertProgramNotes().then((res)=>console.log(res));