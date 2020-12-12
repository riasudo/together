const programModel = require("../model/programs");

// find all programs 
const getAllPrograms = async (_req, res) => {
    await programModel.findAllPrograms()
        .then(async (programs)=>{
            (!programs.length) 
            ? res.status(400).json({ message: "There are no programs yet!"})
            : res.status(200).send(program.data);
        })
};

// find client's programs
const getClientPrograms = async (req, res) => {
    await programModel.findProgramByClient(req.body.client_id)
        .then(async (programs) =>{
            (!programs.length) 
            ? res.status(400).json({ message: "There are no programs yet!"})
            : res.status(200).send(program.data);
        })
};

// find program by id
// if req.body.id doesn't work maybe params.id?
const getProgramById = async (req, res) => {
    await programModel.findProgramById(req.body.id)
        .then(async (programs) =>{
            (!programs.length) 
            ? res.status(400).json({ message: "That Program doesn't exist yet"})
            : res.status(200).send(program.data);
        })
};

// post a new program
const createNewProgram = (req, res) => {
    console.log(req);
    if (
        !req.body.client_id ||
        !req.body.name ||
        !req.body.index ||
        !req.body.description ||
        !req.body.category ||
        !req.body.task
    ) {
        res.status(400).json({
            error: "Missing property in request body.",
            requiredProperties: ["client_id", "name", "index", "description", "category", "task"]
        });
    }
    res.status(201).json(programModel.createProgram(req.body));
};


// update program

const updateProgram = (req, res) => {
    if (
        !req.body.client_id ||
        !req.body.name ||
        !req.body.index ||
        !req.body.description ||
        !req.body.category ||
        !req.body.task
    ) {
        res.status(400).json({
            error: "Cannot update, missing properties.",
            requiredProperties: ["client_id", "name", "index", "description", "category", "task"]
        });
    }
    res.status(201).json(programModel.updateProgram(req.body.id, req.body));
};

module.exports = {
    getAllPrograms, getClientPrograms, getProgramById, createNewProgram, updateProgram
}