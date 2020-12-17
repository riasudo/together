const noteModel = require("../model/notes");

//find all notes
const getAllNotes = async (req, res) => {
    await noteModel.findAllNotes()
    .then(async(notes)=>{
        (!notes)
        ? res.status(400).json({ message: "No notes found."})
        : res.status(200).send(notes);
    })
};

//find notes for Program
const getNotesByProgram = async (req, res) => {
    console.log(req);
    await noteModel.findNotesByProgram(parseInt(req.params.programId))
    .then(async(notes)=>{
        (!notes)
        ? res.status(400).json({ message: "No notes found for this program."})
        : res.status(200).send(notes);
    })
};

//find single note
const getUniqueNote = async (req, res) => {
    await noteModel.findUniqueNote(parseInt(req.params.id))
    .then(async(note)=>{
        (!note)
        ? res.status(400).json({ message: "No note found with provided ID."})
        : res.status(200).send(note);
    })
};

//create new note
const createNewNote = (req, res) => {
    if (
        !req.body.programId ||
        !req.body.comment ||
        !req.body.timestamp
    ){
        res.status(400).json({
            error: "missing required properties in request.",
            requiredProperties: ["programId", "comment", "timestamp"]
        });
    }
    res.status(201).json(noteModel.createNote(req.body));
};

//update note
const updateNote = (req, res) => {
    if (
        !req.body.programId ||
        !req.body.comment ||
        !req.body.timestamp
    ){
        res.status(400).json({
            error: "missing required properties in request.",
            requiredProperties: ["programId", "comment", "timestamp"]
        });
    }
    res.status(201).json(noteModel.updateNote( req.body));    
};

module.exports = {
    getAllNotes,
    getNotesByProgram,
    getUniqueNote,
    createNewNote,
    updateNote
}