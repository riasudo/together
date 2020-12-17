

export default function UpdateUniqueProgram (props){
    const { name, index, category, mastery, description, task, ProgramNotes} = props.data;
    console.log(props.data);

    const formatDate = (string) => {
        return new Date(string).toLocaleDateString();
    }
    return (
        <form className="program-details-card" onSubmit={(e, program)=>props.handleUpdate(e, props.data)}>
            <div className="program-details__header">
                <button className="toggle_update" onClick={e=>{props.toggleUpdate(e)}}>{"<"}</button>
                <h2 className="program-details__name">{name}</h2>
                <p className="program-details__level">Current Progress: {index}</p>
                <p className="program-details__category">{category}</p>
            </div>
            <div className="program-details__info">
                <h3 className="program-details__label">Goal: </h3>
                <p className="program-details__goal">{description}</p>
                <h3 className="program-details__label">Task: </h3>
                <p className="program-details__task">{task}</p>
            </div>
            {(mastery && mastery)
                ?   <div className="program-details__completion">
                        <p className="program-details__mastery">Mastery Requirements: {mastery.requiredCorrect + "/" + mastery.requiredTrials}</p>
                        <p className="program-details__current">Current Completion:
                        <input htmlFor="program-details__masteryUpdate" id="program_currentCorrect" defaultValue={mastery.currentCorrect}/> 
                        /
                        <input htmlFor="program-details__masteryUpdate" id="program_currentTrials" defaultValue={mastery.currentTrials}/> 

                        </p>
                    </div>
                : <p> Loading... Please wait!</p>}
            
            <div className="program-details__notes">
                <h3 className="program-details__notes--title">Notes:</h3>
                <textarea id="program_createNewNote" htmlFor="program_createNewNote" placeholder="Program Notes and Observations..."/>
                <ul className="program-details__notes-list">
                    {ProgramNotes && ProgramNotes
                        .map((note)=>{
                            return (
                                <li className="program-details__card" key={note.id}>
                                    <p className="program-details__card--comment">{note.comment}</p>
                                    <p className="program-details__card--date">{formatDate(note.timestamp)}</p>
                                </li>
                            );
                        })
                    }
                    
                </ul>
            </div>
            <button className="updateProgramButton">DONE</button>

        </form>
    )
}