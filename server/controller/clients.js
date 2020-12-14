const clientModel = require("../model/clients");

//find all clients 
const getAllClients = async (_req, res) => {
    await clientModel.findAllClients()
    .then(async (clients)=>{
        (!clients)
        ? res.status(400).json({ message: "Cannot find clients." })
        : res.status(200).send(clients);
    })
};

//find client by id
const getClientById = async (req, res) => {
    console.log("Body: ", req.body, " Params: ", req.params);
    await clientModel.findClientById(parseInt(req.params.id))
    .then(async (client)=> {
        (!client)
        ? res.status(400).json({ message: "Cannot find client with that ID." })
        : res.status(200).send(client);
    })
};

//post new client
const createNewClient = (req, res) =>{
    console.log(req);
    if (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.dob ||
        !req.body.address ||
        !req.body.country ||
        !req.body.phone
    ) {
        res.status(400).json({
            error: "missing properties in request body.",
            requiredProperties: ["first_name", "last_name", "dob", "address", "country", "phone"]
        });
    }
    res.status(201).json(clientModel.createClient(req.body));
}

//update client 
const updateClient = (req, res) => {
    (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.dob ||
        !req.body.address ||
        !req.body.country ||
        !req.body.phone
    )
    ? res.status(400).json({
        error: "missing properties in request body.",
        requiredProperties: ["first_name", "last_name", "dob", "address", "country", "phone"]
    
    })
    : res.status(201).json(clientModel.updateClient(req.body));
}

module.exports = { getAllClients, getClientById, createNewClient, updateClient };