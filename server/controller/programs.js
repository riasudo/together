const programModel = require("../model/programs");

// find all programs 
const getAllPrograms = async (_req, res) => {
    await programModel.findAllPrograms()
        .then(async (programs)=>{
            (!programs) 
            ? res.status(400).json({ message: "There are no programs yet!"})
            : res.status(200).send(programs);
        })
};

// find client's programs
const getClientPrograms = async (req, res) => {
    await programModel.findProgramByClient(parseInt(req.params.client_id))
        .then(async (programs) =>{
            (!programs) 
            ? res.status(400).json({ message: "There are no programs yet!"})
            : res.status(200).send(programs);
        })
};

// find program by id
const getProgramById = async (req, res) => {
    await programModel.findProgramById(parseInt(req.params.id))
        .then(async (programs) =>{
            (!programs) 
            ? res.status(400).json({ message: "That Program doesn't exist yet"})
            : res.status(200).send(programs);
        })
};

// post a new program
const createNewProgram = (req, res) => {
    if (
        !req.body.client_id ||
        !req.body.name ||
        !req.body.index ||
        !req.body.description ||
        !req.body.category ||
        !req.body.task ||
        !req.body.mastery
    ) {
        res.status(400).json({
            error: "Missing property in request body.",
            requiredProperties: ["client_id", "name", "index", "description", "category", "task", "mastery"]
        });
    }
    res.status(201).json(programModel.createProgram(req.body));
};


// update program

const updateProgram = (req, res) => {
    if (
        !req.body.clientId ||
        !req.body.name ||
        !req.body.index ||
        !req.body.description ||
        !req.body.category ||
        !req.body.task ||
        !req.body.mastery

    ) {
        res.status(400).json({
            error: "Cannot update, missing properties.",
            requiredProperties: ["client_id", "name", "index", "description", "category", "task", "mastery"]
        });
    }
    console.log(req.body)
    res.status(201).json(programModel.updateProgram(req.body));
};

module.exports = {
    getAllPrograms, getClientPrograms, getProgramById, createNewProgram, updateProgram
}