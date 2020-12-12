const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// add new client
const createClient = async (client) => {
    return await prisma.client.create({
        data: {
            first_name: client.first_name,
            last_name: client.last_name,
            dob: client.dob,
            address: client.address,
            country: client.country,
            phone: client.phone
        }
    });
};

// find all clients 
const findAllClients = async () => {
    return await prisma.client.findMany();
};

// find client by their ID
const findClientById = async(clientId) => {
    return await prisma.client.findUnique({
        where: {
            id: clientId, 
        }
    })
    .then((client)=>client)
    .catch((err)=> err);
};

const updateClient = async (clientId, update) => {
    return await prisma.client.update({
        where: {
            id: clientId,
        },
        data: {
            first_name: update.first_name,
            last_name: update.last_name,
            dob: update.dob,
            address: update.address,
            country: update.country,
            phone: update.phone
        }
    });
};

module.exports = {
    createClient, 
    findAllClients,
    findClientById,
    updateClient
}