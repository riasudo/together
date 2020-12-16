export default function ProgramDetailModal (props){
    const { name, index, category, mastery, description, task, ProgramNotes } = props.data;
    console.log(ProgramNotes);

    const formatDate = (string) => {
        return new Date(string).toLocaleDateString();
    }
    return (
        <li className="program-details-card">
            <div className="program-details__header">
                <h2 className="program-details__name">{name}</h2>
                <p className="program-details__level">Current Progress: {index}</p>
                <p className="program-details__category">{category}</p>
            </div>
            {(mastery && mastery)
                ?   <div className="program-details__completion">
                        <p className="program-details__mastery">Mastery Requirements: {mastery.requiredCorrect + "/" + mastery.requiredTrials}</p>
                        <p className="program-details__current">Current Completion: {mastery.currentCorrect + "/" + mastery.currentTrials}</p>
                    </div>
                : <p> Loading... Please wait!</p>}
            
            <div className="program-details__info">
                <h3 className="program-details__label">Goal: </h3>
                <p className="program-details__goal">{description}</p>
                <h3 className="program-details__label">Task: </h3>
                <p className="program-details__task">{task}</p>
            </div>
            <div className="program-details__notes">
                <h3 className="program-details__notes--title">Notes:</h3>
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

        </li>

    )

}

