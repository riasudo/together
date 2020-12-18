import ReactApexChart from "react-apexcharts";

export default function ProgramDetailModal (props){
    const { name, index, category, mastery, description, task, ProgramNotes } = props.data;
    const compare = (a, b) => {
        if (a.timestamp > b.timestamp){
            return -1;
        } if (a.timestamp < b.timestamp){
            return 1;
        } else {
            return 0
        };
    };
    ProgramNotes.sort(compare);

    const formatDate = (string) => {
        return new Date(string).toLocaleDateString();
    }
    return (
        <section className="program-details-card">
            
            <div className="program-details__header">
                <h2 className="program-details__name">{name}</h2>
                <p className="program-details__level">Current Progress: {index}</p>
                <p className="program-details__category">{category}</p>
            </div>
            <div id="program-chart">
                <ReactApexChart options={props.options} series={props.series} type="line" height={350}/>
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
                <h3 className="program-details__label">Notes:</h3>
                <ul className="program-details__notes-list">
                    {ProgramNotes && ProgramNotes
                        .sort()
                        .map((note)=>{
                            return (
                                <li className="program-details__card" key={note.id}>
                                    <p className="program-details__card--date">{formatDate(note.timestamp)}</p>
                                    <p className="program-details__card--comment">{note.comment}</p>
                                </li>
                            );
                        })
                    }
                    
                </ul>
            </div>
            <button className="toggle-updateform" onClick={e=>{props.toggleUpdate(e)}}>RUN PROGRAM</button>
        </section>

    )

}

